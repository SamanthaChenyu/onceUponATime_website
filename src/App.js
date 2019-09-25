import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import StyledContainer from "./layout/StyledContainer";
import Header from "./header/Header";
import Intro from "./intro/Intro";
import Styled from "styled-components";

const StyledFixed = Styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  transition: 0.2s;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.35);
`;

const App = () => {
  return (
    <>
      <StyledFixed>
        <Header />
      </StyledFixed>
      <Intro />
    </>
  );
};

export default App;
