import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Ipad from "./../../images/iPadPro.png";
import { Parallax } from "rc-scroll-anim";

const StyledContent = Styled.div`
 position: relative;
 width: 100%;
 height: 100vh;
`;

const StyledIpadPro = Styled.div`
    width: 850px;
    float: right;
    margin: 130px 30px;
    @media (max-width: 1280px) {
      width: 650px;
    }
`;

const Content = () => {
  return (
    <>
      <StyledContent>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{
            transform: "translateX(100px)",
            opacity: 0
          }}
          className="code-box-shape"
        >
          <StyledIpadPro>
            <img src={Ipad} alt="ipad" style={{ width: "100%" }} />
          </StyledIpadPro>
        </Parallax>
      </StyledContent>
    </>
  );
};

export default Content;
