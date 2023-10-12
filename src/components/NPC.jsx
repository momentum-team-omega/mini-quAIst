import React, { useState, useMemo } from 'react';
import oldMan1 from 'assets/npc-assets/old-man-1.png';
import chestClosed from 'assets/npc-assets/chest-1-closed.png';

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

const NPC = ({
  currentMap,
  mapPosition,
  npcs,
  tileSize,
  mapColumns,
  mapRows,
}) => {
  const npcMap = useMemo(() => getNPCMap(npcs, mapColumns), [npcs, mapColumns]);
  console.log(npcMap);

  let NPC_IMAGES;
  let xOffset;
  let yOffset;

  if (currentMap === 'small') {
    NPC_IMAGES = {
      1: chestClosed,
      2: oldMan1,
      3: chestClosed,
    };
    xOffset = 7.8 * tileSize;
    yOffset = 1.97 * tileSize;
  } else if (currentMap === 'example') {
    NPC_IMAGES = {
      1: chestClosed,
      2: chestClosed,
      3: chestClosed,
      4: chestClosed,
      5: oldMan1,
      6: chestClosed,
      7: chestClosed,
    };
    xOffset = -21.68 * tileSize;
    yOffset = 0 * tileSize;
  }

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
        row.map((npcId, colIndex) => (
          <React.Fragment key={`${rowIndex}-${colIndex}`}>
            {npcId && (
              <img
                src={NPC_IMAGES[npcId] || oldMan1}
                alt="NPC"
                className="NPC"
                style={{
                  top: `${rowIndex * tileSize - mapPosition.y - yOffset}px`,
                  left: `${colIndex * tileSize - mapPosition.x - xOffset}px`,
                  width: `${tileSize}px`,
                  height: `${tileSize}px`,
                }}
              />
            )}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default NPC;
