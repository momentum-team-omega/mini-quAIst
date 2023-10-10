import React from 'react';

const Map = ({ mapPosition, mapImage }) => {
  const styles = {
    top: `${-mapPosition.y}px`,
    left: `${-mapPosition.x}px`,
  };

  return <img src={mapImage} className="map-container" style={styles}></img>;
};

export default Map;
