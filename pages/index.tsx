import LandingHome from "@/components/LandingSection/LandingHome";
import OurWorkingSection from "@/components/HomePage/OurWorkingSection/OurWorkingSection";
import Prontos from "@/components/HomePage/ProntosSection/Prontos";
import SubpagesSection from "@/components/HomePage/SubPagesSection/SubpagesSection";
import Footer from "@/components/Templates/Footer";
import Head from "next/head";
import styled from "styled-components";

const IndexMain = styled.main`
  background-color: var(--black-alt);
  header,
  section,
  footer {
    animation: delayanimation 1s forwards !important;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/home-favicon.png" />
        <title>OKA lev | Home Page</title>
      </Head>
      <IndexMain>
        <LandingHome />
        <SubpagesSection />
        <Prontos />
        <OurWorkingSection />
        <Footer />
      </IndexMain>
    </>
  );
}
