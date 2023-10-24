import React, { useEffect, useState, useContext } from 'react';
import GameContext from './GameContext';
import '/src/styles/TwentySidedDie.css';

const TwentySidedDie = ({ typeOfCheck, onRollComplete }) => {
  // variable, declaration and assigment
  const [diceRoll, setDiceRoll] = useState(null);
  const [hasRolled, setHasRolled] = useState(false);
  // useState pulls an array with 2 things from it. State variable & updater function
  // null value being passed thru is a defualt value for dice roll

  const { charStats, setOutcome, outcome, setMakeCheck } =
    useContext(GameContext);

  const difficultyScore = 11;

  useEffect(() => {
    const newOutcome =
      diceRoll + charStats[`${typeOfCheck}_mod`] - difficultyScore >= 0
        ? 'passed'
        : 'failed';
    setOutcome(newOutcome);
  }, [diceRoll, typeOfCheck, difficultyScore]);

  const rollDie = () => {
    if (!hasRolled) {
      const newRoll = Math.floor(Math.random() * 20) + 1;
      setDiceRoll(newRoll);
      setHasRolled(true);
    }
    // calling the state setter function and giving it a new value
  };

  const handleContinue = () => {
    if (onRollComplete) {
      onRollComplete(outcome); // passing the outcome ('passed' or 'failed') to the callback
    }
    setMakeCheck(false);
  };

  return (
    <div
      className="dice-container"
      style={{
        textAlign: 'center',
        marginTop: '175px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* <h1>Ability Check</h1> */}
      <div className="dice-text">Difficulty Score {difficultyScore}</div>
      <div className="dice-text">
        Modifiers {charStats[`${typeOfCheck}_mod`] || 0}
      </div>
      <div className="dice-text">
        Dice Roll {diceRoll} + Modifiers {charStats[`${typeOfCheck}_mod`]} -
        Difficulty Score {difficultyScore}
      </div>
      <div
        className="twenty-sided-die"
        style={{
          width: '100px',
          height: '100px',
          border: '2px solid #000000',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'transform 0.5s ease-in-out',
          backgroundColor: 'white',
          color: 'black',
        }}
        onClick={rollDie}
      >
        {diceRoll === null ? (
          <div className="placeholder">?</div>
        ) : (
          <div className="rolled-number">{diceRoll}</div>
        )}
      </div>
      <div>
        {diceRoll && <div className="rolled-outcome">{outcome}</div>}
      </div>
      <button
        className="continue-button"
        onClick={handleContinue}
        disabled={!hasRolled}
      >
        Continue
      </button>
    </div>
  );
        };

export default TwentySidedDie;
