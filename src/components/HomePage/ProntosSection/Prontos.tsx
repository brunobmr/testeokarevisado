import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Cardswrapper from "./Cardswrapper";

const ReadyToGo = styled.section`
  font-size: 1rem;
  padding: 4em 8em;
  background-color: var(--white);
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.2em;

    .content-text {
      // display: flex;
      // flex-direction: column;
      // gap: 1.2em;
      font-family: 'Open Sans', sans-serif;

      h2 {
        font-family: 'Open Sans', sans-serif;
        font-size: 3.2em;
        font-weight: 700;
        color: var(--Azul-OKA);
        -webkit-text-fill-color: var(--Azul-OKA);
        margin-bottom: 0.375em;
      }

      p {
        font-size: 2em;
        font-weight: 400;
      }
    }
  }

  .content-link {
    padding: 0.6em 1.4em;
    border-radius: 2.4em;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    color: var(--Azul-OKA);
    -webkit-text-fill-color: var(--Azul-OKA);
    border: 0.1rem solid var(--Azul-OKA);
    transition: 0.4s;
    font-size: 2em;

    &:hover {
      background: var(--Azul-OKA);
      color: var(--white);
      -webkit-text-fill-color: var(--white);
    }
  }

  .cardswrapper {
    width: 100%;
    .swiper-pagination {
      position: unset;
      margin-top: 2em;

      span {
        width: 1em;
        height: 1em;
      }
    }
  }
  @media screen and (min-width: 1025px) {
    .content-link.mobile {
      display: none;
    }
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
  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
    padding: 1.2em 1.2em 2.4em 1.2em;

    .content {
      margin-bottom: 0;
      .content-text {
        gap: 0.4em;
        h2 {
          font-size: 1.9em;
        }

        p {
          font-size: 1.4em;
          line-height: 1.7em;
        }
      }
    }

    .cardswrapper {
      margin: 2em 0;
      .swiper-pagination {
        position: unset;
        margin-top: 2em;

        span {
          width: 0.8em;
          height: 0.8em;
        }
      }
    }

    .content-link.desktop {
      display: none;
    }
    .content-link.mobile {
      span {
        font-size: 1.4em;
      }
    }
  }
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 570px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export default function Prontos() {
  return (
    <ReadyToGo>
      <div className="content">
        <div className="content-text">
          <h2>Prontos para levar</h2>
          <p>
            Criamos uma linha de móveis para quem deseja rapidez, custo baixo,
            sem abrir mão da qualidade.
          </p>
        </div>
        <Link
          href={"https://api.whatsapp.com/send?phone=558599700518"}
          className="content-link desktop flexCenter"
        >
          Fale Conosco
        </Link>
      </div>
      <div className="cardswrapper">
        <Cardswrapper />
      </div>
      <Link
        href={"https://api.whatsapp.com/send?phone=558599700518"}
        className="content-link mobile flexCenter"
      >
        Fale Conosco
      </Link>
    </ReadyToGo>
  );
}
