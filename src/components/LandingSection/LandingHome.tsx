import React from "react";
import styled from "styled-components";



import MainLogo from "./Logo/MainLogo";
import Background from "./Background-Effect/Background";
import MobileNavbar from "../Templates/Navbars/MobileNavbar";
import DesktopNavbar from "../Templates/Navbars/DesktopNavbar";

const HomeSection = styled.header`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: rgba(18, 19, 22, 0.8);
  background-image: url(./images/Home/Landing/landing-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: overlay;
`;

export default function LandingHome() {
  return (
    <HomeSection>
      <Background/>
      <DesktopNavbar />
      <MobileNavbar/>
      <MainLogo />
    </HomeSection>
  );
}
