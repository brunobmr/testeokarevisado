import React, { ReactNode } from "react";
import Link from "next/link";
import ArrowUpRight from "../../UI/ArrowUpRight";

export default function InfoContent({ children }: { children?: ReactNode }) {
  return (
    <article className="infoContent desktop">
      <h2>
        <span>Nossa construção</span>
      </h2>
      {children}
      <p>
        <span>
          Toda a tecnologia para os seus móveis. Nossa fábrica traz rapidez e
          eficiência para nossos clientes.
        </span>
        <span>
          Converse conosco, e faremos um projeto adaptado ao seu gosto!
        </span>
      </p>
      <Link href={"https://api.whatsapp.com/send?phone=558599700518"} className="flexCenter">
        Solicite Orçamento
        <ArrowUpRight />
      </Link>
    </article>
  );
}
