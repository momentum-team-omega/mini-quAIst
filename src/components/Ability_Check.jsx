import React, { useState } from "react";

const TwentySidedDie = () => {
  // variable, declaration and assigment
  const [diceRoll, setDiceRoll] = useState(null);
// useState pulls an array with 2 things from it. State variable & updater function
// null value being passed thru is a defualt value for dice roll
  const rollDie = (event) => {
    console.log(event)
    const newRoll = Math.floor(Math.random() * 20) +1;
    setDiceRoll(newRoll);
    // calling the state setter function and giving it a new value
  };

  return (
    <div className="dice-container">
      <h1>Ability Check</h1>
      <div className="twenty-sided-die" onClick={rollDie}>{diceRoll !== null && <div className="rolled-number">{diceRoll}</div>}
      </div>
    </div>
  );
};

export default TwentySidedDie;

