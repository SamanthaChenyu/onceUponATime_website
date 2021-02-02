import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Icon } from "antd";
import AudioBGM from "./Audio.mp3";

const StyledFixedSoundIcon = Styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 99999;
    &::before {
      content: ' ';
      position: absolute;
      width: 180px;
      height: 180px;
      left: -105px;
      top: -105px;
      background-color: #9fd1ee;
      background: linear-gradient(90deg,#8f72ff,#9fd1ee);
      z-index: -1;
      border-radius: 50%;
  }
`;
const StyledSoundClose = Styled.div`
  position: relative;
  &::before {
    content: ' ';
    position: absolute;
    width: 40px;
    height: 3px;
    transform: translateY(15px) rotate(45deg);
    background-color: #fff;
  }
`;

const audio = new Audio(AudioBGM);
audio.load();
let playPromise = audio.play();
if (playPromise !== undefined) {
  playPromise
    .then(() => {
      audio.play();
    })
    .catch(error => {
      console.log(error);
      audio.pause();
    });
}

const Sound = () => {
  const [Sound, setSound] = useState(false);
  function toggleSound() {
    Sound ? setSound(false) : setSound(true);
  }
  function togglePlayIng() {
    Sound ? audio.play() : audio.pause();
    audio.addEventListener("ended", function() {
      audio.currentTime = 0;
      audio.play();
    });
  }

  useEffect(() => {
    togglePlayIng();
  }, [Sound]);
  return (
    <>
      <StyledFixedSoundIcon onClick={toggleSound}>
        {Sound ? (
          <Icon
            type="sound"
            theme="filled"
            style={{
              fontSize: 35,
              color: "#fff"
            }}
          />
        ) : (
          <StyledSoundClose>
            <Icon
              type="sound"
              theme="filled"
              style={{
                fontSize: 35,
                color: "#fff"
              }}
            />
          </StyledSoundClose>
        )}
      </StyledFixedSoundIcon>
    </>
  );
};

export default Sound;
