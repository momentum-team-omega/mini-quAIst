import React, { useContext, useEffect } from 'react';
import MapContext from 'contexts/MapContext';
import Tile from './Tile';
import {
  generateTownMap,
  generateMountainPathMap,
} from 'utilities/mapGenerator';
import {
  fountainColors,
  houseColors,
  exampleMap,
} from 'utilities/mapGenerator';

const Map = ({ position, MAP_SIZE, TILE_SIZE, selectedMapGeneration }) => {
  const { mapData, setMapData } = useContext(MapContext);

  const styles = {
    gridTemplateColumns: `repeat(${MAP_SIZE}, ${TILE_SIZE}px)`,
    top: `${-position.y * TILE_SIZE}px`,
    left: `${-position.x * TILE_SIZE}px`,
  };

  console.log(styles);

  useEffect(() => {
    let generatedMap = null;
    if (selectedMapGeneration === 1) {
      generatedMap = generateTownMap(MAP_SIZE);
    } else if (selectedMapGeneration === 2) {
      generatedMap = generateMountainPathMap(MAP_SIZE);
    } else if (selectedMapGeneration === 3) {
      generatedMap = houseColors;
    } else if (selectedMapGeneration === 4) {
      generatedMap = exampleMap;
    }

    setMapData(generatedMap);
  }, [selectedMapGeneration]);

  if (mapData === null) {
    return null;
  }

  return (
    <div className='map-container' style={styles}>
      {mapData.map((row, rowIndex) =>
        row.map((tile, colIndex) => (
          <Tile
            TILE_SIZE={TILE_SIZE}
            key={`${rowIndex}-${colIndex}`}
            type={tile}
          />
        ))
      )}
    </div>
  );
};

export default Map;
