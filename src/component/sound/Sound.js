import React, { useState } from "react";
import Styled from "styled-components";
import { Icon } from "antd";
import Audio from "./Audio.mp3";

const StyledFixedSoundIcon = Styled.div`
    position: fixed;
    width: 50px;
    height: 50px;
    right: 25px;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 2px 2px 2px 0px #adadad;
    cursor: pointer;
    z-index: 1;
`;
const StyledSoundClose = Styled.div`
  position: relative;
  &::before {
    content: ' ';
    position: absolute;
    width: 23px;
    height: 2px;
    transform: translateY(9px) rotate(45deg);
    background-color: #000;
  }
`;
const Sound = () => {
  const [Sound, setSound] = useState(true);
  function toggleSound() {
    Sound ? setSound(false) : setSound(true);
  }
  return (
    <>
      <audio src={Audio} autoPlay />
      <StyledFixedSoundIcon onClick={toggleSound}>
        {Sound ? (
          <Icon
            type="sound"
            style={{
              fontSize: 25,
              color: "#000"
            }}
          />
        ) : (
          <StyledSoundClose>
            <Icon
              type="sound"
              style={{
                fontSize: 25,
                color: "#000"
              }}
            />
          </StyledSoundClose>
        )}
      </StyledFixedSoundIcon>
    </>
  );
};

export default Sound;
