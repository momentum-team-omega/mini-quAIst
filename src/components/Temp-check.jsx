import React, { useState } from 'react';
import Nav from 'components/Nav';
import TwentySidedDie from './TwentySidedDie';

const TempCheck = () => {
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const [charStats, setCharStats] = useState({
    name: '',
    health: 50,
    strength: 6,
    str_mod: -2,
    wisdom: 14,
    wis_mod: 2,
    dexterity: 10,
    dex_mod: 0,
  });
  const [typeOfCheck, setTypeOfCheck] = useState('wis');

  const [makeCheck, setMakeCheck] = useState(false);
  const [checkPass, setCheckPass] = useState(null);
  const [outcome, setOutcome] = useState('');

  const difficultyScore = 11;

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
          <TwentySidedDie
            difficultyScore={difficultyScore}
            typeOfCheck={typeOfCheck}
            charStats={charStats}
            setOutcome={setOutcome}
            outcome={outcome}
          />
        </div>
      </div>
    </>
  );
};
export default TempCheck;
