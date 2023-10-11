import React, { useState } from 'react';
import Char from 'components/Char';
import NPC from 'components/NPC';
import Char_Move from 'components/Char_Move';
import Map from 'components/Map';
import Map_Manager from 'components/Map_Manager';
import Char_Animate from './Char_Animate';

const Overworld = ({ currentMap }) => {
  const [mapImage, setMapImage] = useState(null);

  const [tileSize, setTileSize] = useState(48);

  const [isMoving, setIsMoving] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [direction, setDirection] = useState('Down');
  const [frame, setFrame] = useState(1);

  const [mapPosition, setMapPosition] = useState({
    x: 1040,
    y: 600,
  });
  const [mapColumns, setMapColumns] = useState(11);
  const [mapRows, setMapRows] = useState(11);

  const [charPosition, setCharPosition] = useState({ x: 5, y: 5 });
  const [allowedMovements, setAllowedMovements] = useState({
    up: true,
    down: true,
    left: true,
    right: true,
  });

  const [NPCs, setNPCs] = useState([
    { id: 1, x: 1, y: 1 },
    { id: 2, x: 6, y: 8 },
    { id: 3, x: 8, y: 8 },
  ]);

  return (
    <>
      <Char_Move
        setPosition={setMapPosition}
        setDirection={setDirection}
        tileSize={tileSize}
        setCharPosition={setCharPosition}
        allowedMovements={allowedMovements}
        isMoving={isMoving}
        setIsMoving={setIsMoving}
        isSpacePressed={isSpacePressed}
        setIsSpacePressed={setIsSpacePressed}
      />
      <Char_Animate
        isMoving={isMoving}
        frame={frame}
        setFrame={setFrame}
        isSpacePressed={isSpacePressed}
      />
      <Map_Manager
        currentMap={currentMap}
        mapImage={mapImage}
        setMapImage={setMapImage}
        mapPosition={mapPosition}
        setMapPosition={setMapPosition}
        charPosition={charPosition}
        allowedMovements={allowedMovements}
        setAllowedMovements={setAllowedMovements}
        tileSize={tileSize}
        setNPCs={setNPCs}
        mapColumns={mapColumns}
        setMapColumns={setMapColumns}
        setMapRows={setMapRows}
      />
      <Map mapPosition={mapPosition} mapImage={mapImage} />
      <NPC
        mapPosition={mapPosition}
        NPCs={NPCs}
        tileSize={tileSize}
        mapColumns={mapColumns}
        mapRows={mapRows}
      />
      <Char tileSize={tileSize} direction={direction} frame={frame} />
    </>
  );
};

export default Overworld;
