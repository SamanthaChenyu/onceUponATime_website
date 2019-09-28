import React from "react";
import Styled from "styled-components";
import SubTitleImg from "./../../images/callName.png";
import { Frame } from "framer";
import MediaQuery from "react-responsive";

const Style = Styled.div`
    position: absolute;
    left: 68%;
    top: 10%;
    transform: translateX(-68%) translateY(-10%);
    cursor: pointer;    
`;
const Animate = {
  opacity: [0, 1]
};
const Transition = {
  type: "tween",
  duration: 0.5,
  delay: 8
};
const SubTitle = () => {
  return (
    <>
      <Style>
        <Frame
          width={150}
          height={150}
          background={"rgba(255, 255, 255, 0)"}
          animate={Animate}
          transition={Transition}
        >
          <img src={SubTitleImg} alt="SubTitle" style={{ width: "100%" }} />
        </Frame>
      </Style>
    </>
  );
};

export default SubTitle;
