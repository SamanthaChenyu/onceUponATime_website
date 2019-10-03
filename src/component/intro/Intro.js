import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Section from "./../../images/section1_bg.png";
import { Frame, useCycle } from "framer";
import BigMonster from "./BigMonster";
import SmallMonster from "./SmallMonster";
import SubTitle from "./SubTitle";
import Title from "./Title";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import Description from "../../images/subTitle.svg";
import Switch from "./Switch";

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

`;
const StyledDescription = Styled.div`
    width: 300px;
    height: auto;
    position: absolute;
    z-index: 1;
    top: 30%;
    left: 5%;
    transform: translateY(-30%) translateX(-5%);
`;
const Intro = () => {
  return (
    <>
      <StyledBackground>
        <StyledDescription>
          <img src={Description} alt="description" style={{ width: "100%" }} />
        </StyledDescription>
        <StyledIpadPro>
          <Switch />
        </StyledIpadPro>

        <SubTitle />
        <BigMonster />
        <SmallMonster />
      </StyledBackground>
    </>
  );
};

export default Intro;
