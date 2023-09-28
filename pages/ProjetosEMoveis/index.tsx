
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
        <link rel="icon" href="/sobMedida-favicon.png" />
        <title>OKA lev | Projetos e Móveis</title>
      </Head>
      <ProjEMovMain>
        <SubpageLanding {...ProjetosHeader}/>
        <SubpageFirstSection {...ProjetosFirstSection}/>
        <SubpagesSecondSection/>
        <Footer />
      </ProjEMovMain>
    </>
  );
}
const ProjetosHeader = {
  firstText: "Projetamos e fazemos",
  pageName: "Projetos e Móveis",
  secondText: "Ambientes feitos sob medida",
  backgroundPath: "./images/Pages/Landing/background2.jpg",
};

const ProjetosFirstSection = {
  subtitle: "Projetos e Móveis",
  title: "Planeje seu espaço",
  description: "Um planejamento específico para o seu espaço",
  imagePath: "/images/Pages/Landing/background2.jpg",
  article:
    "Com 28 anos de mercado, projetamos, reformamos e mobiliamos seu ambiente, seja ele residencial ou profissional. Com equipe de arquitetos, elaboramos projetos de arquitetura e interiores, seja ele residencial, corporativo ou médico-odontológico. E, estamos sempre aptos a executá-los.",
  itemsArray: [
    "Projetos e execução com a mesma equipe",
    "Marcenaria de alto padrão tecnológico e com ótimo nível de personalização",
    "Somos loja de fábrica, o que confere preço atrativo",
  ],
  linkRef: "https://api.whatsapp.com/send?phone=558599700518",
  linkText: "Solicite o orçamento",
};