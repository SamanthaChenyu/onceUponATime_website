import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Section from "./../images/section1_bg.png";
import Ipad from "./../images/iPadPro.png";
import { Frame, useCycle } from "framer";
import BigMonster from "./../images/big.png";
import BigMonsterGIF from "../images/bigMonsterGIF.gif";
import useHover from "@react-hook/hover";
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
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    @media (max-width: 1280px) {
      width: 600px;
    }
`;
const StyledBigMonster = Styled.div`
    position: absolute;
    bottom: 450px;
    left: 15%;
    transform: translateX(-15%);
    cursor: pointer;
    @media (max-width: 1280px) {
      bottom: 325px;
    }
`;

const Intro = () => {
  const [hoverRef, isHovering] = useHover(100, 100);
  const variants = {
    hidden: { y: -1000, rotate: 20 },
    visible: { y: 0, rotate: [-20, 20, -10, 0] }
  };
  const transition = {
    ease: [0.17, 1, 1, 1],
    duration: 0.8,
    delay: 2
  };
  const BigMonsterAnimate = {
    y: [0, 150, -150, 0, 100, 0],
    rotate: [0, 40, -20, 0]
  };
  const BigMonsterTransition = {
    type: "tween",
    duration: 1,
    delay: 3
  };
  return (
    <>
      <StyledBackground>
        <img src={Section} alt="logo" style={{ width: "100%" }} />
      </StyledBackground>

      <StyledIpadPro>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={transition}
          variants={variants}
        >
          <img src={Ipad} alt="ipad" style={{ width: "100%" }} />
        </motion.div>
      </StyledIpadPro>
      <MediaQuery query="(min-device-width: 1281px)">
        <StyledBigMonster ref={hoverRef}>
          {isHovering ? (
            <Frame
              width={400}
              height={400}
              background={"rgba(255, 255, 255, 0)"}
              animate={BigMonsterAnimate}
              transition={BigMonsterTransition}
            >
              <img src={BigMonsterGIF} alt="logo" style={{ width: "100%" }} />
            </Frame>
          ) : (
            <Frame
              width={400}
              height={400}
              background={"rgba(255, 255, 255, 0)"}
              animate={BigMonsterAnimate}
              transition={BigMonsterTransition}
            >
              <img src={BigMonster} alt="logo" style={{ width: "100%" }} />
            </Frame>
          )}
        </StyledBigMonster>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1280px)">
        <StyledBigMonster ref={hoverRef}>
          {isHovering ? (
            <Frame
              width={250}
              height={250}
              background={"rgba(255, 255, 255, 0)"}
              animate={BigMonsterAnimate}
              transition={BigMonsterTransition}
            >
              <img src={BigMonsterGIF} alt="logo" style={{ width: "100%" }} />
            </Frame>
          ) : (
            <Frame
              width={250}
              height={250}
              background={"rgba(255, 255, 255, 0)"}
              animate={BigMonsterAnimate}
              transition={BigMonsterTransition}
            >
              <img src={BigMonster} alt="logo" style={{ width: "100%" }} />
            </Frame>
          )}
        </StyledBigMonster>
      </MediaQuery>
    </>
  );
};

export default Intro;
