import React, { useMemo } from 'react';
import oldMan1 from 'assets/npc-assets/old-man-tileset.png';
import chestClosed from 'assets/npc-assets/chest-1-closed.png';
import NPC from 'components/NPC';

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

const NPC_Map = ({
  currentMap,
  mapPosition,
  npcs,
  tileSize,
  mapColumns,
  mapRows,
}) => {
  const npcMap = useMemo(() => getNPCMap(npcs, mapColumns), [npcs, mapColumns]);

  // console.log(npcMap);

  let NPC_IMAGES;
  let xOffset;
  let yOffset;

  if (currentMap === 'bridgeLeft') {
    NPC_IMAGES = {
      1: chestClosed,
      2: oldMan1,
      3: chestClosed,
    };
    xOffset = 7.81 * tileSize;
    yOffset = 1.97 * tileSize;
  } else if (currentMap === 'bridgeRight') {
    NPC_IMAGES = {
      1: chestClosed,
      2: chestClosed,
      3: oldMan1,
    };
    xOffset = 7.81 * tileSize;
    yOffset = 1.97 * tileSize;
  } else if (currentMap === 'houseInside') {
    NPC_IMAGES = {
      1: chestClosed,
      2: oldMan1,
      3: chestClosed,
    };
    xOffset = 7.81 * tileSize;
    yOffset = 1.97 * tileSize;
  } else if (currentMap === 'golemMap') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'deathIsland') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  }

  console.log(npcs);

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
                  steps={currentNPC.steps}
                  animationSpeed={currentNPC.animationSpeed}
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
