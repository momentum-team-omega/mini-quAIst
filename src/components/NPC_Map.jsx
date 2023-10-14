import React, { useMemo } from 'react';
import oldMan1 from 'assets/npc-assets/old-man-tileset.png';
import chestClosed from 'assets/npc-assets/chest-1-closed.png';
import NPC from 'components/NPC';

const NPC_Map = ({
  currentMap,
  mapPosition,
  npcs,
  tileSize,
  mapColumns,
  mapRows,
}) => {
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

  // console.log(npcs);

  console.log('NPC_Map Component Rendered, currentMap:', currentMap);

  return (
    <div
      className="npc-container"
      style={{
        position: 'relative',
        width: `${mapColumns * tileSize}px`,
        height: `${mapRows * tileSize}px`,
      }}
    >
      {npcs.map((npc) => (
        <NPC
          currentMap={currentMap}
          key={`${npc.id}-${currentMap}`}
          rowIndex={npc.y}
          colIndex={npc.x}
          tileSize={tileSize}
          mapPosition={mapPosition}
          image={NPC_IMAGES[npc.id] || oldMan1}
          xOffset={xOffset}
          yOffset={yOffset}
          id={npc.id}
          steps={npc.steps}
          animationSpeed={npc.animationSpeed}
        />
      ))}
    </div>
  );
};

export default NPC_Map;
