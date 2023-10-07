import React from "react";
import playerImage from "/src/assets/barbarian-test-3.png"; // Adjust the path to your player image
import enemyImage from "/src/assets/enemy-test-4.png"; // Adjust the path to your enemy image

const Battle = () => {
  const containerStyle = {
    background: `url('/src/assets/battle-background-road-test.png')`, // Adjust the path to your background image
    backgroundSize: "cover",
    width: "1000px",
    height: "1000px",
    position: "relative",
  };

  const overlayPlayer = {
    width: "200px",
    height: "200px",
    position: "absolute",
    bottom: "100px",
    right: "100px",
    backgroundImage: `url(${playerImage})`,
    backgroundSize: "cover",
  };

  const overlayEnemy = {
    width: "200px",
    height: "200px",
    position: "absolute",
    bottom: "100px",
    left: "100px",
    backgroundImage: `url(${enemyImage})`,
    backgroundSize: "cover",
  };

  return (
    <div className='game-container' style={containerStyle}>
      <h1>Battle</h1>
      <div className='overlay' style={overlayPlayer}></div>
      <div className='overlay' style={overlayEnemy}></div>
    </div>
  );
};

export default Battle;
