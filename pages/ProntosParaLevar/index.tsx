
import Footer from "@/components/Templates/Footer";
import SubpageFirstSection from "@/components/Templates/Subpages/SubpageFirstSection";
import SubpageLanding from "@/components/Templates/Subpages/SubpageLanding";
import SubpagesSecondSection from "@/components/Templates/Subpages/SubpagesSecondSection";
import Head from "next/head";
import styled from "styled-components";

const ProjEMovMain = styled.main`
  background-color: var(--black);
`;

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/paraLevar-favicon.png" />
        <title>OKA lev | Prontos para Levar</title>
      </Head>
      <ProjEMovMain>
        <SubpageLanding {...ProntosHeader}/>
        <SubpageFirstSection {...ProntosFirstSection}/>
        <SubpagesSecondSection/>
        <Footer />
      </ProjEMovMain>
    </>
  );
}

const ProntosHeader = {
  firstText: "Conheça nossas linhas de móveis",
  pageName: "Prontos pra levar",
  secondText: "Móveis prontos para seu espaço",
  backgroundPath: "./images/Pages/Landing/background1.jpg",
};

const ProntosFirstSection = {
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