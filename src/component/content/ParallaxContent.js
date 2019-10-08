import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import { Parallax } from "rc-scroll-anim";
import Content from "./../layout/StyledContent";

const StyledContent = Styled(Content)`
    padding-top: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledDescriptionBox = Styled.div`
    width: 500px;
    height: 480px;
    position: relative;
    display: flex;
    align-items: flex-end;
`;
const StyledNumber = Styled.div`
    width: 200px;
    position: absolute;
    right: 0;
    top: 0;
`;
const StyledText = Styled.div`
    h2 {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;   
    white-space: pre-wrap;   
    }
    p {
      font-size: 16px;
    text-align: justify;
    padding-right: 25px;
    }
`;
const StyledTextLeft = Styled.div`
    text-align: right;
    position: relative;
    h2 {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;   
    white-space: pre-wrap;   
    }
    p {
      font-size: 16px;
    text-align: justify;
    padding-left: 25px;
    }
`;
const StyledIconLeft = Styled.div`
    width: 100px;
    height: 50px;
    position: absolute;
    top: -50px;
    right: 0px;
`;
const StyledIpadPro = Styled.div`
    width: 650px;
    @media (max-width: 1440px) {
      width: 650px;
    }
`;

const ParallaxContent = ({
  ipadImage,
  numberImage,
  icon,
  title,
  description,
  animate
}) => {
  return (
    <>
      {animate ? (
        <StyledContent>
          <StyledDescriptionBox>
            <StyledNumber>
              <Parallax
                animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
                style={{
                  transform: "translateY(-100px)",
                  opacity: 0
                }}
                className="code-box-shape"
              >
                <img src={numberImage} alt="ipad" style={{ width: "100%" }} />
              </Parallax>
            </StyledNumber>
            <StyledText>
              <div style={{ width: 100, height: 50 }}>
                <img src={icon} alt="icon" style={{ width: "100%" }} />
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </StyledText>
          </StyledDescriptionBox>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{
              transform: "translateX(100px)",
              opacity: 0
            }}
            className="code-box-shape"
          >
            <StyledIpadPro>
              <img src={ipadImage} alt="ipad" style={{ width: "100%" }} />
            </StyledIpadPro>
          </Parallax>
        </StyledContent>
      ) : (
        <StyledContent>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{
              transform: "translateX(-100px)",
              opacity: 0
            }}
            className="code-box-shape"
          >
            <StyledIpadPro>
              <img src={ipadImage} alt="ipad" style={{ width: "100%" }} />
            </StyledIpadPro>
          </Parallax>
          <StyledDescriptionBox>
            <StyledNumber>
              <Parallax
                animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
                style={{
                  transform: "translateY(-100px)",
                  opacity: 0
                }}
                className="code-box-shape"
              >
                <img src={numberImage} alt="ipad" style={{ width: "100%" }} />
              </Parallax>
            </StyledNumber>
            <StyledTextLeft>
              <StyledIconLeft>
                <img src={icon} alt="icon" style={{ width: "100%" }} />
              </StyledIconLeft>
              <h2>{title}</h2>
              <p>{description}</p>
            </StyledTextLeft>
          </StyledDescriptionBox>
        </StyledContent>
      )}
    </>
  );
};

export default ParallaxContent;
