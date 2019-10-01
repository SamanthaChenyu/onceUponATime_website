import React from "react";
import Styled from "styled-components";
import SubTitleImg from "./../../images/callName.png";
import { Frame } from "framer";
import MediaQuery from "react-responsive";

const Style = Styled.div`
    position: absolute;
    left: 65%;
    top: 15%;
    transform: translateX(-65%) translateY(-15%);
    cursor: pointer;
    @media (max-width: 1440px) {
      left: 68%;
      top: 10%;
      transform: translateX(-68%) translateY(-10%);      
    }    
`;
const Animate = {
  opacity: [0, 1]
};
const Transition = {
  type: "tween",
  duration: 0.5,
  delay: 6.8
};
const SubTitle = () => {
  return (
    <>
      <MediaQuery query="(min-device-width: 1441px)">
        <Style>
          <Frame
            width={200}
            height={200}
            background={"rgba(255, 255, 255, 0)"}
            animate={Animate}
            transition={Transition}
          >
            <img src={SubTitleImg} alt="SubTitle" style={{ width: "100%" }} />
          </Frame>
        </Style>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1440px)">
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
      </MediaQuery>
    </>
  );
};

export default SubTitle;
