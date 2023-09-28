import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ArrowUpRight from "../../UI/ArrowUpRight";
import { useRouter } from "next/router";

const DesktopNav = styled.nav`
  font-size: 1rem;
  padding: 2.8em 8em;
  justify-content: space-between !important;
  position: relative;
  z-index: 50;

  a {
    color: var(--white);
    -webkit-text-fill-color: var(--white);
    font-size: 2em;
    font-family: 'Open Sans', sans-serif;
    line-height: 2.4rem;
    transition: 0.3s;

    &.active{
      color: var(--Oliva-Light);
    -webkit-text-fill-color: var(--Oliva-Light);
    }

    &:hover {
      color: var(--Oliva-Light);
      -webkit-text-fill-color: var(--Oliva-Light);
    }
  }

  .subpages {
    display: flex;
    gap: 4.5em;
  }

  .logo-link {
    width: 6.5em;
    height: 3.1884em;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .buyNow {
    gap: 0.4em;
    font-size: 2em;
    span {
      display: flex;
      svg {
        width: 1em;
        height: 1em;
      }
    }
    &:hover span {
      color: var(--Oliva-OKA);
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
    display: none !important;
  }
`;

export default function DesktopNavbar() {
  const router = useRouter()
  const pron = router.pathname === "/ProntosParaLevar"
  const proj = router.pathname === "/ProjetosEMoveis"
  const notIndex = router.pathname !== '/'

  return (
    <DesktopNav className="flexCenter">
      <div className="subpages">
        {notIndex && <Link href={"/"}>Home</Link>}
        <Link href={"/ProjetosEMoveis"} className={proj ? "active" : ""}>Projetos e Móveis</Link>
        <Link href={"/ProntosParaLevar"} className={pron ? "active" : ""}>Prontos para levar</Link>
      </div>

      <Link href={"https://api.whatsapp.com/send?phone=558599700518"} className="buyNow flexCenter">
        Compre Agora
        <ArrowUpRight />
      </Link>
    </DesktopNav>
  );
}
