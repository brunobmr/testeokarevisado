import React from "react";
import styled from "styled-components";

import Subpage from "./Subpage";

const SubpagesWrapper = styled.section`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 1024px){
    flex-direction: column;
  }
`;

export default function SubpagesSection() {
  return (
    <SubpagesWrapper>
      <Subpage
        text="Projetos e Móveis"
        background="./images/Home/Subpages/right-back.jpg"
        order={0}
        linkBackground="--Oliva-ALT"
        linkBackgroundHover="--Oliva-Light"
        redirect="/ProjetosEMoveis"
        alt="Imagem Cozinha Mobiliada OKA"
      />
      <Subpage
        text="Prontos pra levar"
        background="./images/Home/Subpages/left-back.jpg"
        order={1}
        linkBackground="--Azul-OKA"
        linkBackgroundHover="--Azul-OKA"
        redirect="/ProntosParaLevar"
        alt="Imagem Sala Mobiliada OKA"
      />
    </SubpagesWrapper>
  );
}
