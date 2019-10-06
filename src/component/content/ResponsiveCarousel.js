import React from "react";
import { Avatar, Carousel, Col, Icon, Row, Typography } from "antd";
import Styled from "styled-components";
import MediaQuery from "react-responsive";
import img from "./../../images/one.png";
import Content from "./../layout/StyledContent";

const { Title, Text } = Typography;

const StyledContent = Styled(Content)`
    padding-top: 130px;
`;

const PersonGroup = Styled.div`
  padding: 0 1.5rem;
  text-align: left;
`;

const PersonTitle = Styled.p`
  padding-left: 10px;
  position: relative;
  text-align: justify;
  white-space: pre-wrap;
  word-break: break-all;
  font-weight: bold;
  margin: 20px 0px;
  &:before {
    content: "";
    display: block;
    background: #7c46d3;
    width: 0.16rem;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const PersonDescription = Styled.p`
  position: relative;
  text-align: justify;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.69;
  letter-spacing: 0.2px;
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
  <Icon type={props.type} className={props.Name} onClick={props.onClick} />
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
          <PersonGroup>
            <p>
              <Avatar alt="student" size={40} src={img} />
            </p>
            <Text>Sen</Text>
            <PersonTitle>真正的體會到學習紫微！</PersonTitle>
            <PersonDescription>
              老師講解得實在好，原來化忌的令一種解釋竟然是~空缺
              ，現在才真正的體會到學習紫微
              ，有無窮之樂趣及智慧的提升，慶幸沒有錯過這一集 ，寶典中的精髓
              ，神話裏的實力 ，感恩老師無私且真心的傳授 ，謝謝 ~ 我十分珍惜 。
            </PersonDescription>
          </PersonGroup>
          <PersonGroup>
            <p>
              <Avatar alt="student" size={40} src={img} />
            </p>
            <Text>Ellie</Text>
            <PersonTitle>講的很好！學到了很多關於命理的知識！</PersonTitle>
            <PersonDescription>
              講得很好, 吉無純吉,凶無極凶。善用星曜特性, 才是有建設性的。
            </PersonDescription>
          </PersonGroup>
          <PersonGroup>
            <p>
              <Avatar alt="student" size={40} src={img} />
            </p>
            <Text>letitia</Text>
            <PersonTitle>物超所值學到了很多關於命理的知識！</PersonTitle>
            <PersonDescription>
              買了四本老師的書（含講義與牌卡），受益匪淺，拿來印證家人們的命盤，終於恍然大悟：「原來如此」，因為照以前的認知與資訊，有些解釋還是會卡卡的。
            </PersonDescription>
          </PersonGroup>
          <PersonGroup>
            <p>
              <Avatar alt="student" size={40} src={img} />
            </p>
            <Text>Louis</Text>
            <PersonTitle>真的感受到用心，同時也獲益良多</PersonTitle>
            <PersonDescription>
              相信老師平常一定很忙碌，可是看老師還總是很用心又認真的回覆每個留言，真的辛苦了！
            </PersonDescription>
          </PersonGroup>
          <PersonGroup>
            <p>
              <Avatar alt="student" size={40} src={img} />
            </p>
            <Text>Louis</Text>
            <PersonTitle>真的感受到用心，同時也獲益良多</PersonTitle>
            <PersonDescription>
              相信老師平常一定很忙碌，可是看老師還總是很用心又認真的回覆每個留言，真的辛苦了！
            </PersonDescription>
          </PersonGroup>
        </Carousel>
      </StyledContent>
    </>
  );
};

export default ResponsiveCarousel;
