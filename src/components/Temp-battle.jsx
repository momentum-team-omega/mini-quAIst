import React, { useState } from 'react';
import Nav from 'components/Nav';
import Battle from 'components/Battle';

const TempBattle = () => {
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const [charStats, setCharStats] = useState({
    name: 'test',
    charClass: 'barb',
    health: 50,
    strength: 16,
    str_mod: 2,
    wisdom: 10,
    wis_mod: 0,
    dexterity: 6,
    dex_mod: -2,
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
          <Battle charStats={charStats} />
        </div>
      </div>
    </>
  );
};
export default TempBattle;
