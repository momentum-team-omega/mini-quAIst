import React, { useState, useEffect, useMemo } from 'react';
import {
  bridgeLeftCollisions,
  bridgeRightCollisions,
  houseInsideCollisions,
  golemMapCollisions,
  deathIslandCollisions,
} from 'utilities/collisionsData.js';
import bridgeLeft from 'assets/map-assets/bridge-map-left.png';
import bridgeLeftFore from 'assets/map-assets/bridge-map-left-fore.png';
import bridgeRight from 'assets/map-assets/bridge-map-right.png';
import bridgeRightFore from 'assets/map-assets/bridge-map-right-fore.png';
import houseInside from 'assets/map-assets/house-map-inside.png';
import golemMap from 'assets/map-assets/golem-map.png';
import deathIsland from 'assets/map-assets/deathIsland.png';

const Map_Manager = ({
  currentMap,
  setCurrentMap,
  mapImage,
  setMapImage,
  setForeImage,
  mapPosition,
  setMapPosition,
  charPosition,
  setCharPosition,
  allowedMovements,
  setAllowedMovements,
  tileSize,
  npcs,
  setNpcs,
  mapColumns,
  setMapColumns,
  setMapRows,
  gates,
  setGates,
  setTileSize,
  setMapOffset,
}) => {
  const [collisions, setCollisions] = useState(bridgeLeftCollisions);
  const [hasMapSwitched, setHasMapSwitched] = useState(false);

  const BLOCKED = 1025;
  const INT = 777;
  const GATE = 500;

  const [color, setColor] = useState('transparent');

  const styles = {
    top: `${-mapPosition.y}px`,
    left: `${-mapPosition.x}px`,
  };

  useEffect(() => {
    if (!mapImage) {
      setMapImage(bridgeLeft);
    }
    if (currentMap === 'bridgeLeft') {
      setMapImage(bridgeLeft);
      setForeImage(bridgeLeftFore);
      setTileSize(48);
      setMapOffset({ x: 13, y: 8 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -377,
          y: -102,
        });
        setCharPosition({ x: 5, y: 5 });
      }
      setMapColumns(11);
      setMapRows(11);
      setCollisions(bridgeLeftCollisions);
      setNpcs([
        { id: 1, x: 1, y: 1, steps: 1, animationSpeed: 0, alive: true },
        { id: 2, x: 6, y: 8, steps: 2, animationSpeed: 800, alive: true },
        { id: 3, x: 8, y: 8, steps: 1, animationSpeed: 0, alive: true },
      ]);
      setGates([
        {
          id: 1,
          x: 10,
          y: 4,
          map: 'bridgeRight',
          destPX: -576,
          destPY: -102,
          destX: 1,
          destY: 5,
        },
        {
          id: 2,
          x: 10,
          y: 5,
          map: 'bridgeRight',
          destPX: -576,
          destPY: -102,
          destX: 1,
          destY: 5,
        },
        {
          id: 3,
          x: 10,
          y: 6,
          map: 'bridgeRight',
          destPX: -576,
          destPY: -102,
          destX: 1,
          destY: 5,
        },
      ]);
    } else if (currentMap === 'bridgeRight') {
      setMapImage(bridgeRight);
      setForeImage(bridgeRightFore);
      setTileSize(48);
      setMapOffset({ x: 13, y: 8 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -377,
          y: -102,
        });
        setCharPosition({ x: 5, y: 5 });
      }
      setMapColumns(11);
      setMapRows(11);
      setCollisions(bridgeRightCollisions);
      setNpcs([
        { id: 1, x: 1, y: 8, steps: 1, animationSpeed: 0, alive: true },
        { id: 2, x: 2, y: 1, steps: 1, animationSpeed: 0, alive: true },
        { id: 3, x: 7, y: 7, steps: 2, animationSpeed: 800, alive: true },
      ]);
      setGates([
        {
          id: 1,
          x: 0,
          y: 4,
          map: 'bridgeLeft',
          destPX: -179.5,
          destPY: -102,
          destX: 9,
          destY: 5,
        },
        {
          id: 2,
          x: 0,
          y: 5,
          map: 'bridgeLeft',
          destPX: -179.5,
          destPY: -102,
          destX: 9,
          destY: 5,
        },
        {
          id: 3,
          x: 0,
          y: 6,
          map: 'bridgeLeft',
          destPX: -179.5,
          destPY: -102,
          destX: 9,
          destY: 5,
        },
        {
          id: 4,
          x: 7,
          y: 4,
          map: 'houseInside',
          destPX: -347.5,
          destPY: 93,
          destX: 5,
          destY: 9,
        },
        {
          id: 5,
          x: 8,
          y: 4,
          map: 'houseInside',
          destPX: -347.5,
          destPY: 93,
          destX: 5,
          destY: 9,
        },
      ]);
    } else if (currentMap === 'houseInside') {
      setMapImage(houseInside);
      setForeImage(null);
      setTileSize(48);
      setMapOffset({ x: 13, y: 8 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -377,
          y: 95.5,
        });
        setCharPosition({ x: 5, y: 9 });
      }
      setMapColumns(11);
      setMapRows(11);
      setCollisions(houseInsideCollisions);
      setNpcs([
        { id: 1, x: 2, y: 8, steps: 1, animationSpeed: 0, alive: true },
        { id: 2, x: 3, y: 2, steps: 2, animationSpeed: 800, alive: true },
        { id: 3, x: 8, y: 2, steps: 1, animationSpeed: 0, alive: true },
      ]);
      setGates([
        {
          id: 1,
          x: 5,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 2,
          x: 6,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
      ]);
    } else if (currentMap === 'golemMap') {
      setMapImage(golemMap);
      setForeImage(null);
      setTileSize(64);
      setMapOffset({ x: 13, y: 8 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -377,
          y: 95.5,
        });
        setCharPosition({ x: 5, y: 9 });
      }
      setMapColumns(11);
      setMapRows(11);
      setCollisions(golemMapCollisions);
      setNpcs([
        { id: 1, x: 2, y: 8, steps: 1, animationSpeed: 0, alive: true },
        { id: 2, x: 3, y: 2, steps: 1, animationSpeed: 0, alive: true },
        { id: 3, x: 8, y: 2, steps: 1, animationSpeed: 0, alive: true },
      ]);
      setGates([
        {
          id: 1,
          x: 5,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
      ]);
    } else if (currentMap === 'deathIsland') {
      setMapImage(deathIsland);
      setForeImage(null);
      setTileSize(64);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -287,
          y: -6,
        });
        setCharPosition({ x: 5, y: 5 });
      }
      setMapColumns(11);
      setMapRows(11);
      setCollisions(deathIslandCollisions);
      setNpcs([{}]);
      setGates([
        {
          id: 1,
          x: 4,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 1,
          x: 5,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 1,
          x: 6,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
      ]);
    }
  }, [currentMap]);

  const collisionMap = useMemo(() => {
    let tempCollisionMap = [];
    for (let i = 0; i < collisions.length; i += mapColumns) {
      tempCollisionMap.push(collisions.slice(i, mapColumns + i));
    }
    return tempCollisionMap;
  }, [collisions, mapColumns]);

  const isNearNPC = (charX, charY, npcX, npcY) => {
    return Math.abs(charX - npcX) <= 1 && Math.abs(charY - npcY) <= 1;
  };

  const isNearGate = (charX, charY, gateX, gateY) => {
    return Math.abs(charX - gateX) <= 1 && Math.abs(charY - gateY) <= 1;
  };

  useEffect(() => {
    let isNearAnyGate = false;

    gates.forEach((gate) => {
      const gateX = gate.x;
      const gateY = gate.y;

      if (
        isNearGate(
          Math.floor(charPosition.x),
          Math.floor(charPosition.y),
          gateX,
          gateY
        )
      ) {
        console.log(`Character is near Gate with ID: ${gate.id}`);
        isNearAnyGate = true;
      }
    });

    if (isNearAnyGate) {
      setColor('orange');
    } else {
      setColor('transparent');
    }

    npcs.forEach((npc) => {
      const npcX = npc.x;
      const npcY = npc.y;

      if (
        isNearNPC(
          Math.floor(charPosition.x),
          Math.floor(charPosition.y),
          npcX,
          npcY
        )
      ) {
        console.log(`Character is near NPC with ID: ${npc.id}`);
      }
    });
    console.log(mapPosition);
    console.log(charPosition);
  }, [charPosition]);

  const checkCollisions = (position, collisionMap) => {
    const x = Math.floor(position.x);
    const y = Math.floor(position.y);

    let allowed = {
      up: true,
      down: true,
      left: true,
      right: true,
    };

    const isBlocked = (y, x) =>
      collisionMap[y][x] === BLOCKED || collisionMap[y][x] === INT;

    if (y - 1 >= 0 && isBlocked(y - 1, x)) {
      allowed.up = false;
    }

    if (y + 1 < collisionMap.length && isBlocked(y + 1, x)) {
      allowed.down = false;
    }

    if (x - 1 >= 0 && isBlocked(y, x - 1)) {
      allowed.left = false;
    }

    if (x + 1 < collisionMap[0].length && isBlocked(y, x + 1)) {
      allowed.right = false;
    }

    if (
      allowed.up !== allowedMovements.up ||
      allowed.down !== allowedMovements.down ||
      allowed.left !== allowedMovements.left ||
      allowed.right !== allowedMovements.right
    ) {
      setAllowedMovements(allowed);
    }
  };

  useEffect(() => {
    checkCollisions(charPosition, collisionMap);
  }, [charPosition, collisionMap]);

  useEffect(() => {
    gates.forEach((gate) => {
      const gateX = gate.x;
      const gateY = gate.y;
      const destination = gate.map;

      if (
        Math.floor(charPosition.x) === gateX &&
        Math.floor(charPosition.y) === gateY
      ) {
        console.log(`Character entered Gate with ID: ${gate.id}`);
        setCurrentMap(destination);
        setMapPosition({ x: gate.destPX, y: gate.destPY });
        setCharPosition({ x: gate.destX, y: gate.destY });
        setHasMapSwitched(true);
      }
    });
  }, [charPosition]);

  return (
    <div className="collision-container" style={styles}>
      {collisionMap.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <React.Fragment key={`${rowIndex}-${colIndex}`}>
            {value === BLOCKED && (
              <div
                className="collision-zone"
                style={{
                  top: `${rowIndex * tileSize}px`,
                  left: `${colIndex * tileSize}px`,
                  width: `${tileSize}px`,
                  height: `${tileSize}px`,
                  // backgroundColor: 'red',
                }}
              />
            )}
            {value === INT && (
              <div
                className="interaction-zone"
                style={{
                  top: `${rowIndex * tileSize}px`,
                  left: `${colIndex * tileSize}px`,
                  width: `${tileSize}px`,
                  height: `${tileSize}px`,
                  // backgroundColor: 'green',
                }}
              />
            )}
            {value === GATE && (
              <div
                className="gate-zone"
                style={{
                  top: `${rowIndex * tileSize}px`,
                  left: `${colIndex * tileSize}px`,
                  width: `${tileSize}px`,
                  height: `${tileSize}px`,
                  backgroundColor: color,
                }}
              />
            )}

            {rowIndex === Math.floor(charPosition.y) &&
              colIndex === Math.floor(charPosition.x) && (
                <div
                  className="player-zone"
                  style={{
                    top: `${rowIndex * tileSize}px`,
                    left: `${colIndex * tileSize}px`,
                    width: `${tileSize}px`,
                    height: `${tileSize}px`,
                    backgroundColor: 'blue',
                  }}
                />
              )}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Map_Manager;
