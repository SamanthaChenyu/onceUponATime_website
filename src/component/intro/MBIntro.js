import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import IPad from "./../../images/MBbg.png";
import Section from "./../../images/section1_bg.png";

const StyledBackground = Styled.div`   
   height: 100vh;
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
`;
const StyledIpadPro = Styled.div`
    width: 80%;
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
`;

const Intro = () => {
  return (
    <>
      <StyledBackground>
        <StyledIpadPro>
          <img src={IPad} alt="ipad" style={{ width: "100%" }} />
        </StyledIpadPro>
      </StyledBackground>
    </>
  );
};

export default Intro;
