import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const SubpageArticle = styled.article<cssprops>`
  font-size: 1rem;
  flex: 1;
  background: var(--black-alt);
  display: flex;
  flex-direction: column;

  .subpage-content {
    padding: 6em 0;
    order: ${(props) => props.$order};
    flex-direction: column;
    gap: 2em;
    h3 {
      text-shadow: 0 0.4em 6em rgba(18, 19, 22, 0.4);
      font-size: 2.4em;
      font-family: 'Open Sans', sans-serif;
      color: var(--white);
      font-weight: 500;
    }
    a {
      background-color: var(${(props) => props.$linkBackground});
      border: 0.1rem solid var(${(props) => props.$linkBackground});
      height: 2.4em;
      padding: 0.6em 1.4em;
      border-radius: 2.4em;
      font-family: 'Open Sans', sans-serif;
      font-weight: 500;
      color: var(--white);
      -webkit-text-fill-color: var(--white);
      transition: 0.4s;
      font-size: 2em;
      
      &:hover {
        color: var(${(props) => props.$linkBackgroundHover});
        -webkit-text-fill-color: var(${(props) => props.$linkBackgroundHover});

        background-color: var(
          ${(props) => (props.$order === 1 ? `--grey` : `--dark-grey`)}
        );
        border-color: var(${(props) => props.$linkBackgroundHover});
      }
    }
    .logo-wrapper {
      width: 16em;
      height: 4em;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .subpage-background {
    flex: 1;
    background-image: url(${(props) => props.$background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
    font-size: 1rem;
    flex-direction: row;
    .subpage-content {
      flex: 1;
      padding: 0;
      order: ${(props) => (props.$order === 0 ? 1 : 0)};
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 374px) {
    font-size: 0.7rem;
  }
`;

type cssprops = {
  $background: string;
  $linkBackground: string;
  $linkBackgroundHover: string;
  $order: number;
};

type subsectionProps = {
  text: string;
  background: string;
  linkBackground: string;
  linkBackgroundHover: string;
  order: number;
  alt: string;
  redirect: string;
};

export default function Subpage(props: subsectionProps) {
  return (
    <SubpageArticle
      $linkBackgroundHover={props.linkBackgroundHover}
      $background={props.background}
      $linkBackground={props.linkBackground}
      $order={props.order}
    >
      <div className="subpage-content flexCenter">
        <div className="logo-wrapper">
          <Image
            src="/images/Home/Subpages/text-logo.png"
            alt={props.alt}
            width={2000}
            height={944}
            priority
          />
        </div>

        <h3>{props.text}</h3>
        <Link
          href={props.redirect}
          aria-label="Botão de Redirecionamento"
          className="flexCenter"
        >
          Conheça
        </Link>
      </div>
      <div className="subpage-background" />
    </SubpageArticle>
  );
}
