import styled from "styled-components";
import InfoContent from "./InfoContent";
import VideoWrapper from "../../Templates/VideoWrapper";

const Info = styled.section`
  font-size: 1rem;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(18, 19, 22, 0.8) 0%,
      rgba(18, 19, 22, 0.8) 100%
    ),
    url(./images/Home/OurWork/background.png) center no-repeat;
  background-size: cover;
  gap: 6em;

  .infoContent {
    width: 58.6em;
    display: flex;
    flex-direction: column;
    gap: 4em;
    h2 {
      font-size: 1em;
      padding: 1.6em 0;
      color: var(--white);
      font-family: "El Messiri", sans-serif;
      font-style: normal;
      font-weight: 700;
      span {
        font-size: 4em;
      }
    }
    p {
      font-size: 1em;
      color: var(--white);
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: 400;
      padding-right: 4.8em;
      display: flex;
      flex-direction: column;
      gap: 2em;
      padding-bottom: 4em;
      border-bottom: 0.1rem solid var(--white);
      line-height: 3.2em;
      span {
        font-size: 2.4em;
      }
    }
    a {
      color: var(--white);
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: 700;
      line-height: 2em;
      gap: .67em;
      transition: 0.3s;
      font-size: 2em;
      span {
        display: flex;
        svg {
          width: 1em;
          height: 1em;
        }
      }
      &.flexCenter {
        justify-content: flex-start;
        width: fit-content;
      }
      &:hover span,
      &:hover {
        color: var(--Oliva-Light);
      }
    }
  }

  .video-wrapper {
    font-size: 1em;
    position: relative;
    background: black;
    width: 96em;
    height: 46.6em;
    border-radius: 2.9008em;
    overflow: hidden;
    // div {
    //   width: 100%;
    //   height: 100%;
    // }
  }
  @media screen and (min-width: 1025px) {
    .video-wrapper.Mobile {
      display: none;
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
  @media screen and (max-width: 1024px) {
    height: unset;
    font-size: 1.4rem;
    padding-top: 3.1em;
    .video-wrapper.Desktop {
      display: none;
    }
    .video-wrapper.Mobile {
      width: 35.0153em;
      height: 16.997em;
      border-radius: 1.0581em;
    }
    .infoContent {
      width: 100%;
      padding: 1.2em;
      gap: 2em;
      h2 {
        padding: 0.4em 0em;
        span {
          font-size: 2em;
        }
      }
      p {
        gap: 0.86em;
        padding-bottom: 2em;
        border-bottom: 0.1rem solid var(--white);
        line-height: 2.2em;
        span {
          font-size: 1.4em;
        }
      }
      a {
        font-weight: 500;
        line-height: 2.2em;
        font-size: 1.4em;
      }
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    .video-wrapper.Mobile {
      width: 100%;
      height: 25em;
      border-radius: 1.0581em;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 400px) {
    font-size: .9rem;
  }
`;

export default function OurWorkingSection() {
  return (
    <Info className="flexCenter">
      <InfoContent>
        <VideoWrapper className="Mobile" />
      </InfoContent>
      <VideoWrapper className="Desktop" />
    </Info>
  );
}
