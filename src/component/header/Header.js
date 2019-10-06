import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Sound from "./../sound/Sound";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

const StyledLinkBox = Styled.div`
    height: 50px;
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const StyledLink = Styled.div`
    font-size: 18px;
    font-weight: 700;
    padding-left: 30px;
    a {
      color: #353535;
      font-weight: bold;
      text-decoration: none;
      display: block;
      transition: all 1s;
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

const Header = () => {
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
      <StyledLinkBox>
        <StyledLink>
          <Link
            activeClass="active"
            to="Information"
            spy={true}
            smooth={true}
            duration={500}
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
            duration={500}
          >
            團隊介紹
          </Link>
        </StyledLink>
      </StyledLinkBox>
    </>
  );
};

export default Header;
