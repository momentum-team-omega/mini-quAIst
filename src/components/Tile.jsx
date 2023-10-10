import React from 'react';

const Tile = React.memo(({ tileSize, type }) => {
  return (
    <div
      style={{
        width: tileSize,
        height: tileSize,
        backgroundColor: type,
      }}
    />
  );
});

export default Tile;
