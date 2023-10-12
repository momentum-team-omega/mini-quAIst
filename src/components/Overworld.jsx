import React, { useState, useEffect } from 'react';
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
  const [isShiftPressed, setIsShiftPressed] = useState(false);

  const [direction, setDirection] = useState('Down');
  const [frame, setFrame] = useState(1);

  const [mapPosition, setMapPosition] = useState({
    x: 1040,
    y: 600,
  });
  const [mapColumns, setMapColumns] = useState(11);
  const [mapRows, setMapRows] = useState(11);

  const [charPosition, setCharPosition] = useState({ x: null, y: null });
  const [allowedMovements, setAllowedMovements] = useState({
    up: true,
    down: true,
    left: true,
    right: true,
  });

  const [npcs, setNpcs] = useState([
    { id: 1, x: 1, y: 1 },
    { id: 2, x: 8, y: 6 },
    { id: 3, x: 8, y: 8 },
  ]);

  const isNearNPC = (charX, charY, npcX, npcY) => {
    return Math.abs(charX - npcX) <= 1 && Math.abs(charY - npcY) <= 1;
  };

  useEffect(() => {
    npcs.forEach(npc => {
        const npcX = npc.x;
        const npcY = npc.y;

        if (isNearNPC(Math.floor(charPosition.x), Math.floor(charPosition.y), npcX, npcY)) {
            console.log(`Character is near NPC with ID: ${npc.id}`);
        }
    });
  }, [charPosition]);


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
        isShiftPressed={isShiftPressed}
        setIsShiftPressed={setIsShiftPressed}
      />
      <Char_Animate
        isMoving={isMoving}
        frame={frame}
        setFrame={setFrame}
        isSpacePressed={isSpacePressed}
        isShiftPressed={isShiftPressed}
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
        setNpcs={setNpcs}
        mapColumns={mapColumns}
        setMapColumns={setMapColumns}
        setMapRows={setMapRows}
      />
      <Map mapPosition={mapPosition} mapImage={mapImage} />
      <NPC
        currentMap={currentMap}
        mapPosition={mapPosition}
        npcs={npcs}
        tileSize={tileSize}
        mapColumns={mapColumns}
        mapRows={mapRows}
      />
      <Char tileSize={tileSize} direction={direction} frame={frame} />
    </>
  );
};

export default Overworld;
