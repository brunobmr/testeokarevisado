import Link from "next/link";
import React from "react";

export default function ArrowLeft() {
  return (
    <Link href={"/"} aria-label="Botão voltar para Home" className="flexCenter">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M10 24L22 12M10 24L22 36M10 24H38"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
