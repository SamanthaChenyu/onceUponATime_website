import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Logo from "../images/logo.png";
import { Anchor, Typography, Icon } from "antd";

const { Link } = Anchor;
const StyledLogo = Styled.div`
    width: 80px;
    padding: 10px 0px;
`;
const StyledLink = Styled.div`
    font-weight: bold;
    display: flex;
    font-size: 14px;
    .ant-anchor-link {
        padding: 7px 0 7px 30px;
    }
    a.ant-anchor-link-title {
        color: #ff7974;
        &:hover {
            color: #ff9c98;
        }
    }
`;
const StyledLinkBox = Styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    .ant-anchor-ink {
        height: 0;
    }
`;
const StyledIconLink = Styled.a`
    padding-right: 25px;
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
                <Link href="#Intro" title="功能特色" />
                <Link href="#About" title="團隊理念" />
                <StyledIconLink href="www.google.com">
                  <Icon
                    type="apple"
                    theme="filled"
                    style={{ fontSize: 24, paddingLeft: 30, color: "#ff7974" }}
                  />
                </StyledIconLink>
              </StyledLink>
            </Anchor>
          </StyledLinkBox>
        </Col>
      </Row>
    </>
  );
};

export default Header;
