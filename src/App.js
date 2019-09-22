import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import StyledContainer from "./layout/StyledContainer";
import Header from "./header/Header";
import Intro from "./intro/Intro";

const App = () => {
  return (
    <>
      <StyledContainer>
        <Header />
      </StyledContainer>
      <Intro />
    </>
  );
};

export default App;
