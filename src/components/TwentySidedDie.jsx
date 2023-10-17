import React, { useEffect, useState, useContext } from 'react';
import GameContext from './GameContext';
import '/src/styles/TwentySidedDie.css';

const TwentySidedDie = ({
  typeOfCheck,
  charStats,
}) => {
  // variable, declaration and assigment
  const [diceRoll, setDiceRoll] = useState(null);
  const [hasRolled, setHasRolled] = useState(false)

  const {
    // charStats,
    setOutcome,
    outcome,
    setMakeCheck,
  } = useContext(GameContext);

  // useState pulls an array with 2 things from it. State variable & updater function
  // null value being passed thru is a defualt value for dice roll
  const difficultyScore = 11

  useEffect(() => {
    const newOutcome =
      diceRoll + charStats[`${typeOfCheck}_mod`] - difficultyScore >= 0
        ? 'You passed'
        : 'You failed';
    setOutcome(newOutcome);
  }, [diceRoll, typeOfCheck, difficultyScore]);

  const rollDie = () => {
    if (!hasRolled) {const newRoll = Math.floor(Math.random() * 20) + 1;
    setDiceRoll(newRoll);
  setHasRolled(true)
  }
    // calling the state setter function and giving it a new value
  };

const handleContinue = () => {setMakeCheck(false)}

  return (
    <div
      className="dice-container"
      style={{
        textAlign: 'center',
        marginTop: '50px',
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
        {diceRoll && <div className="rolled-number">{diceRoll}</div>}
      </div>
      <div>{diceRoll && <div className="rolled-outcome">{outcome}</div>}
      </div>
      <button onClick={handleContinue} disabled={!hasRolled}>
        Continue
      </button>
    </div>
  );
};

export default TwentySidedDie;
