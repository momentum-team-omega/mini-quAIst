import React, { useState } from "react";

const TwentySidedDie = () => {
  // variable, declaration and assigment
  const [diceRoll, setDiceRoll] = useState(null);
  const [outcome, setOutcome] = useState("");
// useState pulls an array with 2 things from it. State variable & updater function
// null value being passed thru is a defualt value for dice roll


const rollDie = (event) => {
  console.log(event)
  const newRoll = Math.floor(Math.random() * 20) +1;
  setDiceRoll(newRoll);
  // calling the state setter function and giving it a new value
if (newRoll + modifiers[typeOfCheck] - difficultyScore >= 0) {
    setOutcome("You passed");
  } else {
    setOutcome("You failed")
  }
};

// examples of props
const modifiers = 
{
  "dexterity": 2,
  "strength": 1,
  "intelligence": 4,
  "constitution": -2,
  "wisdom": -1,
  "charisma": 0
}

const difficultyScore = 11

const typeOfCheck = 'wisdom'

  return (
    <div className="dice-container" 
    style={{
      textAlign: 'center', 
      marginTop: '50px'
      }}>
      <h1>Ability Check</h1>
      <div>Difficulty Score {difficultyScore}
      </div>
      <div>
        Modifiers {modifiers[typeOfCheck]}
      </div>
      <div>
        Dice Roll {diceRoll} + Modifiers {modifiers[typeOfCheck]} - Difficulty Score {difficultyScore}
      </div>
      <div className="twenty-sided-die" 
      style={{
        width: '100px',
          height: '100px',
          border: '2px solid #000000',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'transform 0.5s ease-in-out'
      }} 
      onClick={rollDie}>{diceRoll !== null && <div className="rolled-number">
        {diceRoll}</div>}
      </div>
      <div>
      {diceRoll !== null && <div className="rolled-number">{outcome}</div>}
      </div>
    </div>
  );
};

export default TwentySidedDie;

