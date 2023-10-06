import React from 'react';

const TILE_SIZE = 20;  // Size of each tile in pixels
const TERRAINS = {
  mountain: 'gray',
  grass: 'green',
  water: 'blue',
  tree: 'darkgreen'
};

const Tile = React.memo(({ type, isCharacter, onClick }) => {
  return (
    <div 
      style={{ 
        width: TILE_SIZE, 
        height: TILE_SIZE, 
        backgroundColor: isCharacter ? 'red' : TERRAINS[type], // Red color for the character
        cursor: isCharacter ? 'pointer' : 'default'
      }}
      onClick={onClick}
    />
  );
});

export default Tile;
