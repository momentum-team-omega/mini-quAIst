import React, { useContext, useState, useEffect, useMemo } from 'react';
import GameContext from './GameContext';
import {
  village1Collisions,
  trollMapCollisions,
  testMapCollisions,
  startCollisions,
  startHouseCollisions,
  enchantedForestCollisions,
  enchantedForestLockedCollisions,
  village2Collisions,
  village2LockedCollisions,
  village2Locked2Collisions,
  village2insideCollisions,
} from 'utilities/collisionsData.js';

const Map_Manager = ({
  mapPosition,
  setMapPosition,
  charPosition,
  setCharPosition,
  allowedMovements,
  setAllowedMovements,
  tileSize,
  mapColumns,
  gates,
  setHasMapSwitched,
  mapNpcs,
  setMapNpcs,
}) => {
  const {
    setScene,
    setCurrentNPC,
    currentMap,
    setCurrentMap,
    npcs,
    setNpcs,
    isFPressed,
  } = useContext(GameContext);
  const [collisions, setCollisions] = useState(startCollisions);

  // console.log('manager collisions: ', collisions);

  const BLOCKED = 1025;
  const INT = 777;
  const GATE = 500;

  const [gateColor, setGateColor] = useState('transparent');
  const [npcColor, setNpcColor] = useState('transparent');

  const styles = {
    top: `${-mapPosition.y}px`,
    left: `${-mapPosition.x}px`,
  };

  useEffect(() => {
    if (currentMap === 'start') {
      setCollisions(startCollisions);
    } else if (currentMap === 'startHouse') {
      setCollisions(startHouseCollisions);
    } else if (currentMap === 'enchantedForestLocked') {
      setCollisions(enchantedForestLockedCollisions);
    } else if (currentMap === 'enchantedForest') {
      setCollisions(enchantedForestCollisions);
    } else if (currentMap === 'village2') {
      setCollisions(village2Collisions);
    } else if (currentMap === 'village2Locked') {
      setCollisions(village2LockedCollisions);
    } else if (currentMap === 'village2Locked2') {
      setCollisions(village2Locked2Collisions);
    } else if (currentMap === 'village2inside') {
      setCollisions(village2insideCollisions);
    } else if (currentMap === 'trollMap') {
      setCollisions(trollMapCollisions);
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
        isNearAnyGate = true;
      }
    });

    if (isNearAnyGate) {
      setGateColor('orange');
    } else {
      setGateColor('transparent');
    }

    let isNearAnyNpc = false;

    mapNpcs.forEach((mapNpc) => {
      const npcX = mapNpc.x;
      const npcY = mapNpc.y;

      if (
        isNearNPC(
          Math.floor(charPosition.x),
          Math.floor(charPosition.y),
          npcX,
          npcY
        )
      ) {
        isNearAnyNpc = true;

        if (isNearAnyNpc) {
          setNpcs((prevNpcs) =>
            prevNpcs.map((prevNpc) =>
              prevNpc.id === mapNpc.npc.id
                ? {
                    ...prevNpc,
                    triggered: !prevNpc.triggered,
                  }
                : prevNpc
            )
          );
        }

        if (isFPressed) {
          setCurrentNPC(mapNpc.npc.name);
          setScene('dialogue');
        }
      }
    });

    if (isNearAnyNpc) {
      setNpcColor('cyan');
    } else {
      setNpcColor('transparent');
    }

    // console.log(mapPosition);
    // console.log(charPosition);
  }, [charPosition, isFPressed, mapNpcs]);

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
        // console.log(`Character entered Gate with ID: ${gate.id}`);
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
                  backgroundColor: npcColor,
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
                  backgroundColor: gateColor,
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
                    // backgroundColor: 'blue',
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
