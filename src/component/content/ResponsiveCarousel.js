import React from "react";
import { Avatar, Carousel, Icon } from "antd";
import Styled from "styled-components";
import MediaQuery from "react-responsive";
import img from "./../../images/one.png";
import Content from "./../layout/StyledContent";
import Nancy from "./../../images/Nancy.jpg";
import Vicky from "./../../images/Vicky.jpg";
import Samantha from "./../../images/Samantha.jpg";
import Jason from "./../../images/Jason.jpg";

const StyledContent = Styled(Content)`
    padding-top: 130px;
`;

const PersonGroup = Styled.a`
  padding: 0 1.5rem;
  text-align: left;
  &:hover {
    color: #ff8a73;
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
    }
    .arrow-right {
      right: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
`;

var settings = {
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

const ResponsiveCarousel = () => {
  return (
    <>
      <StyledContent>
        <Carousel
          {...settings}
          autoplay
          arrows
          dots={false}
          prevArrow={<Arrow Name="arrow-left" type="left" />}
          nextArrow={<Arrow Name="arrow-right" type="right" />}
        >
          <PersonGroup
            href="https://www.facebook.com/1804968215"
            target="_blank"
          >
            <p style={{ textAlign: "center" }}>
              <Avatar alt="student" size={100} src={Nancy} />
            </p>
            <PersonTitle>Nancy Huang</PersonTitle>
            <PersonDescription>Design / UIUX</PersonDescription>
          </PersonGroup>
          <PersonGroup href="https://www.facebook.com/mosown" target="_blank">
            <p style={{ textAlign: "center" }}>
              <Avatar alt="student" size={100} src={Vicky} />
            </p>
            <PersonTitle>Vicky Huang</PersonTitle>
            <PersonDescription>Project Ｍanager</PersonDescription>
          </PersonGroup>
          <PersonGroup href="https://github.com/SamanthaChenyu" target="_blank">
            <p style={{ textAlign: "center" }}>
              <Avatar alt="student" size={100} src={Samantha} />
            </p>
            <PersonTitle>Samantha Chen</PersonTitle>
            <PersonDescription>Software developer</PersonDescription>
          </PersonGroup>
          <PersonGroup href="https://github.com/JasonXDDD" target="_blank">
            <p style={{ textAlign: "center" }}>
              <Avatar alt="student" size={100} src={Jason} />
            </p>
            <PersonTitle>JasonXDDD Liu</PersonTitle>
            <PersonDescription>Software developer</PersonDescription>
          </PersonGroup>
        </Carousel>
      </StyledContent>
    </>
  );
};

export default ResponsiveCarousel;
