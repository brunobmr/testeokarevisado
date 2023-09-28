import Image from "next/image";
import React from "react";
import styled from "styled-components";

const S_Loading = styled.main`
  position: fixed;
  inset: 0;
  z-index: 10000;
  // height: 400vh;
  background-color: var(--black-alt);
  color: var(--white);
  font-family: "Gothic A1", sans-serif;
  animation: delayanimation 0.5s 2.5s forwards reverse;
  font-size: 1rem;

  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3em;
  }

  .imgsWrapper {
    img {
      width: 15em;
      height: 15em;
      opacity: 0;
      animation: ll 1s forwards;

      &.img1 {
        animation-delay: 740ms;
      }
      &.img2 {
        animation-delay: 1350ms;
      }
      &.img3 {
        animation-delay: 2160ms;
      }
    }
  }

  span {
    font-size: 2.4em;
    opacity: 0;
    animation: ll 1s 0s forwards;
  }

  @keyframes ll {
    100% {
      opacity: 1;
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
  @media screen and (max-width: 1200px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
    span {
      font-size: 2.8em;
    }
  }
  @media screen and (max-width: 450px) {
    font-size: 0.6rem;
  }
`;

export default function Loading() {
  const text = "Sonhe. Projete. Realize.";
  const MappedText = text.split("").map((item, idx) => (
    <span key={idx} style={{ animationDelay: `${idx * 90}ms` }}>
      {item}
    </span>
  ));

  return (
    <S_Loading>
      <div className="container">
        <div className="imgsWrapper">
          <Image
            src={"/images/Loading/O.png"}
            alt="OKA - Letra A em formato de Triângulo"
            width={300}
            height={300}
            priority
            className="img1"
          />
          <Image
            src={"/images/Loading/K.png"}
            alt="OKA - Letra A em formato de Triângulo"
            width={300}
            height={300}
            priority
            className="img2"
          />
          <Image
            src={"/images/Loading/A.png"}
            alt="OKA - Letra A em formato de Triângulo"
            width={300}
            height={300}
            priority
            className="img3"
          />
        </div>
        <div className="textWrapper">{MappedText}</div>
      </div>
    </S_Loading>
  );
}
