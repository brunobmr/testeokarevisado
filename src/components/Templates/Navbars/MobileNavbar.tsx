import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import MenuHamburguer from "@/components/UI/MenuHamburguer";
import ArrowUpRight from "../../UI/ArrowUpRight";
import { useRouter } from "next/router";
import ArrowLeft from "@/components/UI/ArrowLeft";

const MobileNav = styled.nav<MobileMenuCSS>`
  padding: 0rem 1.2rem;
  background: ${(props) =>
    props.$opened ? " rgba(29, 29, 29, 1)" : " rgba(29, 29, 29, 0.8)"};
  position: fixed;
  height: 6rem;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;

  .logo-link {
    width: 6.5em;
    height: 3.1884em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .dropdown {
    position: absolute;
    top: 6rem;
    background: ${(props) =>
      props.$opened ? " rgba(29, 29, 29, 1)" : " rgba(29, 29, 29, 0.8)"};
    width: 100%;
    left: 0;
    display: grid;
    grid-template-rows: ${(props) => (props.$opened ? "1fr" : "0fr")};
    transition: 0.4s;
    ${(props) =>
      props.$opened &&
      css`
        animation: dropshadow 0s 0.3s forwards;
      `};

    .dropdown-links {
      overflow: hidden;
      padding: ${(props) => (props.$opened ? "1.2rem" : "0")};
      display: grid;

      a {
        opacity: ${(props) => (props.$opened ? "1" : "0")};
        color: var(--white);
        font-size: 2rem;
        font-family: 'Open Sans', sans-serif;
        line-height: 2.4rem;
        padding: 1.2rem 0;

        span {
          display: flex;
          svg {
            width: 1em;
            height: 1em;
          }
        }
        border-top: 0.1rem solid var(--white);
        &:first-child {
          border-top: 0.1rem solid transparent;
        }
        &:last-child {
          justify-content: space-between !important;
        }
      }
    }
  }

  @keyframes dropshadow {
    100% {
      box-shadow: 0rem 1rem 1rem black;
    }
  }

  button {
    &.menu {
      margin-left: auto;
    }
    svg {
      width: 48px;
      height: 48px;
    }
  }

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

type MobileMenuCSS = {
  $opened: boolean;
};

export default function MobileNavbar() {
  const router = useRouter();
  const notIndex = router.pathname !== "/";
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenuHandler = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };
  return (
    <MobileNav $opened={menuOpen}>
      {notIndex && <ArrowLeft />}
      <MenuHamburguer
        classNameButton="menu"
        className={`${menuOpen && `opened`}`}
        toggleMenu={toggleMenuHandler}
        isMenuOpen={menuOpen}
      />
      <Link href={"/"} className="logo-link">
        <Image
          src="/images/Home/Landing/logolink.png"
          alt="OKA lev Logo"
          height={944}
          width={2000}
          priority
        />
      </Link>
      <div className="dropdown">
        <div className="dropdown-links">
          <Link href={"/ProjetosEMoveis"}>Projetos e Móveis</Link>
          <Link href={"/ProntosParaLevar"}>Prontos para levar</Link>
          <Link
            href={"https://api.whatsapp.com/send?phone=558599700518"}
            className="flexCenter"
          >
            Compre Agora
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </MobileNav>
  );
}
