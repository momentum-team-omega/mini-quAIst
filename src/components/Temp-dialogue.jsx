import React, { useState } from 'react';
import Nav from 'components/Nav';
import Dialogue from 'components/Dialogue';

const TempDialogue = () => {
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  return (
    <>
      <Nav />
      <div className='content'>
        <div
          className='game-container'
          style={{
            height: gameWindow.height,
            width: gameWindow.width,
          }}
        >
          <Dialogue />
        </div>
      </div>
    </>
  );
};
export default TempDialogue;
