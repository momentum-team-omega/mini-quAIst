import React, { useState } from 'react';
import Nav from 'components/Nav';
import Overworld from './Overworld';

const Game = () => {
  const [currentMap, setCurrentMap] = useState('small');

  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const handleClick = (e) => {
    setCurrentMap(e.target.value);
  };

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
          <Overworld currentMap={currentMap} />
        </div>
      </div>
    </>
  );
};
export default Game;
