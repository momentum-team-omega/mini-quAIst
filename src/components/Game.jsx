import React, { useState } from 'react';
import MapContext from 'contexts/MapContext.jsx';
import Nav from 'components/Nav';
import Char from 'components/Char';
import Char_Move from 'components/Char_Move';
import Map from 'components/Map';

const Game = () => {
  const [selectedMapGeneration, setSelectedMapGeneration] = useState(4);
  const [mapData, setMapData] = useState(null);

  const MAP_SIZE = 15; // character only centers on odd numbered grid currently, custom maps require set nubmers
  const TILE_SIZE = 90;
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const halfGameWindowWidth = parseInt(gameWindow.width, 10) / 2;
  const halfGameWindowHeight = parseInt(gameWindow.height, 10) / 2;
  const halfMapWidth = (MAP_SIZE * TILE_SIZE) / 2;
  const halfMapHeight = (MAP_SIZE * TILE_SIZE) / 2; // Technically same as halfMapWidth since it's a square

  const [mapPosition, setMapPosition] = useState({
    x: (halfMapWidth - halfGameWindowWidth) / TILE_SIZE,
    y: (halfMapHeight - halfGameWindowHeight) / TILE_SIZE,
  });

  return (
    <>
      <Nav />
      <MapContext.Provider value={{ mapData, setMapData }}>
        <div className='content'>
          <div
            className='game-container'
            style={{
              height: gameWindow.height,
              width: gameWindow.width,
            }}
          >
            <Char_Move
              position={mapPosition}
              setPosition={setMapPosition}
              MAP_SIZE={MAP_SIZE}
            />
            <Map
              position={mapPosition}
              MAP_SIZE={MAP_SIZE}
              TILE_SIZE={TILE_SIZE}
              gameWindow={gameWindow}
              selectedMapGeneration={selectedMapGeneration}
            />
            <Char tile={TILE_SIZE} />
          </div>
        </div>
      </MapContext.Provider>
    </>
  );
};
export default Game;
