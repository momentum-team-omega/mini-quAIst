import React, { useState } from 'react';
import Nav from 'components/Nav';
import Char from 'components/Char';
import Char_Move from 'components/Char_Move';
import Map from 'components/Map';
import Map_Manager from 'components/Map_Manager';

const Game = () => {
  const [tileSize, setTileSize] = useState(48);

  const [direction, setDirection] = useState('Down');
  const [frame, setFrame] = useState(1);

  const [currentMap, setCurrentMap] = useState('example');
  const [mapImage, setMapImage] = useState(null);

  const [mapPosition, setMapPosition] = useState({
    x: 1040,
    y: 600,
  });
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const [charPosition, setCharPosition] = useState({ x: 5, y: 5 });
  const [allowedMovements, setAllowedMovements] = useState({
    up: true,
    down: true,
    left: true,
    right: true,
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
          <Char_Move
            setPosition={setMapPosition}
            setDirection={setDirection}
            setFrame={setFrame}
            tileSize={tileSize}
            charPosition={charPosition}
            setCharPosition={setCharPosition}
            allowedMovements={allowedMovements}
          />
          <Map_Manager
            currentMap={currentMap}
            mapImage={mapImage}
            setMapImage={setMapImage}
            mapPosition={mapPosition}
            setMapPosition={setMapPosition}
            charPosition={charPosition}
            setAllowedMovements={setAllowedMovements}
            tileSize={tileSize}
          />
          <Map mapPosition={mapPosition} mapImage={mapImage} />
          <Char tileSize={tileSize} direction={direction} frame={frame} />
        </div>
        <div className="map-toggle-container">
          <button className="map-toggle" value="smallMap" onClick={handleClick}>
            Small
          </button>
          <button
            className="map-toggle"
            value="exampleMap"
            onClick={handleClick}
          >
            Large
          </button>
        </div>
      </div>
    </>
  );
};
export default Game;
