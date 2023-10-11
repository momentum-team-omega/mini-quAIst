import React, { useState, useEffect, useMemo } from 'react';
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
  allowedMovements,
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

  const collisionMap = useMemo(() => {
    let tempCollisionMap = [];
    for (let i = 0; i < collisions.length; i += mapColumns) {
      tempCollisionMap.push(collisions.slice(i, mapColumns + i));
    }
    return tempCollisionMap;
  }, [collisions, mapColumns]);

  const checkCollisions = (position, collisionMap) => {
    const x = Math.floor(position.x);
    const y = Math.floor(position.y);

    let allowed = {
      up: true,
      down: true,
      left: true,
      right: true,
    };

    if (y - 1 >= 0 && collisionMap[y - 1][x] === BLOCKED) {
      allowed.up = false;
    }

    if (y + 1 < collisionMap.length && collisionMap[y + 1][x] === BLOCKED) {
      allowed.down = false;
    }

    if (x - 1 >= 0 && collisionMap[y][x - 1] === BLOCKED) {
      allowed.left = false;
    }

    if (x + 1 < collisionMap[0].length && collisionMap[y][x + 1] === BLOCKED) {
      allowed.right = false;
    }

    if (
      allowed.up !== allowedMovements.up ||
      allowed.down !== allowedMovements.down ||
      allowed.left !== allowedMovements.left ||
      allowed.right !== allowedMovements.right
    ) {
      setAllowedMovements(allowed);
    }
  };

  useEffect(() => {
    checkCollisions(charPosition, collisionMap);
  }, [charPosition, collisionMap]);

  // console.log(collisionMap);

  return (
    <div className="collision-container" style={styles}>
      {collisionMap.map((row, rowIndex) =>
        row.map((collisionPoint, colIndex) => (
          // Attach the key to the fragment
          <React.Fragment key={`${rowIndex}-${colIndex}`}>
            {collisionPoint === BLOCKED && (
              <div
                className="collision-zone"
                style={{
                  top: `${rowIndex * tileSize}px`,
                  left: `${colIndex * tileSize}px`,
                  backgroundColor: 'red',
                }}
              />
            )}

            {rowIndex === Math.floor(charPosition.y) &&
              colIndex === Math.floor(charPosition.x) && (
                <div
                  className="player-zone"
                  style={{
                    top: `${rowIndex * tileSize}px`,
                    left: `${colIndex * tileSize}px`,
                    backgroundColor: 'blue',
                  }}
                />
              )}
            {/* {console.log(`charPosition: ${charPosition.x}, ${charPosition.y}`)} */}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Map_Manager;
