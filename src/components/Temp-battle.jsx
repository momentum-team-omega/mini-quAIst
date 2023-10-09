import React, { useState } from 'react';
import Nav from 'components/Nav';
import Battle from 'components/Battle';

const TempBattle = () => {
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
          <Battle />
        </div>
      </div>
    </>
  );
};
export default TempBattle;
