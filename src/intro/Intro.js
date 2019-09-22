import React, { useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Section from "./../images/section1_bg.png";
import Ipad from "./../images/iPadPro.png";
import StyledContainer from "../layout/StyledContainer";

const StyledBackground = Styled.div`
    position: absolute;
    z-index: -1;
    height: calc(100vh - 87px);
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
    width: 900px;
    margin: 60px auto;
`;

const Intro = () => {
  return (
    <>
      <StyledBackground>
        <img src={Section} alt="logo" style={{ width: "100%" }} />
      </StyledBackground>
      <StyledContainer>
        <StyledIpadPro>
          <img src={Ipad} alt="ipad" style={{ width: "100%" }} />
        </StyledIpadPro>
      </StyledContainer>
    </>
  );
};

export default Intro;
