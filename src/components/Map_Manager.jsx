import { useState, useEffect } from 'react';
import {
  smallCollisions,
  exampleCollisions,
} from 'utilities/collisionsData.js';
import exampleMap from 'assets/map-assets/example-map-zoom.png';
import smallMap from 'assets/map-assets/small-map-zoom.png';

const Map_Manager = ({
  currentMap,
  mapImage,
  setMapImage,
  mapPosition,
  setMapPosition,
  charPosition,
  setAllowedMovements,
  tileSize,
}) => {
  const [mapColumns, setMapColumns] = useState(11);
  const [collisions, setCollisions] = useState(exampleCollisions);

  const BLOCKED = 1025;

  const styles = {
    top: `${-mapPosition.y}px`,
    left: `${-mapPosition.x}px`,
  };

  useEffect(() => {
    if (!mapImage) {
      setMapImage(exampleMap);
    }
    if (currentMap === 'small') {
      setMapImage(smallMap);
      setMapPosition({
        x: -377,
        y: -102,
      });
      setMapColumns(11);
      setCollisions(smallCollisions);
    } else if (currentMap === 'example') {
      setMapImage(exampleMap);
      setMapPosition({
        x: 1040,
        y: 600,
      });
      setMapColumns(70);
      setCollisions(exampleCollisions);
    }
  }, [currentMap]);

  let collisionMap = [];
  for (let i = 0; i < smallCollisions.length; i += mapColumns) {
    collisionMap.push(collisions.slice(i, mapColumns + i));
  }

  return (
    <div className="collision-container" style={styles}>
      {collisionMap.map((row, rowIndex) =>
        row.map((collisionPoint, colIndex) =>
          collisionPoint === BLOCKED ? (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="collision-zone"
              style={{
                top: `${rowIndex * tileSize}px`,
                left: `${colIndex * tileSize}px`,
                backgroundColor: 'red',
              }}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Map_Manager;
