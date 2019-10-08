import React from "react";
import Styled from "styled-components";
import SubTitleImg from "./../../images/callName.png";
import { Frame } from "framer";
import MediaQuery from "react-responsive";

const Animate = {
  opacity: [0, 1]
};
const Transition = {
  type: "tween",
  duration: 0.5,
  delay: 6
};
const SubTitle = () => {
  return (
    <>
      <Frame
        width={150}
        height={150}
        background={"rgba(255, 255, 255, 0)"}
        animate={Animate}
        transition={Transition}
      >
        <img src={SubTitleImg} alt="SubTitle" style={{ width: "100%" }} />
      </Frame>
    </>
  );
};

export default SubTitle;
