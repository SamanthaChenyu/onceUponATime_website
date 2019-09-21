import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import StyledContainer from "./layout/StyledContainer";
import Header from "./header/Header";
import Section from "./images/section1_bg.png";

const App = () => {
  return (
    <>
      <StyledContainer>
        <Header />
      </StyledContainer>
      <img src={Section} alt="logo" style={{ width: "100%" }} />
    </>
  );
};

export default App;
