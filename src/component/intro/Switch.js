import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Ipad from "./../../images/iPadPro.png";
import Draw from "./../../images/iPadProDraw.png";
import Look from "./../../images/iPadProLook.png";
import Title from "./Title";
import MediaQuery from "react-responsive";
import AudioMusic from "../sound/bloop-noise.wav";

const StyledTitle = Styled.div`
    position: absolute;
    z-index: 0;
    transition: all .5s;
`;
const StyledLeftSide = Styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0px;
    height: calc(100% - 90px);
    cursor: pointer;
`;
const StyledCreate = Styled.div`
    position: absolute;
    z-index: 1;
    width: 30%;
    height: 60px;
    bottom: 30px;
    left: 30px;
    cursor: pointer;
`;
const StyledLook = Styled.div`
    position: absolute;
    z-index: 1;
    width: 30%;
    height: 60px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
`;
const StyledDraw = Styled.div`
    position: absolute;
    z-index: 1;
    width: 30%;
    height: 60px;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
`;

const audio = new Audio(AudioMusic);

const Switch = () => {
  const [page, setPage] = useState(Ipad);
  const [x, setX] = useState(70);
  const [y, setY] = useState(110);
  const [size, setSize] = useState(280);
  const [biggerSize, setBiggerSize] = useState(350);
  const [biggerX, setBiggerX] = useState(100);
  const [biggerY, setBiggerY] = useState(150);
  function changeForCreate() {
    audio.play();
    setPage(Ipad);
    setSize(280);
    setX(70);
    setY(110);
    // min1441
    setBiggerSize(350);
    setBiggerX(100);
    setBiggerY(150);
  }
  function changeForLook() {
    audio.play();
    setPage(Look);
    setSize(150);
    setX("60%");
    setY(50);
    // min1441
    setBiggerSize(180);
    setBiggerX("60%");
    setBiggerY(80);
  }
  function changeForDraw() {
    audio.play();
    setPage(Draw);
    setSize(280);
    setX(100);
    setY(180);
    // min1441
    setBiggerSize(350);
    setBiggerX(130);
    setBiggerY(230);
  }
  return (
    <>
      <img src={page} alt="ipad" style={{ width: "100%" }} />

      <MediaQuery query="(min-device-width: 1441px)">
        <StyledTitle style={{ top: biggerX, left: biggerY }}>
          <Title LogoSize={biggerSize} />
        </StyledTitle>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1440px)">
        <StyledTitle style={{ top: x, left: y }}>
          <Title LogoSize={size} />
        </StyledTitle>
      </MediaQuery>

      <StyledLeftSide onClick={() => alert("想要下載我們的APP了嗎？^_<")} />
      <StyledCreate onClick={changeForCreate} />
      <StyledLook onClick={changeForLook} />
      <StyledDraw onClick={changeForDraw} />
    </>
  );
};

export default Switch;
