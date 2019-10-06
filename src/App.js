import React, { useState } from "react";
import Styled from "styled-components";
import "antd/dist/antd.css";
import "./App.css";
import Sound from "./component/sound/Sound";
import Header from "./component/header/Header";
import Intro from "./component/intro/Intro";
import ParallaxContent from "./component/content/ParallaxContent";
import ResponsiveCarousel from "./component/content/ResponsiveCarousel";
import Contact from "./component/content/Contact";
import createICON from "./images/createICON.gif";
import editICON from "./images/editICON.gif";
import drawICON from "./images/drawICON.gif";
import ONE from "./images/one.png";
import TWO from "./images/two.png";
import THREE from "./images/three.png";
import Introduce1 from "./images/Introduce1.png";
import Introduce2 from "./images/Introduce2.png";
import Introduce3 from "./images/Introduce3.png";

const StyledFixed = Styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
  background-color: rgba(255, 255, 255, 0.8);
`;

const App = () => {
  return (
    <>
      <StyledFixed>
        <Header />
      </StyledFixed>
      <Intro />
      <div id="Information" className="element">
        <ParallaxContent
          animate
          ipadImage={Introduce1}
          numberImage={ONE}
          icon={createICON}
          title={`個人創作\n互動對話影音繪本`}
          description="『 從前從前 』能幫助您快速創建屬於自己的互動故事，您可以在不同場景中編輯與加入各種角色，簡易及方便地讓您享受到製作影音繪本的樂趣。"
        />
        <ParallaxContent
          animate={false}
          ipadImage={Introduce2}
          numberImage={TWO}
          icon={editICON}
          title={`紀錄對話\n親密感極佳的有聲書`}
          description="內建螢幕錄影與外部錄音功能，錄影過程中可任意切換場景，替角色配上獨特的聲音，不僅好玩，更能加深親子之間有趣以及美好的回憶。"
        />
        <ParallaxContent
          animate
          ipadImage={Introduce3}
          numberImage={THREE}
          icon={drawICON}
          title={`繪製角色\n創造屬於自己的貼圖`}
          description="支援Apple Pencil繪圖功能，讓您即時創作想要的角色與圖案，讓互動繪本更具個人特色與魅力！"
        />
      </div>
      <div id="About" className="element">
        <ResponsiveCarousel />
      </div>
      <Contact />
    </>
  );
};

export default App;
