import React from "react";
import Styled from "styled-components";
import BigMonsterImg from "./../../images/big.png";
import BigMonsterGIF from "./../../images/bigMonsterGIF.gif";
import { Frame } from "framer";
import useHover from "@react-hook/hover";
import MediaQuery from "react-responsive";

const StyledBigMonster = Styled.div`
    position: absolute;
    bottom: 450px;
    left: 15%;
    transform: translateX(-15%);
    cursor: pointer;
    @media (max-width: 1280px) {
      bottom: 300px;
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
              <img
                src={BigMonsterGIF}
                alt="BigMonster"
                style={{ width: "100%" }}
              />
            </Frame>
          ) : (
            <Frame
              width={400}
              height={400}
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
              <img
                src={BigMonsterGIF}
                alt="BigMonster"
                style={{ width: "100%" }}
              />
            </Frame>
          ) : (
            <Frame
              width={250}
              height={250}
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
      </MediaQuery>
    </>
  );
};

export default BigMonster;
