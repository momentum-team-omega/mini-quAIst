import React from 'react';

const Tile = React.memo(({ TILE_SIZE, type, isCharacter }) => {
  return (
    <div 
      style={{ 
        width: TILE_SIZE, 
        height: TILE_SIZE, 
        backgroundColor: isCharacter ? 'red' : type, // Red color for the character
        cursor: isCharacter ? 'pointer' : 'default'
      }}
    />
  );
});

export default Tile;
