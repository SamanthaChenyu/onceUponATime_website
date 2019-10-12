import React from "react";
import Styled from "styled-components";
import MediaQuery from "react-responsive";
import Content from "./../layout/StyledContent";

const StyledBottom = Styled.div`
    margin-top: 100px;
    width: 100%;
    height: 150px;
    background-color: #9fd1ee;
    background: linear-gradient(#ffffff,#9fd1ee,#8f72ff);
`;

const StyledContent = Styled(Content)`
    height: 150px;
`;

const StyledCopyright = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 15px;
    width: 100%;
    p {
        color: #fff;
        font-size: 13px;
        margin-bottom: 0px;
    }
    @media (max-width: 1279px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
`;
const StyledDownload = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
    height: 40px;
    svg {
        width: 120px;
    }
`;

const Contact = () => {
  return (
    <>
      <StyledBottom>
        <StyledContent>
          <StyledCopyright>
            <p>
              <span>國立臺北教育大學</span>　<span>數位科技學系</span>　
              <span>玩具與遊戲設計碩士班</span>
            </p>
            <p>Copyright © 2019 OnceUponATime</p>
            <StyledDownload>
              <a href="#">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="44.2 19 128 40"
                  viewBox="44.2 19 128 40"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="tint"
                  role="img"
                >
                  <g>
                    <path d="M168.2 59h-120c-2.2 0-4-1.8-4-4V23c0-2.2 1.8-4 4-4h120c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4z"></path>
                    <path
                      d="M71.2 38.8c0-3.1 2.6-4.6 2.7-4.7-1.5-2.1-3.7-2.4-4.5-2.5-1.9-.2-3.8 1.1-4.7 1.1-1 0-2.5-1.1-4.1-1.1-2.1 0-4 1.2-5.1 3.1-2.2 3.8-.6 9.4 1.5 12.5 1.1 1.5 2.3 3.2 3.9 3.1 1.6-.1 2.2-1 4.1-1 1.9 0 2.4 1 4.1 1 1.7 0 2.8-1.5 3.8-3 1.2-1.7 1.7-3.4 1.7-3.5-.1-.1-3.4-1.3-3.4-5z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M68.1 29.6c.8-1.1 1.4-2.5 1.3-4-1.2.1-2.8.8-3.6 1.9-.8.9-1.5 2.4-1.3 3.8 1.3.1 2.7-.7 3.6-1.7z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M94 50.1h-2.2l-1.2-3.8h-4.2l-1.1 3.8h-2.1l4.2-12.9H90l4 12.9zm-3.8-5.4l-1.1-3.4c-.1-.3-.3-1.2-.7-2.4-.1.5-.3 1.4-.6 2.4l-1.1 3.4h3.5z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M104.7 45.4c0 1.6-.4 2.8-1.3 3.8-.8.8-1.7 1.2-2.9 1.2s-2.1-.4-2.6-1.3V54h-2.1V44c0-1 0-2-.1-3.1h1.8l.1 1.5c.7-1.1 1.7-1.7 3.1-1.7 1.1 0 2 .4 2.7 1.3.9.8 1.3 1.9 1.3 3.4zm-2.1 0c0-.9-.2-1.7-.6-2.2-.4-.6-1-.9-1.8-.9-.5 0-1 .2-1.4.5-.4.3-.7.8-.8 1.3-.1.3-.1.5-.1.6v1.6c0 .7.2 1.2.6 1.7.4.5 1 .7 1.6.7.8 0 1.4-.3 1.8-.9.5-.6.7-1.4.7-2.4z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M115.4 45.4c0 1.6-.4 2.8-1.3 3.8-.8.8-1.7 1.2-2.9 1.2s-2.1-.4-2.6-1.3V54h-2.1V44c0-1 0-2-.1-3.1h1.8l.1 1.5c.7-1.1 1.7-1.7 3.1-1.7 1.1 0 2 .4 2.7 1.3.9.8 1.3 1.9 1.3 3.4zm-2.1 0c0-.9-.2-1.7-.6-2.2-.4-.6-1-.9-1.8-.9-.5 0-1 .2-1.4.5-.4.3-.7.8-.8 1.3-.1.3-.1.5-.1.6v1.6c0 .7.2 1.2.6 1.7.4.5 1 .7 1.6.7.8 0 1.4-.3 1.8-.9.5-.6.7-1.4.7-2.4z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M127.4 46.5c0 1.1-.4 2-1.1 2.7-.8.8-2 1.1-3.5 1.1-1.4 0-2.5-.3-3.3-.8l.5-1.7c.9.5 1.9.8 3 .8.8 0 1.4-.2 1.8-.5.4-.4.6-.8.6-1.4 0-.5-.2-1-.5-1.3-.4-.4-1-.7-1.8-1-2.3-.8-3.4-2.1-3.4-3.7 0-1.1.4-1.9 1.2-2.6.8-.7 1.8-1 3.2-1 1.2 0 2.1.2 2.9.6l-.5 1.7c-.7-.4-1.5-.6-2.5-.6-.7 0-1.3.2-1.7.5-.3.3-.5.7-.5 1.2s.2.9.6 1.3c.3.3 1 .6 1.9 1 1.1.4 1.9 1 2.5 1.6.3.5.6 1.2.6 2.1z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M134.2 42.4h-2.3v4.5c0 1.1.4 1.7 1.2 1.7.4 0 .7 0 .9-.1l.1 1.6c-.4.2-.9.2-1.6.2-.8 0-1.5-.2-1.9-.7-.5-.5-.7-1.3-.7-2.5v-4.7h-1.4v-1.6h1.4v-1.7l2-.6v2.3h2.3v1.6z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M144.5 45.4c0 1.4-.4 2.6-1.2 3.5-.9.9-2 1.4-3.4 1.4s-2.5-.5-3.3-1.4c-.8-.9-1.2-2-1.2-3.4s.4-2.6 1.3-3.5c.8-.9 2-1.4 3.4-1.4s2.5.5 3.3 1.4c.7.9 1.1 2 1.1 3.4zm-2.2.1c0-.9-.2-1.6-.6-2.2-.4-.7-1.1-1.1-1.9-1.1-.8 0-1.5.4-1.9 1.1-.4.6-.6 1.4-.6 2.2 0 .9.2 1.6.6 2.2.4.7 1.1 1.1 1.9 1.1.8 0 1.4-.4 1.9-1.1.4-.6.6-1.4.6-2.2z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M151.2 42.6c-.2 0-.4-.1-.7-.1-.7 0-1.3.3-1.7.8-.3.5-.5 1.1-.5 1.8V50h-2.1v-6.4c0-1.1 0-2-.1-2.9h1.8l.1 1.8h.1c.2-.6.6-1.1 1-1.5.5-.3 1-.5 1.5-.5h.5v2.1z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M160.4 45c0 .4 0 .7-.1.9h-6.2c0 .9.3 1.6.9 2.1.5.4 1.2.7 2 .7.9 0 1.8-.1 2.5-.4l.3 1.4c-.9.4-1.9.6-3.1.6-1.4 0-2.6-.4-3.4-1.3-.8-.8-1.2-2-1.2-3.4s.4-2.6 1.1-3.5c.8-1 1.9-1.5 3.3-1.5 1.3 0 2.4.5 3 1.5.7.8.9 1.8.9 2.9zm-1.9-.5c0-.6-.1-1.1-.4-1.6-.4-.6-.9-.9-1.6-.9-.7 0-1.2.3-1.6.8-.3.4-.5 1-.6 1.6h4.2z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M89.6 29.3c0 1.1-.3 2-1 2.6-.6.5-1.5.8-2.7.8-.6 0-1.1 0-1.5-.1v-6.2c.5-.1 1.1-.1 1.8-.1 1.1 0 1.9.2 2.5.7.5.5.9 1.3.9 2.3zm-1.1 0c0-.7-.2-1.3-.6-1.7-.4-.4-1-.6-1.7-.6-.3 0-.6 0-.8.1v4.7h.7c.8 0 1.4-.2 1.8-.6.4-.4.6-1.1.6-1.9z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M95.2 30.3c0 .7-.2 1.3-.6 1.7-.4.5-1 .7-1.7.7s-1.2-.2-1.6-.7c-.4-.4-.6-1-.6-1.7s.2-1.3.6-1.7c.4-.5 1-.7 1.7-.7s1.2.2 1.6.7c.4.4.6 1 .6 1.7zm-1 0c0-.4-.1-.8-.3-1.1-.2-.4-.5-.5-.9-.5s-.7.2-.9.5c-.2.3-.3.7-.3 1.1 0 .4.1.8.3 1.1.2.4.5.5.9.5s.7-.2.9-.6c.2-.2.3-.6.3-1z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M102.9 28l-1.4 4.6h-.9l-.6-2c-.2-.5-.3-1-.4-1.5-.1.5-.2 1-.4 1.5l-.6 2h-.9L96.2 28h1l.5 2.2.3 1.5c.1-.4.2-.9.4-1.5L99 28h.8l.6 2.1c.2.5.3 1 .4 1.5l.3-1.5.6-2.1h1.2z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M108.1 32.6h-1V30c0-.8-.3-1.2-.9-1.2-.3 0-.5.1-.7.3-.2.2-.3.5-.3.8v2.7h-1V28h.9v.7c.1-.2.3-.4.5-.6.3-.2.6-.3.9-.3.4 0 .8.1 1.1.4.4.3.5.8.5 1.5v2.9z"
                      fill="#FFFFFF"
                    ></path>
                    <path d="M110.9 32.6h-1v-6.7h1v6.7z" fill="#FFFFFF"></path>
                    <path
                      d="M116.9 30.3c0 .7-.2 1.3-.6 1.7-.4.5-1 .7-1.7.7s-1.2-.2-1.6-.7c-.4-.4-.6-1-.6-1.7s.2-1.3.6-1.7 1-.7 1.7-.7 1.2.2 1.6.7c.4.4.6 1 .6 1.7zm-1 0c0-.4-.1-.8-.3-1.1-.2-.4-.5-.5-.9-.5s-.7.2-.9.5c-.2.3-.3.7-.3 1.1 0 .4.1.8.3 1.1.2.4.5.5.9.5s.7-.2.9-.6c.2-.2.3-.6.3-1z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M121.8 32.6h-.9l-.1-.5c-.3.4-.8.6-1.3.6-.4 0-.8-.1-1-.4-.2-.3-.4-.6-.4-.9 0-.6.2-1 .7-1.3.5-.3 1.1-.4 2-.4v-.1c0-.6-.3-.9-.9-.9-.5 0-.8.1-1.2.3l-.2-.7c.4-.3.9-.4 1.6-.4 1.2 0 1.8.6 1.8 1.9v1.7c-.1.5-.1.8-.1 1.1zm-1-1.6v-.7c-1.1 0-1.7.3-1.7.9 0 .2.1.4.2.5.1.1.3.2.5.2s.4-.1.6-.2c.2-.1.3-.3.4-.5V31z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M127.6 32.6h-.9v-.7c-.3.6-.8.8-1.5.8-.6 0-1-.2-1.4-.6-.4-.4-.5-1-.5-1.7s.2-1.3.6-1.8c.4-.4.9-.6 1.4-.6.6 0 1 .2 1.3.6V26h1v6.6zm-1-1.9v-1.1c-.1-.2-.2-.4-.4-.6-.2-.2-.4-.2-.7-.2-.4 0-.7.2-.9.5-.2.3-.3.7-.3 1.2s.1.8.3 1.1c.2.3.5.5.9.5.3 0 .6-.1.8-.4.2-.4.3-.7.3-1z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M136.3 30.3c0 .7-.2 1.3-.6 1.7-.4.5-1 .7-1.7.7s-1.2-.2-1.6-.7c-.4-.4-.6-1-.6-1.7s.2-1.3.6-1.7c.4-.5 1-.7 1.7-.7s1.2.2 1.6.7c.4.4.6 1 .6 1.7zm-1.1 0c0-.4-.1-.8-.3-1.1-.2-.4-.5-.5-.9-.5s-.7.2-.9.5c-.2.3-.3.7-.3 1.1 0 .4.1.8.3 1.1.2.4.5.5.9.5s.7-.2.9-.6c.2-.2.3-.6.3-1z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M141.8 32.6h-1V30c0-.8-.3-1.2-.9-1.2-.3 0-.5.1-.7.3-.2.2-.3.5-.3.8v2.7h-1V28h.9v.7c.1-.2.3-.4.5-.6.3-.2.6-.3.9-.3.4 0 .8.1 1.1.4.4.3.5.8.5 1.5v2.9z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M148.6 28.8h-1.1V31c0 .6.2.8.6.8h.5v.8c-.2.1-.5.1-.8.1-.4 0-.7-.1-.9-.4-.2-.2-.3-.7-.3-1.2v-2.3h-.7V28h.7v-.8l1-.3V28h1.1v.8z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M154 32.6h-1V30c0-.8-.3-1.2-.9-1.2-.5 0-.8.2-1 .7v3.1h-1v-6.7h1v2.8c.3-.5.8-.8 1.4-.8.4 0 .8.1 1 .4.3.3.5.9.5 1.5v2.8z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M159.5 30.1v.5h-3c0 .5.2.8.4 1 .3.2.6.3 1 .3.5 0 .9-.1 1.2-.2l.2.7c-.4.2-.9.3-1.5.3-.7 0-1.3-.2-1.7-.6-.4-.4-.6-1-.6-1.7s.2-1.3.6-1.7c.4-.5.9-.7 1.6-.7.7 0 1.2.2 1.5.7.2.3.3.8.3 1.4zm-.9-.3c0-.3-.1-.6-.2-.8-.2-.3-.4-.4-.8-.4-.3 0-.6.1-.8.4-.2.2-.3.5-.3.8h2.1z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </a>
            </StyledDownload>
          </StyledCopyright>
        </StyledContent>
      </StyledBottom>
    </>
  );
};

export default Contact;
