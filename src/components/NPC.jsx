import React, { useMemo } from 'react';
import oldMan1 from 'assets/npc-assets/old-man-1.png';
import chestClosed from 'assets/npc-assets/chest-1-closed.png';

const getNPCMap = (NPCs, mapColumns) => {
  const npcMap = [];
  for (let i = 0; i < mapColumns; i++) {
    const row = [];
    for (let j = 0; j < mapColumns; j++) {
      row.push(null);
    }
    npcMap.push(row);
  }
  NPCs.forEach((npc) => {
    if (npcMap[npc.y] && npcMap[npc.y][npc.x] === null) {
      npcMap[npc.y][npc.x] = npc.id;
    }
  });
  return npcMap;
};

const NPC = ({ mapPosition, NPCs, tileSize, mapColumns, mapRows }) => {
  const npcMap = useMemo(() => getNPCMap(NPCs, mapColumns), [NPCs, mapColumns]);

  const xOffset = 7.8 * tileSize;
  const yOffset = 1.97 * tileSize;

  const NPC_IMAGES = {
    1: chestClosed,
    2: oldMan1,
    3: chestClosed,
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
        row.map((npcId, colIndex) => (
          <React.Fragment key={`${rowIndex}-${colIndex}`}>
            {npcId && (
              <img
                src={NPC_IMAGES[npcId] || oldMan1}
                alt="NPC"
                style={{
                  position: 'absolute',
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
