import React, { useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Styled from "styled-components";
import Logo from "../images/logo.png";
import { Anchor, Icon } from "antd";
import useHover from "@react-hook/hover";

const { Link } = Anchor;
const StyledLogo = Styled.div`
    width: 100px;
    padding: 10px 0px;
`;
const StyledLink = Styled.div`
    font-weight: bold;
    display: flex;
    font-size: 18px;
    .ant-anchor-link {
        padding: 9px 0 7px 30px;
    }
    a.ant-anchor-link-title {
        color: #3e2600;
        &:hover {
            color: #964e02;
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
`;
const StyledIconLink = Styled.a`
    padding-right: 25px;
`;

const Header = () => {
  const [hoverRef, isHovering] = useHover(100, 100);
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
                <StyledIconLink ref={hoverRef} href="#">
                  {isHovering ? (
                    <Icon
                      type="apple"
                      style={{
                        fontSize: 30,
                        paddingLeft: 30,
                        color: "#3e2600"
                      }}
                    />
                  ) : (
                    <Icon
                      type="apple"
                      theme="filled"
                      style={{
                        fontSize: 30,
                        paddingLeft: 30,
                        color: "#964e02"
                      }}
                    />
                  )}
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
