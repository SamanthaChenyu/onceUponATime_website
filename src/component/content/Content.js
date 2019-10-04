import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Introduce from "./../../images/Introduce1.png";
import { Parallax } from "rc-scroll-anim";
import ONE from "./../../images/one.png";

const StyledContent = Styled.div`
 position: relative;
 width: 100%;
`;

const StyledNumber = Styled.div`
    width: 300px;
    position: absolute;
`;
const StyledIpadPro = Styled.div`
    width: 850px;
    float: right;
    margin: 200px 30px;
    @media (max-width: 1280px) {
      width: 650px;
    }
`;

const Content = () => {
  return (
    <>
      <StyledContent>
        <StyledNumber>
          <Parallax
            animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{
              transform: "translateY(-100px)",
              opacity: 0
            }}
            className="code-box-shape"
          >
            <img src={ONE} alt="ipad" style={{ width: "100%" }} />
          </Parallax>
        </StyledNumber>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{
            transform: "translateX(100px)",
            opacity: 0
          }}
          className="code-box-shape"
        >
          <StyledIpadPro>
            <img src={Introduce} alt="ipad" style={{ width: "100%" }} />
          </StyledIpadPro>
        </Parallax>
      </StyledContent>
    </>
  );
};

export default Content;
