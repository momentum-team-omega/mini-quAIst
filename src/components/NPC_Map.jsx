import React, { useMemo, useContext } from 'react';
import oldMan1 from 'assets/npc-assets/old-man-tileset.png';
import wiseman from 'assets/npc-assets/wiseman-sheet.png';
import steve from 'assets/npc-assets/steve-sheet.png';
import villageLeader from 'assets/npc-assets/village-leader-sheet.png';
import blacksmith from 'assets/npc-assets/blacksmith-sheet.png';
import redTroll from 'assets/npc-assets/red-troll-1.png';
import NPC from 'components/NPC';
import GameContext from './GameContext';

const getNPCMap = (mapNpcs, mapColumns) => {
  const npcMap = [];
  for (let i = 0; i < mapColumns; i++) {
    const row = [];
    for (let j = 0; j < mapColumns; j++) {
      row.push(null);
    }
    npcMap.push(row);
  }
  mapNpcs.forEach((npc) => {
    if (npc.x >= 0 && npc.x < mapColumns && npc.y >= 0 && npc.y < mapColumns) {
      npcMap[npc.y][npc.x] = npc.npc.id;
    }
  });
  return npcMap;
};

const NPC_Map = ({ mapPosition, tileSize, mapColumns, mapRows, mapNpcs }) => {
  const { currentMap, npcs } = useContext(GameContext);
  const npcMap = useMemo(
    () => getNPCMap(mapNpcs, mapColumns),
    [mapNpcs, mapColumns]
  );

  let NPC_IMAGES;
  let xOffset;
  let yOffset;

  if (currentMap === 'start') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'trollMap') {
    NPC_IMAGES = {
      5: redTroll,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'trollMapCat') {
    NPC_IMAGES = {
      5: redTroll,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'startHouse') {
    NPC_IMAGES = {};
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'enchantedForestLocked') {
    NPC_IMAGES = {
      1: wiseman,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'enchantedForest') {
    NPC_IMAGES = {
      1: wiseman,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'village2') {
    NPC_IMAGES = {
      2: steve,
      4: blacksmith,
    };
    xOffset = -10 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'village2Locked') {
    NPC_IMAGES = {
      2: steve,
      4: blacksmith,
    };
    xOffset = -10 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'village2Locked2') {
    NPC_IMAGES = {
      2: steve,
      4: blacksmith,
    };
    xOffset = -10 * tileSize;
    yOffset = 0 * tileSize;
  } else if (currentMap === 'village2inside') {
    NPC_IMAGES = {
      3: villageLeader,
    };
    xOffset = 0 * tileSize;
    yOffset = 0 * tileSize;
  }

  const getNPCById = (npcs, npcId) => {
    return npcs.find((npc) => npc.id === npcId);
  };

  const aliveNpcs = npcs.filter((npc) => npc.alive);

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
          const currentNPC = getNPCById(aliveNpcs, npcId);

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
