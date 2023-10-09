// Battle.jsx
import React from "react";
import playerImage from "/src/assets/barbarian-test-3.png"; // Adjust the path to your player image
import enemyImage from "/src/assets/enemy-test-4.png"; // Adjust the path to your enemy image
import { opponentStats, playerStats } from "/src/shared";
import { PlayerSummary } from "./PlayerSummary";
import { useState } from "react";

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

  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);

  const handleEnemySmackClick = () => {
    if (opponentHealth > 0) {
      setOpponentHealth(opponentHealth - 1);
      console.log("ENEMY SMACK BUTTON:", opponentHealth);
    }
  };

  const handlePlayerSmackClick = () => {
    if (playerHealth > 0) {
      setPlayerHealth(playerHealth - 1);
      console.log("PLAYER SMACK BUTTON: ", playerHealth);
    }
  };

  return (
    <div className='battle-container' style={containerStyle}>
      <h1
        style={{
          textShadow: "2px 2px 2px black",
          marginBottom: "300px",
        }}
      >
        {opponentStats.name} VS {playerStats.name}
      </h1>
      <div className='overlay' style={overlayPlayer}></div>
      <div className='overlay' style={overlayEnemy}></div>
      <div
        className='battle-options'
        style={{
          border: "2px solid black",
          position: "absolute",
          bottom: "0",
          textAlign: "center",
        }}
      >
        <div className='enemy-summary'>
          <div className='summary'>
            <PlayerSummary
              value={opponentHealth}
              maxValue={opponentStats.maxHealth}
              name={opponentStats.name}
              level={opponentStats.level}
              onSmackClick={handlePlayerSmackClick}
            />
            <button className='fight-button' onClick={handleEnemySmackClick}>
              SMACK!
            </button>
          </div>
        </div>
        <div className='player-summary'>
          <div className='summary'>
            <PlayerSummary
              main
              value={playerHealth}
              maxHealth={playerStats.maxHealth}
              name={playerStats.name}
              level={playerStats.level}
              onSmackClick={handleEnemySmackClick}
            />
            <button className='fight-button' onClick={handlePlayerSmackClick}>
              SMACK!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battle;
