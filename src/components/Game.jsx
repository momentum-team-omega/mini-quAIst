import React, { useState } from 'react';
import Nav from 'components/Nav';
import Overworld from './Overworld';
import Dialogue from './Dialogue';

const Game = () => {
  const [currentMap, setCurrentMap] = useState('bridgeLeft');

  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  
  <Dialogue />

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
          <Overworld currentMap={currentMap} setCurrentMap={setCurrentMap} />
          
        </div>
      </div>
    </>
  );
};
export default Game;
