import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<MenuCSS>`
  cursor: pointer;

  svg {
    filter: ${(props) =>
      props.$opened
        ? `invert(44%) sepia(61%) saturate(339%) hue-rotate(33deg) brightness(96%) contrast(92%)`
        : `invert(89%) sepia(67%) saturate(87%) hue-rotate(205deg) brightness(108%) contrast(101%)`};
    transition: filter 600ms;
  }

  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
`;

type MenuCSS = {
  $opened: boolean;
};

type MenuPROPS = {
  className: string;
  isMenuOpen: boolean;
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  classNameButton: string;
};

export default function MenuHamburguer({
  className,
  toggleMenu,
  isMenuOpen,
  classNameButton,
}: MenuPROPS) {
  return (
    <StyledButton
      aria-label="Botão Menu"
      onClick={toggleMenu}
      $opened={isMenuOpen}
      className={`flexCenter ${classNameButton}`}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" className={className}>
        <path
          className="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className="line line2" d="M 20,50 H 60" />
        <path
          className="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </StyledButton>
  );
}
