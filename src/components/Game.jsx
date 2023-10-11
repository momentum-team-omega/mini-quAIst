import React, { useState } from 'react';
import Nav from 'components/Nav';
import Overworld from './Overworld';

const Game = () => {
  const [currentMap, setCurrentMap] = useState('example');

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
        {/* <div className="map-toggle-container">
          <button className="map-toggle" value="smallMap" onClick={handleClick}>
            Small (broken)
          </button>
          <button
            className="map-toggle"
            value="exampleMap"
            onClick={handleClick}
          >
            Large (broken)
          </button>
        </div> */}
      </div>
    </>
  );
};
export default Game;
