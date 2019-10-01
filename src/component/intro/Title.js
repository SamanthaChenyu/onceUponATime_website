import React from "react";
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
    position: absolute;
    left: 35%;
    top: 30%;
    transform: translateX(-35%) translateY(-30%);
    animation: ${rotate} 2s linear infinite;
    animation-delay: 8s;
    cursor: pointer;    
    @media (max-width: 1440px) {
      left: 33%;
      top: 28%;
      transform: translateX(-33%) translateY(-28%);
    } 
`;
const Animate = {
  scale: [0, 1, 0.8, 1],
  rotate: [0, 2, 0, -2, 10]
};
const Transition = {
  type: "tween",
  duration: 1.5,
  delay: 5
};
const Title = () => {
  return (
    <>
      <MediaQuery query="(min-device-width: 1441px)">
        <Style>
          <Frame
            width={350}
            height={350}
            background={"rgba(255, 255, 255, 0)"}
            animate={Animate}
            transition={Transition}
          >
            <img src={TitleImg} alt="Title" style={{ width: "100%" }} />
          </Frame>
        </Style>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1440px)">
        <Style>
          <Frame
            width={280}
            height={280}
            background={"rgba(255, 255, 255, 0)"}
            animate={Animate}
            transition={Transition}
          >
            <img src={TitleImg} alt="Title" style={{ width: "100%" }} />
          </Frame>
        </Style>
      </MediaQuery>
    </>
  );
};

export default Title;
