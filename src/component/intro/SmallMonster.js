import React from "react";
import Styled from "styled-components";
import SmallMonsterImg from "./../../images/small.png";
import SmallMonsterGIF from "./../../images/smallMonsterGIF.gif";
import { Frame } from "framer";
import useHover from "@react-hook/hover";
import MediaQuery from "react-responsive";

const StyledSmallMonster = Styled.div`
    position: absolute;
    left: 75%;
    transform: translateX(-75%);
    cursor: pointer;
    bottom: 460px;
    @media (max-width: 1440px) {
      bottom: 460px;
    }  
`;

const SmallMonster = () => {
  const [Hover, isHover] = useHover(100, 100);
  const SmallMonsterAnimate = {
    y: [250, 100, 200, 50, 0],
    x: [200, 0],
    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  };
  const SmallMonsterTransition = {
    type: "tween",
    duration: 2,
    delay: 3
  };
  return (
    <>
      <MediaQuery query="(min-device-width: 1441px)">
        <StyledSmallMonster ref={Hover}>
          {isHover ? (
            <Frame
              width={300}
              height={300}
              background={"rgba(255, 255, 255, 0)"}
              animate={SmallMonsterAnimate}
              transition={SmallMonsterTransition}
            >
              <img
                src={SmallMonsterGIF}
                alt="SmallMonsterGIF"
                style={{ width: "100%" }}
              />
            </Frame>
          ) : (
            <Frame
              width={300}
              height={300}
              background={"rgba(255, 255, 255, 0)"}
              animate={SmallMonsterAnimate}
              transition={SmallMonsterTransition}
            >
              <img
                src={SmallMonsterImg}
                alt="SmallMonster"
                style={{ width: "100%" }}
              />
            </Frame>
          )}
        </StyledSmallMonster>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1440px)">
        <StyledSmallMonster ref={Hover}>
          {isHover ? (
            <Frame
              width={250}
              height={250}
              background={"rgba(255, 255, 255, 0)"}
              animate={SmallMonsterAnimate}
              transition={SmallMonsterTransition}
            >
              <img
                src={SmallMonsterGIF}
                alt="SmallMonsterGIF"
                style={{ width: "100%" }}
              />
            </Frame>
          ) : (
            <Frame
              width={250}
              height={250}
              background={"rgba(255, 255, 255, 0)"}
              animate={SmallMonsterAnimate}
              transition={SmallMonsterTransition}
            >
              <img
                src={SmallMonsterImg}
                alt="SmallMonster"
                style={{ width: "100%" }}
              />
            </Frame>
          )}
        </StyledSmallMonster>
      </MediaQuery>
    </>
  );
};

export default SmallMonster;
