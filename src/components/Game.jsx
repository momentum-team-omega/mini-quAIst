import React, { useState } from 'react';
import Nav from 'components/Nav';
import Char from 'components/Char';
import Char_Move from 'components/Char_Move';
import Map from 'components/Map';
import Collisions from 'components/Collisions';
import { collisions } from 'utilities/collisionsData.js';
import CollisionContext from 'contexts/CollisionContext';

const Game = () => {
  const [tileSize, setTileSize] = useState(48);

  const [direction, setDirection] = useState('Down');
  const [frame, setFrame] = useState(1);

  const [mapPosition, setMapPosition] = useState({
    x: 1040,
    y: 600,
  });
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const collisionMap = [];
  for (let i = 0; i < collisions.length; i += 70) {
    collisionMap.push(collisions.slice(i, 70 + i));
  }

  return (
    <>
      <Nav />
      <CollisionContext.Provider value={collisionMap}>
        <div className="content">
          <div
            className="game-container"
            style={{
              height: gameWindow.height,
              width: gameWindow.width,
            }}
          >
            <Char_Move
              setPosition={setMapPosition}
              setDirection={setDirection}
              setFrame={setFrame}
            />
            <Map position={mapPosition} />
            {/* <Collisions position={mapPosition} tileSize={tileSize} /> */}
            <Char tileSize={tileSize} direction={direction} frame={frame} />
          </div>
        </div>
      </CollisionContext.Provider>
    </>
  );
};
export default Game;
