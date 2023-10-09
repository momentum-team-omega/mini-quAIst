import React, { useState } from 'react';
import Nav from 'components/Nav';
import Ability_Check from 'components/Ability_Check';

const TempCheck = () => {
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  return (
    <>
      <Nav />
      <div className="content">
        <div
          className="game-container"
          style={{
            height: gameWindow.height,
            width: gameWindow.width,
          }}
        >
          <Ability_Check />
        </div>
      </div>
    </>
  );
};
export default TempCheck;
