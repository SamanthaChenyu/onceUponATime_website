import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Section from "./../images/section1_bg.png";
import Ipad from "./../images/iPadPro.png";
import { Frame, useCycle } from "framer";
import BigMonster from "./../images/big.png";
import BigMonsterGIF from "../images/bigMonsterGIF.gif";
import useHover from "@react-hook/hover";

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
    cursor: pointer;
`
const Intro = () => {
    const [hoverRef, isHovering] = useHover(100, 100);
    const variants = {
        hidden: { scale: 1, y: 400 },
        visible: { scale: 1, y: 0},
      }
    const transition = {
        type: "tween",
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.5,
    }
  return (
    <>
      <StyledBackground>
        <img src={Section} alt="logo" style={{ width: "100%" }} />
      </StyledBackground>
        <StyledIpadPro>
          <img src={Ipad} alt="ipad" style={{ width: "100%" }} />
        </StyledIpadPro>
        <StyledBigMonster ref={hoverRef}>
            {isHovering ? (
            <Frame  width={400} height={400} background={"rgba(255, 255, 255, 0)"} >
                <img src={BigMonsterGIF} alt="logo" style={{ width: "100%" }} />
            </Frame>):(
            <Frame  width={400} height={400} background={"rgba(255, 255, 255, 0)"}  initial="hidden"
            animate="visible"
            transition={transition}
            variants={variants}
            >
            <img src={BigMonster} alt="logo" style={{ width: "100%" }} />
            </Frame>                
            )}
        </StyledBigMonster>

    </>
  );
};

export default Intro;
