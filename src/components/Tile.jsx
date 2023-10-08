import React from 'react';

const Tile = React.memo(({ TILE_SIZE, type }) => {
  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundColor: type,
      }}
    />
  );
});

export default Tile;
