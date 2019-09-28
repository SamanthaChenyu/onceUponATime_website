import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Section from "./../../images/section1_bg.png";
import Ipad from "./../../images/iPadPro.png";
import { Frame, useCycle } from "framer";
import BigMonster from "./BigMonster";
import SmallMonster from "./SmallMonster";
import SubTitle from "./SubTitle";
import Title from "./Title";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";

const StyledBackground = Styled.div`
    position: absolute;
    z-index: -1;
    height: 100vh;
    overflow-y: hidden;
    &::before {
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
    }
`;
const StyledIpadPro = Styled.div`
    width: 850px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-60%);
    @media (max-width: 1280px) {
      width: 650px;
    }
`;

const Intro = () => {
  return (
    <>
      <StyledBackground>
        <img src={Section} alt="logo" style={{ width: "100%" }} />
      </StyledBackground>
      <StyledIpadPro>
        <img src={Ipad} alt="ipad" style={{ width: "100%" }} />
      </StyledIpadPro>
      <Title />
      <SubTitle />
      <BigMonster />
      <SmallMonster />
    </>
  );
};

export default Intro;
