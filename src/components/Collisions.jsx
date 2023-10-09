import React, { useContext, useEffect } from 'react';
import CollisionContext from 'contexts/CollisionContext';

const Collisions = ({ position, TILE_SIZE }) => {
  const collisionMap = useContext(CollisionContext);

  const styles = {
    top: `${-position.y}px`,
    left: `${-position.x}px`,
  };

  return (
    <div className="collision-container" style={styles}>
      {collisionMap.map((row, rowIndex) =>
        row.map((collisionPoint, colIndex) =>
          collisionPoint === 1025 ? (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="collision-zone"
              style={{
                backgroundColor: 'red',
                top: `${rowIndex * TILE_SIZE}px`,
                left: `${colIndex * TILE_SIZE}px`,
              }}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Collisions;
