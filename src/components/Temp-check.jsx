import React, { useState } from 'react';
import Nav from 'components/Nav';
import TwentySidedDie from './TwentySidedDie';

const TempCheck = () => {
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const modifiers = 
{
  "dexterity": 2,
  "strength": 1,
  "intelligence": 4,
  "constitution": -2,
  "wisdom": -1,
  "charisma": 0
}

const difficultyScore = 11

const typeOfCheck = 'wisdom'

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
          <TwentySidedDie modifiers={modifiers} difficultyScore={difficultyScore} typeOfCheck={typeOfCheck}/>
        </div>
      </div>
    </>
  );
};
export default TempCheck;
