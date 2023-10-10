import React, { useState } from "react";

const TwentySidedDie = () => {
  const [diceRoll, setDiceRoll] = useState(null);

  const rollDie = () => {
    const newRoll = Math.floor(Math.random() * 20) +1;
    setDiceRoll(newRoll);
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

