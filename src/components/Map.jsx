import React from 'react';
import backgroundImg from 'assets/example-map-zoom.png';

const Map = ({ position }) => {
  const styles = {
    top: `${-position.y}px`,
    left: `${-position.x}px`,
  };

  return (
    <img src={backgroundImg} className="map-container" style={styles}></img>
  );
};

export default Map;
