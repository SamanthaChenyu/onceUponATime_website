import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./component/header/Header";
import Intro from "./component/intro/Intro";
import Styled from "styled-components";
import Sound from "./component/sound/Sound";

const StyledFixed = Styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  transition: 0.2s;
  background-color: rgba(255, 255, 252, 0);
`;

const App = () => {
  return (
    <>
      <Sound />

      <StyledFixed>
        <Header />
      </StyledFixed>
      <Intro />
    </>
  );
};

export default App;
