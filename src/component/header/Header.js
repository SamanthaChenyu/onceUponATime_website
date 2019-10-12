import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Sound from "./../sound/Sound";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import AudioMusic from "./../sound/bloop-noise.wav";
import { useMediaQuery } from "react-responsive";

const StyledFixed = Styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.8);
`;

const StyledLink = Styled.div`
    font-size: 18px;
    font-weight: 700;
    padding-left: 30px;
    @media (max-width: 1279px) {
      padding-left: 0px;
      padding-bottom: 30px;
      font-size: 1.5rem;
    }
    a {
      color: #353535;
      font-weight: bold;
      text-decoration: none;
      display: block;
      transition: all 1s;
      @media (max-width: 1279px) {
        color: #fff;
        letter-spacing: 10px;
      }
        &:hover {
          font-weight: 700;
          background: linear-gradient(90deg,#ff3e8e 5%,#ffa500 50%,#3fbcf6 95%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;          
        }
        &::before {
          content: "";
          width: 0;
          height: 100%;
          display: inline-block;
          vertical-align: middle;
        }
        &.active{
          transition: all 1s;
          font-weight: 700;
          background: linear-gradient(90deg,#ff3e8e 5%,#ffa500 50%,#3fbcf6 95%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent; 
          text-decoration: none;
          display: block;
          &::before {
            content: "";
            width: 0;
            height: 100%;
            display: inline-block;
            vertical-align: middle;
          }
        }
    }
`;

const audio = new Audio(AudioMusic);

const Header = () => {
  const [MenuShow, isMenuShow] = useState(false);
  const [y, setY] = useState("translateY(-100%)");
  const [IconWidth, isIconWidth] = useState("15px");
  const [IconTop, isIconTop] = useState("20px");
  const [IconRotateX, isIconRotateX] = useState("rotate(0deg)");
  const [IconRotateY, isIconRotateY] = useState("rotate(0deg)");
  function toggle() {
    MenuShow ? isMenuShow(false) : isMenuShow(true);
    MenuShow ? setY("translateY(-100%)") : setY("translateY(0%)");
    MenuShow ? isIconWidth("15px") : isIconWidth("30px");
    MenuShow ? isIconTop("20px") : isIconTop("10px");
    MenuShow ? isIconRotateX("rotate(0deg)") : isIconRotateX("rotate(45deg)");
    MenuShow ? isIconRotateY("rotate(0deg)") : isIconRotateY("rotate(-45deg)");
  }
  const StyledLinkBox = Styled.div`
    height: 50px;
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 1s all;
    @media (max-width: 1279px) {
      width: 100%;
      height: 100vh;
      position: fixed;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(27, 234, 255, 0.5);
      transform: ${y};
    }
  `;
  const StyledToggle = Styled.div`
    @media(max-width: 1279px) {
      width: 30px;
      height: 30px;
      position: fixed;
      right: 20px;
      top: 10px;
      z-index: 99999;
      transition: all 1s;
      cursor: pointer;
        &::before {
          content: "";
          transition: all 1s;
          position: absolute;
          background-color: #000;
          width: 30px;
          height: 3px;
          left: 0;
          top: 10px;
          transform: ${IconRotateX};
        }
        &::after {
          content: "";
          transition: all 1s;
          position: absolute;
          background-color: #000;
          width: ${IconWidth};
          height: 3px;
          right: 0;
          top: ${IconTop};
          transform: ${IconRotateY};
        }
    }
  `;

  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  });
  return (
    <>
      <Sound />
      <StyledToggle onClick={toggle} />
      <StyledFixed>
        <StyledLinkBox>
          <StyledLink>
            <Link
              activeClass="active"
              to="Information"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={toggle}
            >
              功能特色
            </Link>
          </StyledLink>
          <StyledLink>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={toggle}
            >
              團隊介紹
            </Link>
          </StyledLink>
        </StyledLinkBox>
      </StyledFixed>
    </>
  );
};

export default Header;
