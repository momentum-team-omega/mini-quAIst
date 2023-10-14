import React from 'react';

const Foreground = ({ mapPosition, foreImage }) => {
  const styles = {
    top: `${-mapPosition.y}px`,
    left: `${-mapPosition.x}px`,
  };

  return <img src={foreImage} className="fore-container" style={styles}></img>;
};

export default Foreground;
