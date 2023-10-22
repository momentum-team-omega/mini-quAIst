import React, { useState, useContext } from 'react';
import Char from 'components/Char';
import NPC_Map from 'components/NPC_Map';
import Char_Move from 'components/Char_Move';
import Map from 'components/Map';
import Foreground from 'components/Foreground';
import Map_Manager from 'components/Map_Manager';
import Map_Switch from 'components/Map_Switch';
import Tooltip from 'components/Tooltip';
import Compass from 'components/Compass';
import Menu_Icon from 'components/Menu_Icon';
import Menu from 'components/Menu';
import '/src/styles/Overworld.css';
import GameContext from './GameContext';

const Overworld = ({}) => {
  const { currentMap, setCurrentMap, npcs, setNpcs } = useContext(GameContext);
  const [mapImage, setMapImage] = useState(null);
  const [foreImage, setForeImage] = useState(null);
  const [tileSize, setTileSize] = useState(48);
  const [mapColumns, setMapColumns] = useState(11);
  const [mapRows, setMapRows] = useState(11);
  const [mapOffset, setMapOffset] = useState({ x: 9, y: 6 });
  const [hasMapSwitched, setHasMapSwitched] = useState(false);
  const [direction, setDirection] = useState('Down');
  const [isMoving, setIsMoving] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [isFPressed, setIsFPressed] = useState(false);
  const [charPosition, setCharPosition] = useState({ x: 5.5, y: 5 });
  const [mapPosition, setMapPosition] = useState({
    x: 0,
    y: 0,
  });
  const [allowedMovements, setAllowedMovements] = useState({
    up: true,
    down: true,
    left: true,
    right: true,
  });

  const [gates, setGates] = useState([]);

  const [menu, setMenu] = useState(false);

  const [mapNpcs, setMapNpcs] = useState([]);

  console.log(mapNpcs);

  return (
    <>
      <Char_Move
        setPosition={setMapPosition}
        setDirection={setDirection}
        tileSize={tileSize}
        charPosition={charPosition}
        setCharPosition={setCharPosition}
        allowedMovements={allowedMovements}
        isMoving={isMoving}
        setIsMoving={setIsMoving}
        isSpacePressed={isSpacePressed}
        setIsSpacePressed={setIsSpacePressed}
        mapOffset={mapOffset}
        isFPressed={isFPressed}
        setIsFPressed={setIsFPressed}
        menu={menu}
        setMenu={setMenu}
      />
      <Map_Switch
        mapImage={mapImage}
        setForeImage={setForeImage}
        setMapImage={setMapImage}
        setMapPosition={setMapPosition}
        setCharPosition={setCharPosition}
        setMapColumns={setMapColumns}
        setMapRows={setMapRows}
        setGates={setGates}
        setTileSize={setTileSize}
        setMapOffset={setMapOffset}
        setIsFPressed={setIsFPressed}
        hasMapSwitched={hasMapSwitched}
        setMapNpcs={setMapNpcs}
      />
      <Map_Manager
        mapPosition={mapPosition}
        setMapPosition={setMapPosition}
        charPosition={charPosition}
        setCharPosition={setCharPosition}
        allowedMovements={allowedMovements}
        setAllowedMovements={setAllowedMovements}
        tileSize={tileSize}
        npcs={npcs}
        mapColumns={mapColumns}
        mapRows={mapRows}
        gates={gates}
        isFPressed={isFPressed}
        setHasMapSwitched={setHasMapSwitched}
        mapNpcs={mapNpcs}
        setMapNpcs={setMapNpcs}
      />
      <Map
        mapPosition={mapPosition}
        mapImage={mapImage}
        tileSize={tileSize}
        mapColumns={mapColumns}
        mapRows={mapRows}
      />
      <Foreground mapPosition={mapPosition} foreImage={foreImage} />
      <NPC_Map
        mapPosition={mapPosition}
        npcs={npcs}
        tileSize={tileSize}
        mapColumns={mapColumns}
        mapRows={mapRows}
        mapNpcs={mapNpcs}
      />
      <Char
        tileSize={tileSize}
        direction={direction}
        isMoving={isMoving}
        isSpacePressed={isSpacePressed}
      />
      <Tooltip
        charPosition={charPosition}
        isSpacePressed={isSpacePressed}
        isFPressed={isFPressed}
      />
      {!menu && (
        <Compass
          isMoving={isMoving}
          direction={direction}
          isSpacePressed={isSpacePressed}
        />
      )}
      {menu ? <Menu setMenu={setMenu} /> : <Menu_Icon setMenu={setMenu} />}
    </>
  );
};

export default Overworld;
