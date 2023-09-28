import React from "react";
import Image from "next/image";
import styled from "styled-components";

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
    animation: scale 25s ease forwards;
    transform: scale(1.3);
  }

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(18, 19, 22, 0.8);

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export default function Background() {
  return (
    <>
      <BackgroundImage className="home-img-wrapper">
        <Image
          src="/images/Home/Landing/landing-background.jpg"
          alt=""
          priority
          height={3240}
          width={6144}
        />
      </BackgroundImage>
      <BackgroundOverlay className="background-overlay" />
    </>
  );
}
