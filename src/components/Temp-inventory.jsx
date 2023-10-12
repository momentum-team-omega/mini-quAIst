import React, { useState } from 'react';
import Nav from 'components/Nav';
import Inventory from 'components/Inventory';

const TempInventory = () => {
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
          <Inventory />
        </div>
      </div>
    </>
  );
};
export default TempInventory;
