import React, { useContext, useState, useEffect, useRef } from "react";
import playerImage from "/src/assets/battle-assets/barbarian-test-3.png";
import enemyImage from "/src/assets/battle-assets/mage-placeholder-transp.png";
import battlebackground from "/src/assets/battle-assets/720p-battle-background.png";
import { opponentStats, playerStats } from "/src/shared";
import { PlayerSummary } from "./PlayerSummary";
import "/src/styles/Battle.css";
import GameContext from "./GameContext";

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

  const { setScene, currentNPC, charStats } = useContext(GameContext);
  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
  const [playerHealth, setPlayerHealth] = useState(charStats.health);
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
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const smackButtonRef = useRef(null);
  const chillButtonRef = useRef(null);
  const opponentMoveTimeoutRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const [healingPotions, setHealingPotions] = useState(2);
  const [specialMoves, setSpecialMoves] = useState(1);
  const [specialMovesUsed, setSpecialMovesUsed] = useState(false);
  const selectedClass = "rogue";

  // console.log(charStats)

  const handlePlayerMove = (action) => {
    if (isLocked) return;

    // Clear any existing opponent move timeouts
    if (opponentMoveTimeoutRef.current) {
      clearTimeout(opponentMoveTimeoutRef.current);
    }
    setIsLocked(true); // Lock the actions immediately.

    if (smackButtonRef.current) smackButtonRef.current.disabled = true;
    if (chillButtonRef.current) chillButtonRef.current.disabled = true;

    if (isPlayerTurn && !someoneDied) {
      switch (action) {
        case "smack":
          handlePlayerSmackOpponent();
          break;
        case "chill":
          handleChill();
          break;
        default:
          break;
      }
      setIsPlayerTurn(false); // switch turn to opponent after player makes a move
    }
  };

  const handleOpponentMove = () => {
    
    // This can be the AI logic or another player's action
    if (!isPlayerTurn && !someoneDied) {
      // Example: Just smacks every time for simplicity
      handleOpponentSmackPlayer();
      setIsPlayerTurn(true);
      if (smackButtonRef.current) smackButtonRef.current.disabled = false;
      if (chillButtonRef.current) chillButtonRef.current.disabled = false;

      setIsLocked(false); // Unlock the actions after opponent's move.
      
    }
  };

  useEffect(() => {
    if (!isPlayerTurn) {
      // Delay opponent's turn to make it feel more natural
      opponentMoveTimeoutRef.current = setTimeout(() => {
        handleOpponentMove();
      }, 1700);
    }
  }, [isPlayerTurn]);

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
    

    setEnemyFlicker(true);

    setTimeout(() => {
      setShowEnemyHealthIndicator(false);
      setEnemyFlicker(false);
    }, 1700);
    setOpponentHealth(newValue);
  };

  const rollD10 = () => {
    return Math.floor(Math.random() * 10);
  };

  const handlePlayerSmackOpponent = () => {
    if (opponentHealth > 0) {
      const damageToOpponent = rollD10() + 3;
      
      handleEnemyHealthChange(opponentHealth - damageToOpponent, "smack");
      if (opponentHealth - damageToOpponent <= 0) {
        setSomeoneDied(true);
      }
    }
  };

  const handleOpponentSmackPlayer = () => {
    if (playerHealth > 0) {
      // Base damage
      let damageToPlayer = 2;

      // 50% chance to roll d10 and add to base damage
      if (Math.random() < 0.5) {
        damageToPlayer += rollD10(); // Assuming rollD10 is in the same scope or imported
      }

      const newPlayerHealth = playerHealth - damageToPlayer;

      setIsPaused(true);

      setTimeout(() => {
        setIsPaused(false);
        if (!someoneDied) {
          handleHealthChange(newPlayerHealth, "smack");
        }
      }, 1700);

      if (newPlayerHealth <= 0) {
        setSomeoneDied(true);
      }
    }
  };

  const handleChill = () => {
    if (playerHealth > 0 && healingPotions > 0) {
      const healthLost = charStats.health - playerHealth;
      const healthToRegain = Math.ceil(healthLost / 2);

      const newPlayerHealth = Math.min(
        playerHealth + healthToRegain,
        charStats.health
      );

      handleHealthChange(newPlayerHealth, "chill");

      // Decrease the number of available potions
      setHealingPotions(healingPotions - 1);
    }
  };

  const handleSpecialMoves = () => {
    if (specialMovesUsed || isLocked) {
      return;
    }

    if (playerHealth > 0) {
      const damageToOpponent = (rollD10() + 3) * 2; // lets go!
      handleEnemyHealthChange(opponentHealth - damageToOpponent, "smack");
      if (opponentHealth - damageToOpponent <= 0) {
        setSomeoneDied(true);
      }

      setSpecialMovesUsed(true);
      setIsPlayerTurn(false);
    }
  };

  useEffect(() => {
    return () => {
      setShowHealthIndicator(false);
    };
  }, []);

  const handleContinue = () => {
    setScene("overworld");
  };

  const handleTryAgain = () => {
    // Reset health
    setPlayerHealth(charStats.health);
    setOpponentHealth(opponentStats.maxHealth);

    // Reset game state
    setSomeoneDied(false); // Reset end game state
    setIsLocked(false); // Unlock game actions
    setIsPlayerTurn(true); // Give turn to player

    // Clear any lingering opponent move timeouts
    if (opponentMoveTimeoutRef.current) {
      clearTimeout(opponentMoveTimeoutRef.current);
    }

    // Re-enable the action buttons
    if (smackButtonRef.current) smackButtonRef.current.disabled = false;
    if (chillButtonRef.current) chillButtonRef.current.disabled = false;

    // Reset health indicators and related states
    setHealingPotions(2);
    setShowHealthIndicator(false);
    setHealthIndicatorMessage("");
    setShowEnemyHealthIndicator(false);
    setEnemyHealthIndicatorMessage("");
    setSpecialMovesUsed(false);
  };

  return (
    <div className="battle-container" style={containerStyle}>
      {someoneDied && (
        <div className="someone-died-box">
          {playerHealth <= 0 ? "YOU DIED!" : "YOU WIN!"}
          <button onClick={handleContinue}>Continue</button>
          <button onClick={handleTryAgain}>Try Again</button>
        </div>
      )}
      <h1
        style={{
          textShadow: "2px 2px 2px black",
          marginBottom: "300px",
        }}
      >
        {opponentStats.name} VS {charStats.name}
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
        <div className="enemy-health-change-indicator">
          {enemyHealthIndicatorMessage}
        </div>
      )}
      <div
        className="battle-options"
        style={{
          position: "absolute",
          bottom: "0",
          textAlign: "center",
        }}
      >
        <div className="enemy-summary">
          <div className="summary">
            <PlayerSummary
              value={opponentHealth}
              maxValue={opponentStats.maxHealth}
              name={opponentStats.name}
              level={opponentStats.level}
            />
            <div className="button-box">
              <button
                ref={smackButtonRef}
                className="fight-button"
                onClick={() => handlePlayerMove("smack")}
                disabled={!isPlayerTurn}
              >
                {charStats.charClass === "barb"
                  ? "Swing Axe!"
                  : charStats.charClass === "mage"
                  ? "Swing Staff!"
                  : charStats.charClass === "rogue"
                  ? "Loose an Arrow!"
                  : "Attack"}
              </button>
              <button
                ref={chillButtonRef}
                className="chill-button"
                onClick={() => handlePlayerMove("chill")}
                disabled={!isPlayerTurn || healingPotions === 0}
              >
                HEALING POTION ({healingPotions} left)
              </button>
              <button
                className="special-move-button"
                onClick={handleSpecialMoves}
                disabled={specialMovesUsed || isLocked}
              >
                {charStats.charClass === "barb"
                  ? "RAGE"
                  : charStats.charClass === "mage"
                  ? "FIREBALL"
                  : charStats.charClass === "rogue"
                  ? "SNEAK ATTACK"
                  : "Special Move"} {specialMovesUsed ? "(0)" : "(1)"}
              </button>
            </div>
          </div>
        </div>
        <div className="player-summary">
          <div className="summary">
            <PlayerSummary
              main
              value={playerHealth}
              maxValue={charStats.health}
              name={charStats.name}
              level={charStats.level}
              onSmackClick={handleOpponentMove}
            />
          </div>
        </div>
      </div>
      {showHealthIndicator && (
        <div className="health-change-indicator">{healthIndicatorMessage}</div>
      )}
    </div>
  );
};

export default Battle;
