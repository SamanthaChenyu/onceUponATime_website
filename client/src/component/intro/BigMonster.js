import React from "react";
import Styled from "styled-components";
import BigMonsterImg from "./../../images/big.png";
import BigMonsterGIF from "./../../images/bigMonsterGIF.gif";
import { Frame } from "framer";
import useHover from "@react-hook/hover";
import MediaQuery from "react-responsive";

const StyledBigMonster = Styled.div`
    position: absolute;
    bottom: 325px;
    left: 1%;
    cursor: pointer;
    @media (max-width: 1279px) {
      display: none;
   } 
`;

const BigMonster = () => {
  const [hoverRef, isHovering] = useHover(100, 100);
  const BigMonsterAnimate = {
    x: [-300, -280, -250, -230, -200, -180, -150, -130, -100, -80, -50, -30, 0],
    rotate: [0, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 0],
    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  };
  const BigMonsterTransition = {
    type: "tween",
    duration: 3,
    delay: 0.5
  };
  return (
    <>
      <StyledBigMonster ref={hoverRef}>
        {isHovering ? (
          <Frame
            width={300}
            height={300}
            background={"rgba(255, 255, 255, 0)"}
            animate={BigMonsterAnimate}
            transition={BigMonsterTransition}
          >
            <img
              src={BigMonsterGIF}
              alt="BigMonster"
              style={{ width: "100%" }}
            />
          </Frame>
        ) : (
          <Frame
            width={300}
            height={300}
            background={"rgba(255, 255, 255, 0)"}
            animate={BigMonsterAnimate}
            transition={BigMonsterTransition}
          >
            <img
              src={BigMonsterImg}
              alt="BigMonster"
              style={{ width: "100%" }}
            />
          </Frame>
        )}
      </StyledBigMonster>
    </>
  );
};

export default BigMonster;
