import React, { useState, useEffect } from 'react';

const Map = ({ mapPosition, mapImage }) => {
  const [frame, setFrame] = useState(1);

  const updateMapFrame = () => {
    setFrame((prevFrame) => (prevFrame % 4) + 1);
  };

  useEffect(() => {
    const frameInterval = 100;

    const mainInterval = setInterval(() => {
      updateMapFrame();
    }, frameInterval);

    return () => {
      clearInterval(mainInterval);
    };
  }, []);

  const bgPositionMap = {
    1: '0%',
    2: '33.33%',
    3: '66.66%',
    4: '100%',
  };

  const styles = {
    top: `${-mapPosition.y}px`,
    left: `${-mapPosition.x}px`,
    objectPosition: bgPositionMap[frame],
  };

  return <img src={mapImage} className="map-container" style={styles}></img>;
};

export default Map;
