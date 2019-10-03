import React, { useState } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Ipad from "./../../images/iPadPro.png";

const StyledContent = Styled.div`
 position: relative;
 width: 100%;
 height: 100vh;
`;
const StyledIpadPro = Styled.div`
    width: 850px;
    position: absolute;
    top: 60%;
    right: 0;
    transform: translateY(-60%);
    @media (max-width: 1280px) {
      width: 650px;
    }
`;

const Content = () => {
  return (
    <>
      <StyledContent>
        <StyledIpadPro>
          <img src={Ipad} alt="ipad" style={{ width: "100%" }} />
        </StyledIpadPro>
      </StyledContent>
    </>
  );
};

export default Content;
