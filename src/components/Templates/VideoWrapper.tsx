import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import VideosControl from "../UI/VideosControl";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function VideoWrapper({className}:{className: string}) {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0,
    played: 0,
    seeking: false,
    Buffer: true,
  });
  const { playing, muted, volume, played, seeking, Buffer } = videoState;
  const playPauseHandler = () =>
    setVideoState({ ...videoState, playing: !videoState.playing });

  const unmuteHandler = (value: number) =>
    setVideoState({ ...videoState, muted: false, volume: value });

  const muteHandler = () =>
    setVideoState({ ...videoState, muted: true, volume: 0 });

  const volumeHandler = (value: number) => {
    if (value === 0) {
      setVideoState({ ...videoState, muted: true, volume: 0 });
      return;
    }
    setVideoState({ ...videoState, muted: false, volume: value });
  };

  const progressHandler = (state: Object) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };
  const onSeekMouseDownHandler = () =>
    setVideoState({ ...videoState, seeking: true });

  const OnSeekMouseUpHandler = (value: number) => {
    setVideoState({ ...videoState, seeking: false });
    const playerControls = videoRef.current?.firstElementChild
      ?.firstElementChild as HTMLVideoElement;

    if (playerControls) {
      playerControls.currentTime = played * 100;
    }
  };

  const onSeekHandler = (value: number) => {
    setVideoState({ ...videoState, played: value / 100 });
    const playerControls = videoRef.current?.firstElementChild
      ?.firstElementChild as HTMLVideoElement;

    if (playerControls) {
      playerControls.currentTime = played * 100;
    }
  };
  return (
    <div className={`video-wrapper ${className}`} ref={videoRef}>
      <ReactPlayer
        className="player"
        url="/videos/OKAvideo.mp4"
        width="100%"
        height="100%"
        playing={playing}
        volume={volume}
        muted={muted}
        onProgress={progressHandler}
      />
      <VideosControl
        played={played}
        playPause={playPauseHandler}
        isPlaying={playing}
        isMuted={muted}
        muteHandler={muteHandler}
        unmuteHandler={unmuteHandler}
        volumeHandler={volumeHandler}
        volume={volume}
        onSeekMouseDown={onSeekMouseDownHandler}
        onSeekMouseUp={OnSeekMouseUpHandler}
        onSeek={onSeekHandler}
        video={videoRef}
      />
    </div>
  );
}
