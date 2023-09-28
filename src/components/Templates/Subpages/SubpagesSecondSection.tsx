import React from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import Link from "next/link";

const SecondSection = styled.section`
  background-color: var(--black-alt);
  font-size: 1rem;
  padding: 8em;

  .container {
    flex-direction: column;
    gap: 4.4em;
    width: 81em;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    color: var(--white);
    -webkit-text-fill-color: var(--white);
    h2 {
      font-size: 6.7em;
      font-weight: 500;
      line-height: 1.283em;
      letter-spacing: -0.026rem;
    }
    p {
      font-size: 2.5em;
      font-style: normal;
      font-weight: 400;
      line-height: 1.782em;
    }
    a {
      padding: 0.6em 1.4em;
      font-size: 2em;
      font-weight: 500;
      border-radius: 4.8em;
      color: inherit;
      -webkit-text-fill-color: inherit;
      border: 1px solid;
      transition: 0.3s;

      &.verde:hover {
        border-color: var(--Oliva-Light);
        background-color: var(--dark-grey);
        color: var(--Oliva-Light);
        -webkit-text-fill-color: var(--Oliva-Light);
      }

      &.azul:hover {
        background-color: var(--grey);
        color: var(--Azul-OKA);
        -webkit-text-fill-color: var(--Azul-OKA);
      }

      

      &.azul {
        border-color: var(--Azul-OKA);
        background: var(--Azul-OKA);
        &:hover {
          border-color: var("--Oliva-Light");
          background-color: var("--dark-grey"});
          color: var("--Oliva-Light");
          -webkit-text-fill-color: var("--Oliva-Light");
        }
      }
      &.verde {
        background: var(--Oliva-ALT);
        border-color: var(--Oliva-ALT);
        
      }
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
    font-size: 2rem;
    padding: 2.4em 1.2em;

    .container {
      gap: 1.2em;
      width: 37em;
      h2 {
        font-size: 2.4em;
        line-height: 1.34em;
      }
      p {
        font-size: 1.4em;
        line-height: 1.572em;
      }
      a {
        font-size: 1.5em;
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

export default function SubpagesSecondSection() {
  const router = useRouter();
  const isProntos = router.pathname === `/ProntosParaLevar`;
  const isProjetos = router.pathname === `/ProjetosEMoveis`;

  const prontos = (
    <>
      <h2>Móveis de qualidade Prontos pra Levar</h2>
      <p>Fale conosco para efetuar sua compra</p>
      <Link href={"https://api.whatsapp.com/send?phone=558599700518"} className="azul">
        Fale conosco
      </Link>
    </>
  );
  const projetos = (
    <>
      <h2>Solicite um orçamento</h2>
      <p>Converse conosco, e faremos um projeto adaptado ao seu gosto!</p>
      <Link href={"https://api.whatsapp.com/send?phone=558599700518"} className="verde">
        Fale conosco
      </Link>
    </>
  );

  return (
    <SecondSection className="flexCenter">
      <div className="container flexCenter">
        {isProjetos && projetos}
        {isProntos && prontos}
      </div>
    </SecondSection>
  );
}
