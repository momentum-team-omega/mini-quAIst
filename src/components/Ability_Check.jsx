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
  if (newRoll - difficultyScore >= 0) {
    setOutcome("You passed");
  } else {
    setOutcome("You failed")
  }
};

// examples of props
// modifiers = 
// {
//   "dexterity": 2,
//   "strength": 1,
//   "intelligence": 4,
//   "constitution": -2,
//   "wisdom": -1,
//   "charisma": 0
// }

const difficultyScore = 11


  //type of check
  // "intelligence"

  return (
    <div className="dice-container">
      <h1>Ability Check</h1>
      <div>Difficulty Score {difficultyScore}
      </div>
      {/* <div>Modifiers {modifiers}
      </div> */}
      <div className="twenty-sided-die" onClick={rollDie}>{diceRoll !== null && <div className="rolled-number">{diceRoll}</div>}
      </div>
      <div>
      {diceRoll !== null && <div className="rolled-number">{outcome}</div>}
      </div>
    </div>
  );
};

export default TwentySidedDie;

