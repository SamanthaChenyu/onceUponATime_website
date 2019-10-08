import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Section from "./../../images/section1_bg.png";
import { Frame, useCycle } from "framer";
import BigMonster from "./BigMonster";
import SmallMonster from "./SmallMonster";
import SubTitle from "./SubTitle";
import MediaQuery from "react-responsive";
import Description from "../../images/subTitle.svg";
import Switch from "./Switch";

const StyledBackground = Styled.div`   
   height: 1000px;
   overflow-x: hidden;
   &::before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 110%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 100px bottom;
    background-image: url(${Section});    
   }   
   @media (max-width: 1440px) {
    height: 800px;
   } 
`;
const StyledIpadPro = Styled.div`
    width: 650px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-60%);
`;
const StyledDescription = Styled.div`
    width: 290px;
    height: auto;
    position: absolute;
    z-index: 1;
    left: 20px;
    bottom: 350px;

`;
const StyledSubTitle = Styled.div`
  position: absolute;
  right: 100px;
  top: -50px;
`;

const Intro = () => {
  return (
    <>
      <StyledBackground>
        <StyledDescription>
          <img src={Description} alt="description" style={{ width: "100%" }} />
        </StyledDescription>
        <StyledIpadPro>
          <StyledSubTitle>
            <SubTitle />
          </StyledSubTitle>
          <Switch />
        </StyledIpadPro>

        <BigMonster />
        <SmallMonster />
      </StyledBackground>
    </>
  );
};

export default Intro;
