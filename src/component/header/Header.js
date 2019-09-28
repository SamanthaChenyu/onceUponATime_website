import React, { useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Logo from "./../../images/logo.png";
import { Anchor } from "antd";

const { Link } = Anchor;
const StyledLogo = Styled.div`
    width: 70px;
    padding: 10px 0px;
    margin-left: 30px;
`;
const StyledLink = Styled.div`
    display: flex;
    font-size: 18px;
    .ant-anchor-link {
        padding: 9px 5px 7px 30px;
    }
    a.ant-anchor-link-title {
      color: #000;
      font-weight: bold;
      text-decoration: none;
      display: block;
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
    }
`;
const StyledLinkBox = Styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    &:hover {
      color: red;
    }
    .ant-anchor-ink {
        height: 0;
    }
    .ant-anchor-wrapper {
      background-color: transparent;
      margin-right: 30px;
    }
`;

const Header = () => {
  return (
    <>
      <Row type="flex">
        <Col md={16} xs={24}>
          <StyledLogo>
            <img src={Logo} alt="logo" style={{ width: "100%" }} />
          </StyledLogo>
        </Col>
        <Col md={8} xs={24}>
          <StyledLinkBox>
            <Anchor affix={false}>
              <StyledLink>
                <Link href="#Information" title="功能特色" />
                <Link href="#About" title="團隊理念" />
              </StyledLink>
            </Anchor>
          </StyledLinkBox>
        </Col>
      </Row>
    </>
  );
};

export default Header;
