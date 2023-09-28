import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Instagram from "../UI/Instagram";

const SharedFooter = styled.footer<FooterCSS>`
  font-size: 1rem;
  padding: 16.1em 8em 10.8em 8em;
  background-color: var(
    ${(props) => (props.$isIndex ? "--white" : "--black-alt")}
  );

  .footerContent {
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10.7em;
    border-bottom: 0.1rem solid
      var(${(props) => (props.$isIndex ? "--Oliva-ALT" : "--white")});

    .OKA {
      color: var(${(props) => (props.$isIndex ? "--black-alt" : "--white")});
      -webkit-text-fill-color: var(
        ${(props) => (props.$isIndex ? "--black-alt" : "--white")}
      );
      font-size: 2.4em;
      display: flex;
      flex-direction: column;
      gap: 1em;

      h3 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
      }
      h4 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
      }
    }

    .navbar {
      font-size: 1em;
      display: flex;
      flex-direction: column;
      gap: 1.5em;

      .routerLinks {
        display: flex;
        gap: 4.5em;
        a {
          transition: 0.3s;
          font-family: 'Open Sans', sans-serif;
          color: var(
            ${(props) => (props.$isIndex ? "--black-alt" : "--white")}
          );
          -webkit-text-fill-color: var(
            ${(props) => (props.$isIndex ? "--black-alt" : "--white")}
          );

          font-size: 2em;
          font-weight: 400;

          &:hover{
            color: var(
              ${(props) => (props.$isIndex ? "--Oliva-ALT" : "--Oliva-Light")}
            );
            -webkit-text-fill-color: var(
              ${(props) => (props.$isIndex ? "--Oliva-ALT" : "--Oliva-Light")}
            );
          }
        }
      }

      .instagram {
        align-self: flex-end;
        span {
          display: flex;
          svg {
            width: 4em;
            height: 4em;
          }
        }
      }
    }
  }

  .copyright {
    font-size: 1em;
    padding: 2.7em 0em;
    color: var(${(props) => (props.$isIndex ? "--black-alt" : "--white")});
    -webkit-text-fill-color: var(
      ${(props) => (props.$isIndex ? "--black-alt" : "--white")}
    );

    h3 {
      font-size: 1.6em;
      font-weight: 400;
      text-align: center;
      font-family: 'Open Sans', sans-serif;
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
    font-size: 1rem;
    padding: 2em 1.2em;
    .footerContent {
      flex-direction: column;
      align-items: center;
      -webkit-align-items: center;
      gap: 0.8em;
      -webkit-gap: 0.8em;
      padding-bottom: 0.8em;

      .OKA {
        align-items: center;
        -webkit-align-items: center;
        gap: 0.8em;
        font-size: 1em;

        h3 {
          font-weight: 400;
          font-size: 2.6em;
          line-height: 2.4em;
        }

        h4 {
          font-size: 2.4em;
          font-weight: 400;
          line-height: 2.2em;
        }
      }
      .navbar {
        padding: 1.2em 0em;
        gap: 1.6em;
        .routerLinks a {
          font-size: 2em;
        }
        .instagram {
          align-self: center;
          margin: 2rem 0;
          span {
            svg {
              width: 3rem;
              height: 3rem;
            }
          }
        }
      }
    }
    .secondLink {
      order: -1;
    }
    .copyright {
      text-align: center;
      h3 {
        font-size: 2.2em;
        font-style: normal;
        line-height: 2em;
      }
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 390px) {
    font-size: 0.6rem;
  }
`;

type FooterCSS = {
  $isIndex: boolean;
};

export default function Footer() {
  const router = useRouter();
  const isIndex = router.pathname === "/";
  return (
    <SharedFooter $isIndex={isIndex}>
      <div className="footerContent">
        <div className="OKA">
          <h3>OKA Lev - Projetos e Móveis</h3>
          <h4>Josué Oka. </h4>
        </div>
        <nav className="navbar">
          <div className="routerLinks">
            <Link href={"/"}>
              Home
              <span></span>
            </Link>
            <Link href={"/ProjetosEMoveis"} className="secondLink">
              Projetos e Móveis
              <span></span>
            </Link>
            <Link href={"/ProntosParaLevar"}>
              Prontos para Levar
              <span></span>
            </Link>
          </div>
          <Link href={"https://www.instagram.com/okalevoficial/"} className="instagram">
            <p className="none" style={{fontSize: '2rem'}}>Instagram Link</p>
            <Instagram />
          </Link>
        </nav>
      </div>
      <div className="copyright">
        <h3>© 2022 OKA</h3>
      </div>
    </SharedFooter>
  );
}
