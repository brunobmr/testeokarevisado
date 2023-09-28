import React, { useEffect, useState, Ref, RefObject } from "react";
import styled, { css } from "styled-components";

import { Slider } from "@mui/material";
import {
  Pause,
  PlayArrow,
  VolumeUp,
  VolumeMute,
  Fullscreen,
} from "@mui/icons-material";
import screenfull from "screenfull";

const Middle = styled.div`
  font-size: 1rem;
  position: absolute;
  inset: 0;
  .playpause {
    color: var(--Oliva-OKA);
  }

  .icon__btn {
    font-size: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffffd9;
    border-radius: 50%;
    width: 10em;
    height: 10em;
    svg {
      font-size: 5em;
    }
  }
  @media screen and (min-width: 2100px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 2900px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 3300px) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 3400px) {
    font-size: 1.9rem;
  }
  @media screen and (min-width: 3800px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 1750px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1550px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1400px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 0.6rem;
  }
`;

const Bottom = styled.div`
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffffd9;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0em 1em;
  height: 5em;
  gap: 2em;

  .controls {
    font-size: 4em;
    color: var(--Oliva-OKA);

    &.volume {
      font-size: 4em;
    }
    cursor: pointer;
  }

  .volumeSlider,
  .seekerSlider {
    span {
      color: var(--Oliva-OKA);
    }
  }
  .volumeWrapper {
    position: relative;
  }
  .slider-wrapper {
    top: -2.5em;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 200;
    width: 12em;
    background: #ffffffd9;
    padding: 0 2em;
    border-radius: 1em;
  }
  @media screen and (min-width: 2100px) {
    font-size: 1.2rem;
    .volumeSlider,
    .seekerSlider {
      span {
        height: 1rem;
      }
    }
  }
  @media screen and (min-width: 2900px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 3300px) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 3400px) {
    font-size: 1.9rem;
  }
  @media screen and (min-width: 3800px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 1750px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1550px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1400px) {
    font-size: 0.7rem;
    .slider-wrapper {
      width: 16em;
    }
  }
  @media screen and (max-width: 1200px) {
    font-size: 0.6rem;
    .slider-wrapper {
      top: -4.5em;
    }
  }
`;

const Control = styled.div<CSS>`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  transition: 0.2s;

  .bottom {
    transition: 0.2s;
    opacity: 0;
  }

  .icon__btn {
    padding: 0 10px;
    color: #7b2cbf;
  }

  &:hover .bottom {
    opacity: 1;
  }

  .middle div {
    opacity: 0;
    visibility: hidden;
    ${(props) =>
      props.$ft &&
      css`
        transition: 0.2s;
        opacity: 1;
        visibility: visible;
      `}
    ${(props) =>
      !props.$isPlaying &&
      css`
        transition: 0.2s;
        opacity: 1;
        visibility: visible;
      `}
  }
`;
type CSS = {
  $ft: boolean;
  $isPlaying: boolean;
};

type Props = {
  playPause: Function;
  muteHandler: React.MouseEventHandler;
  onSeekMouseUp: Function;
  onSeekMouseDown: React.MouseEventHandler;
  onSeek: Function;
  volumeHandler: Function;
  unmuteHandler: Function;
  isPlaying: boolean;
  isMuted: boolean;
  played: number;
  volume: number;
  video: RefObject<HTMLDivElement>;
};

export default function VideosControl(props: Props) {
  const [volumeNumber, setVolumeNumber] = useState<number>(50);
  const [showIndicator, setShowIndicator] = useState<boolean>(true);
  const VolumeIcon = props.isMuted ? (
    <VolumeMute
      fontSize="inherit"
      className="controls volume"
      onClick={() => props.unmuteHandler(volumeNumber / 100)}
    />
  ) : (
    <VolumeUp
      fontSize="inherit"
      className="controls volume"
      onClick={props.muteHandler}
    />
  );

  const playPauseVideo = () => {
    props.playPause();
    setShowIndicator(false);
  };

  const PlayingPauseIcon = props.isPlaying ? (
    <Pause
      fontSize="inherit"
      className="playpause controls"
      onClick={playPauseVideo}
    />
  ) : (
    <PlayArrow
      fontSize="inherit"
      className="playpause controls"
      onClick={playPauseVideo}
    />
  );

  useEffect(() => {
    props.volumeHandler(volumeNumber / 100);
    /* eslint-disable-next-line*/
  }, [volumeNumber]);

  const teste = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(props.video.current!);
    }
  };

  return (
    <Control $isPlaying={props.isPlaying} $ft={showIndicator}>
      <Middle className="flexCenter middle" onClick={playPauseVideo}>
        <div className="icon__btn flexCenter">{PlayingPauseIcon}</div>
      </Middle>

      <Bottom className="bottom">
        {PlayingPauseIcon}
        <Slider
          className="seekerSlider"
          min={0}
          max={100}
          value={props.played && props.played * 100}
          onMouseDown={props.onSeekMouseDown}
          onChangeCommitted={(e: any) => {
            props.onSeekMouseUp(e.target.value);
          }}
          onChange={(e: any) => {
            props.onSeek(e.target.value);
          }}
        />
        <div className="volumeWrapper">
          {VolumeIcon}
          <div className="slider-wrapper">
            <Slider
              className="volumeSlider"
              min={0}
              max={100}
              value={volumeNumber}
              onChange={(e: any) => [setVolumeNumber(e.target.value)]}
            />
          </div>
        </div>
        <Fullscreen className="controls" onClick={teste} />
      </Bottom>
    </Control>
  );
}
