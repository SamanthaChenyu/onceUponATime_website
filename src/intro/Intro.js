import React, { useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Section from "./../images/section1_bg.png";
import Ipad from "./../images/iPadPro.png";
import StyledContainer from "../layout/StyledContainer";
import { Frame, Scroll, useCycle } from "framer";
import BigMonster from "./../images/big.png";

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
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;
const StyledBigMonster = Styled.div`
    position: absolute;
    bottom: 450px;
    left: 15%;
    transform: translateX(-15%);
`
const Intro = () => {
  return (
    <>
      <StyledBackground>
        <img src={Section} alt="logo" style={{ width: "100%" }} />
      </StyledBackground>

        <StyledIpadPro>
          <img src={Ipad} alt="ipad" style={{ width: "100%" }} />
        </StyledIpadPro>
<StyledBigMonster>
            <Frame  width={400} height={400} background={"rgba(255, 255, 255, 0)"} >
                <img src={BigMonster} alt="logo" style={{ width: "100%" }} />
            </Frame>
            </StyledBigMonster>

    </>
  );
};

export default Intro;
