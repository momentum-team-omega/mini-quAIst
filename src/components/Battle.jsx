// Battle.jsx
import React, { useState, useEffect } from "react";
import playerImage from "/src/assets/barbarian-test-3.png";
import enemyImage from "/src/assets/mage-placeholder-transp.png";
import { opponentStats, playerStats } from "/src/shared";
import { PlayerSummary } from "./PlayerSummary";

const Battle = () => {
  const containerStyle = {
    background: `url(/src/assets/720p-battle-background.png)`,
    backgroundSize: "cover",
    width: "1280px",
    height: "720px",
    position: "relative",
  };

  const overlayPlayer = {
    width: "200px",
    height: "200px",
    position: "absolute",
    bottom: "30px",
    right: "150px",
    backgroundImage: `url(${playerImage})`,
    backgroundSize: "cover",
  };

  const overlayEnemy = {
    width: "200px",
    height: "200px",
    position: "absolute",
    bottom: "30px",
    left: "150px",
    backgroundImage: `url(${enemyImage})`,
    backgroundSize: "cover",
  };

  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
  const [showHealthIndicator, setShowHealthIndicator] = useState(false);
  const [healthIndicatorMessage, setHealthIndicatorMessage] = useState("");
  const [showEnemyHealthIndicator, setShowEnemyHealthIndicator] =
    useState(false);
  const [enemyHealthIndicatorMessage, setEnemyHealthIndicatorMessage] =
    useState("");
  const [someoneDied, setSomeoneDied] = useState(false);
  const [playerFlicker, setPlayerFlicker] = useState(false);
  const [enemyFlicker, setEnemyFlicker] = useState(false);

  const handleHealthChange = (newValue, source) => {
    const sign = source === "chill" ? "+" : "-";
    setHealthIndicatorMessage(
      `Health: ${sign}${Math.abs(newValue - playerHealth)}`
    );
    setShowHealthIndicator(true);

    setPlayerFlicker(true);

    // TIMER TIMER TIMER TIMER TIMER
    setTimeout(() => {
      setShowHealthIndicator(false);
      setPlayerFlicker(false);
    }, 3000);
    setPlayerHealth(newValue);
  };

  const handleEnemyHealthChange = (newValue, source) => {
    const sign = source === "smack" ? "-" : "+";
    setEnemyHealthIndicatorMessage(
      `Enemy Health: ${sign}${Math.abs(newValue - opponentHealth)}`
    );
    setShowEnemyHealthIndicator(true);

    setEnemyFlicker(true);

    setTimeout(() => {
      setShowEnemyHealthIndicator(false);
      setEnemyFlicker(false);
    }, 3000);
    setOpponentHealth(newValue);
  };

  const handleEnemySmackClick = (newValue, source) => {
    if (opponentHealth && playerHealth > 0) {
      const playerDamage = playerStats.attack - opponentStats.defense;
      console.log("playerDamage", playerDamage);
      const opponentDamage = opponentStats.attack - playerStats.defense;
      console.log("opponentDamage", opponentDamage);

      const newPlayerHealth = playerHealth - opponentDamage;
      const newOpponentHealth = opponentHealth - playerDamage;

      handleEnemyHealthChange(newOpponentHealth, "smack");
      handleHealthChange(newPlayerHealth, "smack");

      setOpponentHealth(newOpponentHealth);

      console.log("ENEMY SMACK BUTTON:", newOpponentHealth);
      console.log("Player Hit!: ", newPlayerHealth);

      if (newPlayerHealth <= 0 || newOpponentHealth <= 0) {
        setSomeoneDied(true);
      }
    }
  };

  const handleChill = () => {
    if (opponentHealth > 0) {
      const newPlayerHealth = playerHealth + 1;
      handleHealthChange(newPlayerHealth, "chill");
      console.log("CHILL!: ", newPlayerHealth);
    }
  };

  useEffect(() => {
    return () => {
      setShowHealthIndicator(false);
    };
  }, []);

  return (
    <div className='battle-container' style={containerStyle}>
      {someoneDied && (
        <div className='someone-died-box'>
          {playerHealth <= 0 ? "YOU DIED!" : "YOU WIN!"}
        </div>
      )}
      <h1
        style={{
          textShadow: "2px 2px 2px black",
          marginBottom: "300px",
        }}
      >
        {opponentStats.name} VS {playerStats.name}
      </h1>
      <div
        className={`overlay ${playerFlicker ? "flicker-animation" : ""}`}
        style={overlayPlayer}
      ></div>
      <div
        className={`overlay ${enemyFlicker ? "flicker-animation" : ""}`}
        style={overlayEnemy}
      ></div>
      {showEnemyHealthIndicator && (
        <div className='enemy-health-change-indicator'>
          {enemyHealthIndicatorMessage}
        </div>
      )}
      <div
        className='battle-options'
        style={{
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
            />
            <div className='button-box'>
              <button className='fight-button' onClick={handleEnemySmackClick}>
                SMACK!
              </button>
              <button className='chill-button' onClick={handleChill}>
                CHILL!
              </button>
            </div>
          </div>
        </div>
        <div className='player-summary'>
          <div className='summary'>
            <PlayerSummary
              main
              value={playerHealth}
              maxValue={playerStats.maxHealth}
              name={playerStats.name}
              level={playerStats.level}
              onSmackClick={handleEnemySmackClick}
            />
          </div>
        </div>
      </div>
      {showHealthIndicator && (
        <div className='health-change-indicator'>{healthIndicatorMessage}</div>
      )}
    </div>
  );
};

export default Battle;
