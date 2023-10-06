import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import { generateTownMap, generateMountainPathMap } from '../utilities/mapGenerator'; // Import the map generation algorithms

const Map = () => {
  const TILE_SIZE = 20;
  const MAP_SIZE = 50;

  const [mapData, setMapData] = useState(null); // Define mapData state variable
  const [selectedMapGeneration, setSelectedMapGeneration] = useState(1);
  console.log(selectedMapGeneration)
  console.log(mapData)

  useEffect(() => {
    let generatedMap = null;
    if (selectedMapGeneration === 1) {
      generatedMap = generateTownMap(MAP_SIZE);
    } else if (selectedMapGeneration === 2) {
      generatedMap = generateMountainPathMap(MAP_SIZE);
    }

    setMapData(generatedMap);
  }, [selectedMapGeneration]);

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
        case "w": // WASD: "w" for up
          newY = Math.max(newY - 1, 0); // Prevent character from moving off the map in the up direction
          event.preventDefault(); // Prevent default arrow key behavior (scrolling)
          break;
        case "ArrowDown": // Prevent character from moving off the map in the down direction
        case "s": // WASD: "s" for down
          newY = Math.min(newY + 1, MAP_SIZE - 1);
          event.preventDefault(); // Prevent default arrow key behavior (scrolling)
          break;
        case "ArrowLeft": // Prevent character from moving off the map in the left direction
        case "a": // WASD: "a" for left
          newX = Math.max(newX - 1, 0);
          event.preventDefault(); // Prevent default arrow key behavior (scrolling)
          break;
        case "ArrowRight":
        case "d": // WASD: "d" for right
          newX = Math.min(newX + 1, MAP_SIZE - 1); // Prevent character from moving off the map in the right direction
          event.preventDefault(); // Prevent default arrow key behavior (scrolling)
          break;
        default:
          break;
      }

      setCharacterPosition({ x: newX, y: newY }); // Update character position
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [characterPosition]);

  // Check if mapData is null before rendering. This shouldn't take long (in milliseconds)
  if (mapData === null) {
    return null; // or we can use a loading indicator
  }

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
