import React, { useState } from "react";
import Styled, { keyframes } from "styled-components";
import TitleImg from "./../../images/BigLogo.png";
import { Frame } from "framer";
import MediaQuery from "react-responsive";

const rotate = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const Style = Styled.div`
    animation: ${rotate} 0.8s linear infinite;
    animation-delay: 8s;
    cursor: pointer;  
    @media (max-width: 1280px) {
      animation-delay: 0s;
    }  
`;
const Animate = {
  scale: [0, 1, 0.8, 1],
  rotate: [0, 2, 0, -2, 10]
};
const Transition = {
  type: "tween",
  duration: 1.5,
  delay: 4
};
const MBTransition = {
  type: "tween",
  duration: 1.5
};
const Title = ({ LogoSize }) => {
  return (
    <>
      <Style>
        <MediaQuery query="(min-device-width: 1280px)">
          <Frame
            width={LogoSize}
            height={LogoSize}
            background={"rgba(255, 255, 255, 0)"}
            animate={Animate}
            transition={Transition}
          >
            <img src={TitleImg} alt="Title" style={{ width: "100%" }} />
          </Frame>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1279px)">
          <Frame
            width={LogoSize}
            height={LogoSize}
            background={"rgba(255, 255, 255, 0)"}
            animate={Animate}
            transition={MBTransition}
          >
            <img src={TitleImg} alt="Title" style={{ width: "100%" }} />
          </Frame>
        </MediaQuery>
      </Style>
    </>
  );
};

export default Title;
