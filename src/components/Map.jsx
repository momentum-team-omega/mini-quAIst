import React, { useState, useEffect } from 'react';
import Tile from './Tile';

const TILE_SIZE = 20;
const MAP_SIZE = 50;

const TERRAINS = {
  mountain: 'gray',
  grass: 'green',
  water: 'blue',
  tree: 'darkgreen',
};

const getNeighbors = (x, y, mapData) => {
  const neighbors = [];
  if (x > 0) neighbors.push(mapData[y][x - 1]);
  if (x < MAP_SIZE - 1) neighbors.push(mapData[y][x + 1]);
  if (y > 0) neighbors.push(mapData[y - 1][x]);
  if (y < MAP_SIZE - 1) neighbors.push(mapData[y + 1][x]);
  return neighbors;
};

const generateRandomTerrain = () => {
  const terrains = Object.keys(TERRAINS);
  return terrains[Math.floor(Math.random() * terrains.length)];
};

const generateTerrainWithWeight = (x, y, mapData) => {
  const neighbors = getNeighbors(x, y, mapData);
  const terrains = Object.keys(TERRAINS);
  const weightedTerrains = [];
  
  for (const terrain of terrains) {
    let weight = 1;
    
    for (const neighbor of neighbors) {
      if (neighbor === terrain) weight += 100;
    }
    
    for (let i = 0; i < weight; i++) {
      weightedTerrains.push(terrain);
    }
  }
  
  return weightedTerrains[Math.floor(Math.random() * weightedTerrains.length)];
};

const Map = () => {
  const [mapData, setMapData] = useState(() => {
    let initialData = Array.from({ length: MAP_SIZE }, () =>
      Array.from({ length: MAP_SIZE }, () => generateRandomTerrain())
    );

    for (let y = 0; y < MAP_SIZE; y++) {
      for (let x = 0; x < MAP_SIZE; x++) {
        initialData[y][x] = generateTerrainWithWeight(x, y, initialData);
      }
    }

    return initialData;
  });

  const [characterPosition, setCharacterPosition] = useState({
    x: Math.floor(MAP_SIZE / 2),
    y: Math.floor(MAP_SIZE / 2),
  });

  useEffect(() => {
    const handleKeyPress = (event) => {
      let newX = characterPosition.x;
      let newY = characterPosition.y;
  
      switch (event.key) {
        case "ArrowUp":
          newY = Math.max(newY - 1, 0);
          event.preventDefault(); // Prevent default arrow key behavior (scrolling)
          break;
        case "ArrowDown":
          newY = Math.min(newY + 1, MAP_SIZE - 1);
          event.preventDefault(); // Prevent default arrow key behavior (scrolling)
          break;
        case "ArrowLeft":
          newX = Math.max(newX - 1, 0);
          event.preventDefault(); // Prevent default arrow key behavior (scrolling)
          break;
        case "ArrowRight":
          newX = Math.min(newX + 1, MAP_SIZE - 1);
          event.preventDefault(); // Prevent default arrow key behavior (scrolling)
          break;
        default:
          break;
      }
  
      setCharacterPosition({ x: newX, y: newY });
    };
  
    window.addEventListener("keydown", handleKeyPress);
  
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [characterPosition]);

  return (
    
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${MAP_SIZE}, ${TILE_SIZE}px)` }}>
      {mapData.map((row, rowIndex) => (
        row.map((tile, colIndex) => (
          <Tile 
            key={`${rowIndex}-${colIndex}`} 
            type={tile}
            isCharacter={rowIndex === characterPosition.y && colIndex === characterPosition.x}
          />
        ))
      ))}
    </div>
  );
}

export default Map;
