import React from "react";
import Image from "next/image";
import styled from "styled-components";

const LogoWrapper = styled.div`
  font-size: 1rem;
  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 42.2em;
  transform: translate(-50%, -50%);
  flex-direction: column;
  gap: 3.2em;
  
  img {
    width: 42.2em;
    height: 20.7em;
  }

  h2 {
    color: var(--white);
    font-family: 'Open Sans', sans-serif;
    letter-spacing: .05rem;
    font-size: 2.4em;
  }

  @media screen and (min-width: 2300px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 2900px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 3300px) {
    font-size: 2.1rem;
  }
  @media screen and (min-width: 3800px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 1600px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1366px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    img {
      width: 16.4571em;
      height: 8em;
    }
  }
`;

export default function MainLogo() {
  return (
    <LogoWrapper className="flexCenter">
      <h1 id="headerTitle" className="none">
        OKA lev
      </h1>
      <Image
        src="/images/Home/Landing/logolink.png"
        alt="OKA lev Logo"
        height={992}
        width={2000}
        className="Logo-Image"
        priority
        aria-labelledby="headerTitle"
      />
      <h2>Sonhe. Projete. Realize.</h2>
    </LogoWrapper>
  );
}
