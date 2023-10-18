import React, { useMemo, useContext } from 'react';
import oldMan1 from 'assets/npc-assets/old-man-tileset.png';
import chestClosed from 'assets/npc-assets/chest-1-closed.png';
import NPC from 'components/NPC';
import GameContext from './GameContext';

const getNPCMap = (npcs, mapColumns) => {
  const npcMap = [];
  for (let i = 0; i < mapColumns; i++) {
    const row = [];
    for (let j = 0; j < mapColumns; j++) {
      row.push(null);
    }
    npcMap.push(row);
  }
  npcs.forEach((npc) => {
    if (npcMap[npc.y] && npcMap[npc.y][npc.x] === null) {
      npcMap[npc.y][npc.x] = npc.id;
    }
  });
  return npcMap;
};

const NPC_Map = ({ mapPosition, npcs, tileSize, mapColumns, mapRows }) => {
  const { currentMap } = useContext(GameContext);
  const npcMap = useMemo(() => getNPCMap(npcs, mapColumns), [npcs, mapColumns]);

  // console.log(npcMap);

  let NPC_IMAGES;
  let xOffset;
  let yOffset;

  if (currentMap === 'start') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'village1') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'trollMap') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'testMap') {
    NPC_IMAGES = {
      1: oldMan1,
      2: oldMan1,
      3: oldMan1,
      4: oldMan1,
      5: oldMan1,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'startHouse') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'enchantedForestLocked') {
    NPC_IMAGES = {
      1: oldMan1,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'enchantedForest') {
    NPC_IMAGES = {
      1: oldMan1,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'village2') {
    NPC_IMAGES = {
      1: oldMan1,
      2: oldMan1,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'village2inside') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  }

  // console.log(npcs);

  const getNPCById = (npcs, npcId) => {
    return npcs.find((npc) => npc.id === npcId);
  };

  return (
    <div
      className="npc-container"
      style={{
        position: 'relative',
        width: `${mapColumns * tileSize}px`,
        height: `${mapRows * tileSize}px`,
      }}
    >
      {npcMap.map((row, rowIndex) =>
        row.map((npcId, colIndex) => {
          const currentNPC = getNPCById(npcs, npcId);

          return (
            <React.Fragment key={`${rowIndex}-${colIndex}`}>
              {npcId && currentNPC && (
                <NPC
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  tileSize={tileSize}
                  mapPosition={mapPosition}
                  image={NPC_IMAGES[npcId] || oldMan1}
                  xOffset={xOffset}
                  yOffset={yOffset}
                  id={currentNPC.id}
                  steps={currentNPC.steps}
                  animationSpeed={currentNPC.animationSpeed}
                  triggered={currentNPC.triggered}
                  message={currentNPC.message}
                />
              )}
            </React.Fragment>
          );
        })
      )}
    </div>
  );
};

export default NPC_Map;
