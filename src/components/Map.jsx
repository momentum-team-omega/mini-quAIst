import React, { useState, useEffect } from 'react';

const Map = ({ mapPosition, mapImage, tileSize, mapColumns, mapRows }) => {
  const [frame, setFrame] = useState(1);

  const updateMapFrame = () => {
    setFrame((prevFrame) => (prevFrame % 4) + 1);
  };

  useEffect(() => {
    const frameInterval = 600;

    const mainInterval = setInterval(() => {
      updateMapFrame();
    }, frameInterval);

    return () => {
      clearInterval(mainInterval);
    };
  }, []);

  const leftPosition = `${(frame - 1) * 33.333333}%`;

  const styles = {
    top: `${-mapPosition.y}px`,
    left: `${-mapPosition.x}px`,
    width: `${tileSize * mapColumns}px`,
    height: `${tileSize * mapRows}px`,
    backgroundImage: `url(${mapImage})`,
    backgroundPosition: `${leftPosition} 0`,
    backgroundSize: '400% 100%',
  };

  return <div className="map-container" style={styles}></div>;
};

export default Map;
