import React, { useState, useEffect } from "react";
import playerImage from "/src/assets/barbarian-test-3.png";
import enemyImage from "/src/assets/mage-placeholder-transp.png";
import battlebackground from "/src/assets/720p-battle-background.png";
import { opponentStats, playerStats } from "/src/shared";
import { PlayerSummary } from "./PlayerSummary";

const Battle = () => {
  const containerStyle = {
    background: `url(${battlebackground})`,
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
  const [isPaused, setIsPaused] = useState(false);
  const [isChillSource, setIsChillSource] = useState(false);

  const handleHealthChange = (newValue, source) => {
    const sign = source === "chill" ? "+" : "-";
    setHealthIndicatorMessage(
      `Health: ${sign}${Math.abs(newValue - playerHealth)}`
    );
    setShowHealthIndicator(true);

    setIsChillSource(source === "chill");

    // If the source is "smack," set the player flicker state to true
    if (source === "smack") {
      setPlayerFlicker(true);
    }

    // Delay the health change and flicker by 1 second
    setTimeout(() => {
      setShowHealthIndicator(false);
      setIsChillSource(false);

      // If the source is "smack," set the player flicker state back to false
      if (source === "smack") {
        setPlayerFlicker(false);
      }
    }, 1700);

    setPlayerHealth(newValue);
  };

  const handleEnemyHealthChange = (newValue, source) => {
    const sign = source === "smack" ? "-" : "+";
    setEnemyHealthIndicatorMessage(
      `Enemy Health: ${sign}${Math.abs(newValue - opponentHealth)}`
    );
    setShowEnemyHealthIndicator(true);
    console.log("1st source", source);

    setEnemyFlicker(true);

    setTimeout(() => {
      setShowEnemyHealthIndicator(false);
      setEnemyFlicker(false);
    }, 1700);
    setOpponentHealth(newValue);
  };

  const handleEnemySmackClick = () => {
    if (opponentHealth && playerHealth > 0) {
      const playerDamage = playerStats.attack - opponentStats.defense;
      console.log("playerDamage", playerDamage);
      const opponentDamage = opponentStats.attack - playerStats.defense;
      console.log("opponentDamage", opponentDamage);

      const newPlayerHealth = playerHealth - opponentDamage;

      setIsPaused(true);

      setTimeout(() => {
        setIsPaused(false);

        // Trigger the health change and flicker
        handleHealthChange(newPlayerHealth, "smack");
      }, 1700);

      handleEnemyHealthChange(opponentHealth - playerDamage, "smack");

      if (newPlayerHealth <= 0 || opponentHealth - playerDamage <= 0) {
        setSomeoneDied(true);
      }
    }
  };

  const handleChill = () => {
    if (opponentHealth > 0) {
      const newPlayerHealth = playerHealth + 1;

      // Trigger the health change
      handleHealthChange(newPlayerHealth, "chill");
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
        className={`overlay ${
          isChillSource
            ? "chill-animation"
            : playerFlicker
            ? "flicker-animation"
            : ""
        }`}
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
