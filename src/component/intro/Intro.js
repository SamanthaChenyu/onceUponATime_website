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
position: relative;
   background-image: url(${Section});
   height: 100vh;
    background-repeat: no-repeat;
    background-position: 150px 350px;
    background-size: 100% auto;
    overflow-x: hidden;
`;
const StyledIpadPro = Styled.div`
    width: 850px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-60%);
    @media (max-width: 1440px) {
      width: 650px;
    }
`;

const Intro = () => {
  return (
    <>
      <StyledBackground>
        <StyledIpadPro>
          <img src={Ipad} alt="ipad" style={{ width: "100%" }} />
        </StyledIpadPro>
        <Title />
        <SubTitle />
        <BigMonster />
        <SmallMonster />
      </StyledBackground>
    </>
  );
};

export default Intro;
