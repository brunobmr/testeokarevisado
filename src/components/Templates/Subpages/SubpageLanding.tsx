import React from "react";
import styled, { css } from "styled-components";
import MobileNavbar from "../Navbars/MobileNavbar";
import DesktopNavbar from "../Navbars/DesktopNavbar";
import { useRouter } from "next/router";
import Image from "next/image";

const PagesHeader = styled.header<SubpageLandingCSS>`
  font-size: 1rem;
  background-image: url(${(props) => props.$backgroundPath});
  background-color: rgba(18, 19, 22, 0.8);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: overlay;
  .HeaderContent {
    font-family: 'Open Sans', sans-serif;
    padding: 8.68em 0;
    display: flex;
    justify-content: center;

    div {
      font-size: 1em;
      padding: 2em 0;
      width: 38.9em;

      img {
        width: 100%;
        height: 7em;
        object-fit: contain;
        margin-bottom: 2em;
      }

      h1 {
        text-align: center;
        color: var(--white);
        -webkit-text-fill-color: var(--white);
        font-size: 2.4em;
        font-weight: 500;
      }
    }

    p {
      color: var(--white);
      -webkit-text-fill-color: var(--white);
      font-size: 2em;
      font-weight: 500;
    }

    .firstText {
      align-self: flex-start;
      -webkit-align-self: flex-start;
      ${(props) =>
        props.$isProjetosEMoveis &&
        css`
          align-self: flex-end;
          -webkit-align-self: flex-end;
        `}
    }

    .secondText {
      align-self: flex-end;
      -webkit-align-self: flex-end;
      ${(props) =>
        props.$isProjetosEMoveis &&
        css`
          align-self: flex-start;
          -webkit-align-self: flex-start;
        `}
    }
  }
  @media screen and (min-width: 2100px) {
    font-size: 1.3rem;
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
    font-size: 1rem;
    height: 60vh;
    height: 60dvh;

    .HeaderContent {
      justify-content: center;
      align-items: center;
      -webkit-align-items: center;
      flex-direction: column;
      height: 100%;
      gap: 1.6em;
      div {
        width: 18em;
        h1 {
          font-size: 2em;
        }
      }

      p.firstText,
      p.secondText {
        align-self: unset;
        -webkit-align-self: unset;
        font-size: 1.4em;
      }
    }
  }
`;

type Props = {
  firstText: string;
  pageName: string;
  secondText: string;
  backgroundPath: string;
};

type SubpageLandingCSS = {
  $isProjetosEMoveis: boolean;
  $backgroundPath: string;
};

export default function SubpageLanding(props: Props) {
  const router = useRouter();
  const isProjetosEMoveis = router.pathname === "/ProjetosEMoveis";
  return (
    <PagesHeader
      $isProjetosEMoveis={isProjetosEMoveis}
      $backgroundPath={props.backgroundPath}
    >
      <DesktopNavbar />
      <MobileNavbar />
      <div className="HeaderContent">
        <p className="firstText">{props.firstText}</p>
        <div>
          <Image
            src="/images/Pages/Landing/logo.png"
            alt="OKA lev Logo"
            height={992}
            width={2000}
            priority
          />
          <h1>{props.pageName}</h1>
        </div>
        <p className="secondText">{props.secondText}</p>
      </div>
    </PagesHeader>
  );
}
