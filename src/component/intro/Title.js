import React from "react";
import Styled from "styled-components";
import TitleImg from "./../../images/BigLogo.png";
import { Frame } from "framer";
import MediaQuery from "react-responsive";

const Style = Styled.div`
    position: absolute;
    left: 33%;
    top: 28%;
    transform: translateX(-33%) translateY(-28%);
    cursor: pointer;    
`;
const Animate = {
  scale: [0, 1, 0.8, 1],
  rotate: [0, 2, 0, -2, 10]
};
const Transition = {
  type: "tween",
  duration: 2.8,
  delay: 5
};
const Title = () => {
  return (
    <>
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
    </>
  );
};

export default Title;
