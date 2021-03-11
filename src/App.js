import './App.css';
import React, {useState} from 'react';
import styled from 'styled-components';
import {useInterval} from "react-use";

function ShitRain() {
  const [emojisToRender, setEmojisToRender] = useState([{offset: 0, key: 0, emoji: ''}]);

  useInterval(() => {
    if (emojisToRender.length > 20) {
      emojisToRender.shift();
    }

    const offset = Math.floor(Math.random() * 1000);
    const key = offset + Math.random() * 1000000;
    const emoji = '💩';

    emojisToRender.push({offset, key, emoji});

    setEmojisToRender([...emojisToRender]);
  }, 100);

  return (
    <SuperContainer>
      {emojisToRender.map(({key, emoji, offset}) => {
        return (
          <EmojiContainer key={key} offset={offset}>
            {emoji}
          </EmojiContainer>
        );
      })}
    </SuperContainer>
  );
}

function App() {
  return (
    <>
      <ShitRain/>
    </>
  );
}

export default App;

const SuperContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const EmojiContainer = styled.div`
  @keyframes falldown {
    0% { margin-top: 0; }
    100% { margin-top: 600px; }
  }
  
  position: absolute;
  top: 80px;
  left: ${props => props.offset}px;
  
  font-size: 48px;
  animation-name: falldown;
  animation-duration: 4s;
`;
