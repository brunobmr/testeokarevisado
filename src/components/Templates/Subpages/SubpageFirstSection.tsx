import Marked from "@/components/UI/Marked";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const FirstSection = styled.section<CSSProps>`
  background: var(--white);
  font-size: 1rem;
  padding: 4em 8em;

  a {
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    padding: 0.6em 1.4em;
    font-size: 2em;
    font-style: normal;
    font-weight: 500;
    border: 1px solid;
    border-radius: 2.4em;
    transition: 0.3s;
    min-width: max-content;
  }

  header {
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    margin-bottom: 3.17em;
    a {
      border-color: var(
        ${(props) => (props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT")}
      );
      color: var(
        ${(props) => (props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT")}
      );
      -webkit-text-fill-color: var(
        ${(props) => (props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT")}
      );

      &:hover {
        background-color: var(
          ${(props) => (props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT")}
        );
        color: var(--white);
        -webkit-text-fill-color: var(--white);
      }
    }
    .headerContent {
      font-family: 'Open Sans', sans-serif;
      h3, p {
        font-size: 2em;
        font-weight: 400;
        line-height: 1.4em;
      }
      h2 {
        font-size: 3.2em;
        font-weight: 700;
        line-height: 1.25em;
        letter-spacing: 0.009em;
      }
    }
  }

  article {
    font-size: 1em;
    display: flex;
    gap: 5em;
    justify-content: space-between;
    .imagesWrapper {
      order: ${(props) => (props.$projetosemoveis ? "1" : "0")};
      position: relative;
      height: 51em;
      width: 85.6em;
      border-radius: 1.6em;
      box-shadow: ${(props) => (props.$prontosparalevar ? "2px 4px 10px #000000a6" : "-2px 4px 10px #000000a6")};
      background-image: url(${(props) => props.$bg});
      background-size: cover;
      background-position: center;
      img {
        position: absolute;
        top: 2.3em;
        left: 3.2em;
        width: 14.5em;
        height: 7em;
        object-fit: contain;
      }
    }

    aside {
      width: 79.1em;

      p {
        font-family: 'Open Sans', sans-serif;
        font-size: 2em;
        font-weight: 400;
        line-height: 1.4em;
        padding-bottom: 1.6em;
        border-bottom: 0.1rem solid
          var(
            ${(props) =>
              props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT"}
          );
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 2.8em;
        margin: 3.2em 0;
        li {
          display: flex;
          align-items: center;
          -webkit-align-items: center;
          gap: 0.785em;
          font-family: 'Open Sans', sans-serif;
          font-size: 2em;
          font-style: normal;
          font-weight: 400;
          line-height: 1.4em;

          .circle {
            width: 1.8em;
            height: 1.8em;
            padding: 0em 0.45em;
            border-radius: 50%;
            background-color: var(
              ${(props) =>
                props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT"}
            );

            svg {
              width: 0.6364em;
              height: 0.4508em;
            }
          }
        }
      }
      a {
        border-color: var(
          ${(props) => (props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT")}
        );
        background-color: var(
          ${(props) => (props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT")}
        );
        color: var(--white);
        -webkit-text-fill-color: var(--white);

        &:hover {
          border-color: var(
            ${(props) =>
              props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-Light"}
          );
          background-color: var(
            ${(props) => (props.$prontosparalevar ? "--grey" : "--dark-grey")}
          );
          color: var(
            ${(props) =>
              props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-Light"}
          );
          -webkit-text-fill-color: var(
            ${(props) =>
              props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-Light"}
          );
        }
      }
    }
  }

  @media screen and (min-width: 2100px) {
    font-size: 1.2rem;
    padding: 4em 7vw;
  }
  @media screen and (min-width: 2400px) {
    padding: 4em 10vw;
  }
  @media screen and (min-width: 2900px) {
    font-size: 1.5rem;
    padding: 4em 7vw;
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
    font-size: 2rem;
    padding: 2em 1.6em;
    a {
      font-size: 1.5em;
    }
    header {
      margin-bottom: 1.6em;
      .headerContent {
        h3 {
          font-size: 1.5em;
          line-height: 1.84em;
        }
        h2 {
          font-size: 1.8em;
          line-height: 1.57em;
        }
      }
    }
    article {
      flex-direction: column;
      .imagesWrapper {
        order: 0;
        height: 20em;
        width: 100%;
        border-radius: 0.3131em;
        img {
          top: 0.9em;
          left: 1.25em;
          width: 5.5964em;
          height: 2.7395em;
        }
      }

      aside {
        width: 100%;
        p {
          font-size: 1.4em;
          font-style: normal;
          font-weight: 500;
          line-height: 2.2em;
          padding-bottom: 1.14em;
        }
        a {
          width: 100%;
          text-align: center;
        }
        ul {
          margin: 1.6em 0;
          gap: 0.86em;
          li {
            gap: 1.14em;
            font-size: 1.4em;
            font-weight: 500;
            line-height: 1.57em;

            .circle {
              width: 1.8em;
              height: 1.8em;
              padding: 0em 0.45em;
              border-radius: 50%;
              background-color: var(
                ${(props) =>
                  props.$prontosparalevar ? "--Azul-OKA" : "--Oliva-ALT"}
              );

              svg {
                width: 0.6364em;
                height: 0.4508em;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
`;

type CSSProps = {
  $prontosparalevar: boolean;
  $projetosemoveis: boolean;
  $bg: string;
};

type PROPS = {
  subtitle: string;
  title: string;
  description: string;
  imagePath: string;
  article: string;
  itemsArray: string[];
  linkRef: string;
  linkText: string;
};

export default function SubpageFirstSection(props: PROPS) {
  const router = useRouter();
  const isProntos = router.pathname === "/ProntosParaLevar";
  const isProjetosEMoveis = router.pathname === "/ProjetosEMoveis";
  const items = props.itemsArray.map((item, key) => (
    <li key={key}>
      <span className="circle flexCenter">
        <Marked />
      </span>
      {item}
    </li>
  ));
  return (
    <FirstSection
      $prontosparalevar={isProntos}
      $projetosemoveis={isProjetosEMoveis}
      $bg={props.imagePath}
    >
      <header>
        <div className="headerContent">
          <p>{props.subtitle}</p>
          <h2>{props.title}</h2>
          <h3>{props.description}</h3>
        </div>
        <Link href={"https://api.whatsapp.com/send?phone=558599700518"}>Fale Conosco</Link>
      </header>
      <article>
        <div className="imagesWrapper">
          <Image
            src="/images/Pages/Landing/logo.png"
            alt="OKA lev Logo"
            height={992}
            width={2000}
            priority
          />
        </div>
        <aside>
          <p>{props.article}</p>
          <ul>{items}</ul>
          <Link href={props.linkRef}>{props.linkText}</Link>
        </aside>
      </article>
    </FirstSection>
  );
}

const teste = {
  subtitle: "Linhas de Móveis",
  title: "Prontos pra levar",
  description: "Seu espaço, mais rápido.",
  imagePath: "/images/Pages/Landing/background1.jpg",
  article:
    "Criamos uma linha de móveis para quem deseja rapidez, custo baixo, sem abrir mão da qualidade. São diversas linhas, tipos, modelos e medidas de produtos para as mais variadas situações; produtos de corpo único e módulos componíveis.",
  itemsArray: [
    "Fazemos uma simulação do seu ambiente",
    "Entregamos montados",
    "Possibilidade de venda física ou on-line",
    "Entrega em até 10 dias",
  ],
  linkRef: "https://api.whatsapp.com/send?phone=558599700518",
  linkText: "Compre agora",
};
