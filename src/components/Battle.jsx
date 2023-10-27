import React, { useContext, useState, useEffect, useRef } from 'react';
import { trollMapCollisions2 } from 'utilities/collisionsData.js';
import Menu from 'components/menu/Menu';
import Inventory from 'components/menu/Inventory';
import playerImage from '/src/assets/battle-assets/barbarian-test-3.png';
import mageGirl from '/src/assets/battle-assets/mage-girl.png';
import barbGirl from '/src/assets/battle-assets/barb-girl.png';
import rogueGirl from '/src/assets/battle-assets/rogue-girl.png';
import redTroll from '/src/assets/battle-assets/red-troll.png';
import enemyImage from '/src/assets/battle-assets/mage-placeholder-transp.png';
import battlebackground from '/src/assets/battle-assets/720p-battle-background.png';
import { opponentStats, playerStats } from '/src/shared';
import { PlayerSummary } from './PlayerSummary';
import '/src/styles/Battle.css';
import GameContext from 'contexts/GameContext';

const Battle = ({}) => {
  const {
    setCurrentMap,
    setScene,
    currentNPC,
    charStats,
    setCheckpoints,
    npcs,
    setNpcs,
    menu,
    inventory,
  } = useContext(GameContext);
  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
  const [playerHealth, setPlayerHealth] = useState(charStats.health);
  const [showHealthIndicator, setShowHealthIndicator] = useState(false);
  const [healthIndicatorMessage, setHealthIndicatorMessage] = useState('');
  const [showEnemyHealthIndicator, setShowEnemyHealthIndicator] =
    useState(false);
  const [enemyHealthIndicatorMessage, setEnemyHealthIndicatorMessage] =
    useState('');
  const [indicatorColor, setIndicatorColor] = useState('');
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
  const [specialMovesUsed, setSpecialMovesUsed] = useState(false);
  const [gameOutcome, setGameOutcome] = useState(null);
  const [areOptionsDisabled, setAreOptionsDisabled] = useState(false);

  const containerStyle = {
    background: `url(${battlebackground})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const overlayPlayer = {
    width: '150px',
    height: '150px',
    position: 'absolute',
    bottom: '25px',
    left: '150px',
    backgroundSize: 'cover',
  };

  if (charStats.charClass === 'mage') {
    overlayPlayer.backgroundImage = `url(${mageGirl})`;
  } else if (charStats.charClass === 'barb') {
    overlayPlayer.backgroundImage = `url(${barbGirl})`;
  } else if (charStats.charClass === 'rogue') {
    overlayPlayer.backgroundImage = `url(${rogueGirl})`;
  } else {
    overlayPlayer.backgroundImage = `url(${playerImage})`;
  }

  const overlayEnemy = {
    width: '200px',
    height: '200px',
    position: 'absolute',
    bottom: '30px',
    right: '150px',
    backgroundSize: 'cover',
  };

  if (currentNPC === 'troll') {
    overlayEnemy.backgroundImage = `url(${redTroll})`;
  } else {
    overlayEnemy.backgroundImage = `url(${enemyImage})`;
  }

  const handlePlayerMove = (action) => {
    if (isLocked || someoneDied || areOptionsDisabled) return;

    setAreOptionsDisabled(true);

    setTimeout(() => {
      setAreOptionsDisabled(false);
    }, 5000);

    if (isPlayerTurn) {
      setIsLocked(true);

      switch (action) {
        case 'smack':
          handlePlayerSmackOpponent();
          break;
        case 'chill':
          handleChill();
          break;
        case 'special':
          handleSpecialMoves();
          break;
        default:
          break;
      }

      setIsPlayerTurn(false);
    }
  };

  useEffect(() => {
    if (!isPlayerTurn) {
      // Delay opponent's turn to make it feel more natural
      opponentMoveTimeoutRef.current = setTimeout(() => {
        handleOpponentMove();
      }, 1000);
    }
  }, [isPlayerTurn]);

  // Add a useEffect to track the animation state
  useEffect(() => {
    const animationDuration = 1700; // Adjust this value to match your animation duration
    setTimeout(() => {}, animationDuration);
  }, []);

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
      }, 1000);
    }
  }, [isPlayerTurn]);

  const handleHealthChange = (newValue, source) => {
    const sign = source === 'chill' ? '+' : '-';
    const textColor = source === 'chill' ? '#35c743' : '#bc1f07';

    setHealthIndicatorMessage(
      `Health: ${sign}${Math.abs(newValue - playerHealth)}`
    );
    setShowHealthIndicator(true);
    setIndicatorColor(textColor);

    setIsChillSource(source === 'chill');

    // If the source is "smack," set the player flicker state to true
    if (source === 'smack') {
      setPlayerFlicker(true);
    }

    // Delay the health change and flicker by 1 second
    setTimeout(() => {
      setShowHealthIndicator(false);
      setIsChillSource(false);

      // If the source is "smack," set the player flicker state back to false
      if (source === 'smack') {
        setPlayerFlicker(false);
      }
    }, 1700);

    setPlayerHealth(newValue);
  };

  const handleEnemyHealthChange = (newValue, source) => {
    const sign = source === 'smack' ? '-' : '+';
    setEnemyHealthIndicatorMessage(
      `Health: ${sign}${Math.abs(newValue - opponentHealth)}`
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

      handleEnemyHealthChange(opponentHealth - damageToOpponent, 'smack');
      if (opponentHealth - damageToOpponent <= 0) {
        setGameOutcome('win');
        setSomeoneDied(true);
      }
    }
  };

  const handleOpponentSmackPlayer = () => {
    // 50% of 2 damage and 50% of 5-15 damage
    if (playerHealth > 0) {
      // Base damage
      let damageToPlayer = 2;

      // 50% chance to roll d10 and add to base damage
      if (Math.random() < 0.5) {
        damageToPlayer += rollD10() + 3;
      }

      const newPlayerHealth = playerHealth - damageToPlayer;

      setIsPaused(true);

      setTimeout(() => {
        setIsPaused(false);
        if (!someoneDied) {
          handleHealthChange(Math.max(newPlayerHealth, 0), 'smack');
        }
      }, 1700);

      if (newPlayerHealth <= 0) {
        setGameOutcome('loss');
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

      handleHealthChange(newPlayerHealth, 'chill');

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
      handleEnemyHealthChange(opponentHealth - damageToOpponent, 'smack');
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
    if (playerHealth > 0) {
      setCheckpoints((prev) => ({
        ...prev,
        4: true,
        5: true,
      }));
      const updatedNpcs = npcs.map((npc) => {
        if (npc.name === 'troll') {
          return {
            ...npc,
            alive: false,
          };
        }
        return npc;
      });
      setNpcs(updatedNpcs);
      setCurrentMap('trollMap');
      setScene('endChapter1');
    } else {
      setScene('death');
    }
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
    setHealthIndicatorMessage('');
    setShowEnemyHealthIndicator(false);
    setEnemyHealthIndicatorMessage('');
    setSpecialMovesUsed(false);
  };

  return (
    <div className="battle-container" style={containerStyle}>
      {menu && !inventory && <Menu />}
      {!menu && inventory && <Inventory />}
      {!menu && !inventory && (
        <>
          {someoneDied && (
            <div
              className={`outcome-box ${
                gameOutcome === 'loss' ? 'loss-text' : 'win-text'
              }`}
            >
              {gameOutcome === 'loss' ? 'YOU DIED!' : 'YOU WIN!'}
              <button className="you-died-buttons" onClick={handleContinue}>
                Continue
              </button>
            </div>
          )}

          <h1
            className="battle-intro-text"
            style={{
              textShadow: '2px 2px 2px black',
            }}
          >
            {charStats.name} vs {opponentStats.name}
          </h1>

          <div
            className={`overlay ${
              isChillSource
                ? 'chill-animation'
                : playerFlicker
                ? 'flicker-animation'
                : ''
            }`}
            style={overlayPlayer}
          ></div>
          {!someoneDied && !areOptionsDisabled && (
            <div
              className="button-box"
              style={{ display: isPlayerTurn || isLocked ? 'flex' : 'none' }}
            >
              <button
                ref={smackButtonRef}
                className="fight-button"
                onClick={() => handlePlayerMove('smack')}
                disabled={areOptionsDisabled}
              >
                <p className="fight-text">
                  {charStats.charClass === 'barb'
                    ? 'Swing Axe!'
                    : charStats.charClass === 'mage'
                    ? 'Swing Staff!'
                    : charStats.charClass === 'rogue'
                    ? 'Loose an Arrow!'
                    : 'Attack'}
                </p>
              </button>
              <button
                ref={chillButtonRef}
                className="chill-button"
                onClick={() => handlePlayerMove('chill')}
                disabled={areOptionsDisabled}
              >
                <p className="chill-text">Potion ({healingPotions})</p>
              </button>

              <button
                className="special-move-button"
                onClick={() => handlePlayerMove('special')}
                disabled={areOptionsDisabled} // Disable when it's not the player's turn
              >
                <p className="special-text">
                  {charStats.charClass === 'barb'
                    ? 'RAGE'
                    : charStats.charClass === 'mage'
                    ? 'FIREBALL'
                    : charStats.charClass === 'rogue'
                    ? 'SNEAK ATTACK'
                    : 'Special Move'}{' '}
                  {specialMovesUsed ? '(0)' : '(1)'}
                </p>
              </button>
            </div>
          )}
          <div
            className={`overlay ${enemyFlicker ? 'flicker-animation' : ''}`}
            style={overlayEnemy}
          ></div>
          {showEnemyHealthIndicator && (
            <div className="enemy-health-change-indicator">
              <span style={{ color: indicatorColor }}>
                {enemyHealthIndicatorMessage}
              </span>
            </div>
          )}
          <div
            className="battle-options"
            style={{
              position: 'absolute',
              bottom: '200px',
              textAlign: 'center',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <div className="player-container">
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
            <div className="enemy-container">
              <div className="summary">
                <PlayerSummary
                  value={opponentHealth}
                  maxValue={opponentStats.maxHealth}
                  name={opponentStats.name}
                  level={opponentStats.level}
                />
              </div>
            </div>
          </div>
          {showHealthIndicator && (
            <div className="health-change-indicator">
              <span style={{ color: indicatorColor }}>
                {healthIndicatorMessage}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Battle;
