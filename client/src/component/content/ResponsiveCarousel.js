import React from "react";
import { Avatar, Carousel, Icon } from "antd";
import Styled, { keyframes } from "styled-components";
import Content from "./../layout/StyledContent";
import Nancy from "./../../images/Nancy.jpg";
import Vicky from "./../../images/Vicky.jpg";
import Samantha from "./../../images/Samantha.jpg";
import Jason from "./../../images/Jason.jpg";
import NewsImgOne from "./../../images/bnext.jpeg";
import NewsImgTwo from "./../../images/sina.jpg";
import NewsImgThree from "./../../images/ettoday.jpg";

const StyledAboutUs = Styled.div`
    width: 300px;
    padding-top: 100px;
    margin: 0px auto;
`;

const StyledNewsImage = Styled.div`
    width: 1000px;
    padding-top: 100px;
    margin: 0px auto;
    @media (max-width: 1075px) {
      width: 800px;
    } 
    @media (max-width: 800px) {
      width: 100%;
    }
`;

const StyledNewsImg = Styled.div`
      width: 640px;
      margin: 0px auto;
    @media (max-width: 800px) {
      width: 100%;
    }
`;

const StyledContent = Styled(Content)`
    padding-top: 130px;
`;
const energy = keyframes`
  5% {
    transform: scale(1.2, 0.9);
  }
  15% {
    transform: scale(0.9, 1.2) translate(0, -4px);
  }
  25% {
    transform: scale(1);
  }
`;

const PersonGroup = Styled.a`
  padding: 0 1.5rem;
  text-align: left;
  &:hover {
    color: #000;
  }  
`;

const StyledAvatar = Styled(Avatar)`
    &:hover {
      animation: ${energy} 1.5s infinite;
    }
`;

const PersonTitle = Styled.p`
    position: relative;
    text-align: center;
    white-space: pre-wrap;
    word-break: break-all;
    font-weight: bold;
    margin: 20px auto 0px auto;
    font-size: 16px;

`;

const PersonDescription = Styled.p`
  position: relative;
  text-align: center;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.69;
  letter-spacing: 0.2px;
`;

const StyledIconArrow = Styled.div`
      font-size: 16px;
    .arrow-left {
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 99999;
    }
    .arrow-right {
      right: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 99999;
    }
`;

var NEWSettings = {
  dots: true,
  speed: 500,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 10000,
      settings: { slidesToShow: 1 }
    }
  ]
};

var AboutUSSettings = {
  dots: true,
  speed: 500,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 10000,
      settings: { slidesToShow: 4 }
    }
  ]
};

const Arrow = props => (
  <StyledIconArrow>
    <Icon type={props.type} className={props.Name} onClick={props.onClick} />
  </StyledIconArrow>
);

const ResponsiveCarousel = ({ titleImg, settings, content }) => {
  return (
    <>
      <StyledAboutUs>
        <img src={titleImg} style={{ width: "100%" }} />
      </StyledAboutUs>

      {content ? (
        <StyledNewsImage>
          <Carousel
            {...NEWSettings}
            arrows
            dots={false}
            prevArrow={<Arrow Name="arrow-left" type="left" />}
            nextArrow={<Arrow Name="arrow-right" type="right" />}
          >
            <PersonGroup
              href="https://www.bnext.com.tw/article/55360/apple-mobile-app-innovation-contest-developer-taiwan-no-1?fbclid=IwAR3nsqPmtddEpubN2a1gpIGEvX4SnVM0d6Vpy_7iaeZJbtsj67mM-a8Y6go"
              target="_blank"
            >
              <StyledNewsImg style={{ textAlign: "center" }}>
                <img src={NewsImgOne} style={{ width: "100%" }} />
              </StyledNewsImg>
              <PersonTitle>
                打敗千組團隊、奪蘋果APP大賽一等獎！北教大超冷門「玩具設計系」4碩士生的開發心路
              </PersonTitle>
            </PersonGroup>

            <PersonGroup
              href="https://tech.sina.cn/mobile/xp/2019-10-28/detail-iicezuev5336751.d.html?from=wap&wm=3049_0015&fbclid=IwAR2IdX9PfWzul0eKitTdoMs5GV0Gy_uWM62Pn0D4sxM-cNEpJjEb0KOUJlQ"
              target="_blank"
            >
              <StyledNewsImg style={{ textAlign: "center" }}>
                <img src={NewsImgTwo} style={{ width: "100%" }} />
              </StyledNewsImg>
              <PersonTitle>
                “人人能编程” 苹果2019年移动应用创新赛圆满落幕
              </PersonTitle>
            </PersonGroup>

            <PersonGroup
              href="https://www.ettoday.net/news/20191028/1566796.htm"
              target="_blank"
            >
              <StyledNewsImg style={{ textAlign: "center" }}>
                <img src={NewsImgThree} style={{ width: "100%" }} />
              </StyledNewsImg>
              <PersonTitle>
                Apple移動應用創新賽落幕　北教大團隊獲一等獎
              </PersonTitle>
            </PersonGroup>
          </Carousel>
        </StyledNewsImage>
      ) : (
        <StyledContent>
          <Carousel
            {...AboutUSSettings}
            arrows
            dots={false}
            prevArrow={<Arrow Name="arrow-left" type="left" />}
            nextArrow={<Arrow Name="arrow-right" type="right" />}
          >
            <PersonGroup
              href="https://www.facebook.com/1804968215"
              target="_blank"
            >
              <p style={{ textAlign: "center", paddingTop: 20 }}>
                <StyledAvatar alt="student" size={100} src={Nancy} />
              </p>
              <PersonTitle>Nancy Huang</PersonTitle>
              <PersonDescription>Design / UIUX</PersonDescription>
            </PersonGroup>
            <PersonGroup href="https://www.facebook.com/mosown" target="_blank">
              <p style={{ textAlign: "center", paddingTop: 20 }}>
                <StyledAvatar alt="student" size={100} src={Vicky} />
              </p>
              <PersonTitle>Vicky Huang</PersonTitle>
              <PersonDescription>Project Ｍanager</PersonDescription>
            </PersonGroup>
            <PersonGroup
              href="https://github.com/SamanthaChenyu"
              target="_blank"
            >
              <p style={{ textAlign: "center", paddingTop: 20 }}>
                <StyledAvatar alt="student" size={100} src={Samantha} />
              </p>
              <PersonTitle>Samantha Chen</PersonTitle>
              <PersonDescription>Software developer</PersonDescription>
            </PersonGroup>
            <PersonGroup href="https://github.com/JasonXDDD" target="_blank">
              <p style={{ textAlign: "center", paddingTop: 20 }}>
                <StyledAvatar alt="student" size={100} src={Jason} />
              </p>
              <PersonTitle>JasonXDDD Liu</PersonTitle>
              <PersonDescription>Software developer</PersonDescription>
            </PersonGroup>
          </Carousel>
        </StyledContent>
      )}
    </>
  );
};

export default ResponsiveCarousel;
