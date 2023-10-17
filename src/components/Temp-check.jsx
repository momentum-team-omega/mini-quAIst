import React, { useState } from 'react';
import Nav from 'components/Nav';
import TwentySidedDie from './TwentySidedDie';

const TempCheck = () => {
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

const difficultyScore = 11

const typeOfCheck = 'wis'

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
          <TwentySidedDie difficultyScore={difficultyScore} typeOfCheck={typeOfCheck}/>
        </div>
      </div>
    </>
  );
};
export default TempCheck;
