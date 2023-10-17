import React, { useEffect, useState, useContext } from "react";
import GameContext from './GameContext';


const TwentySidedDie = ({ typeOfCheck, difficultyScore, charStats}) => {
  // variable, declaration and assigment
  const [diceRoll, setDiceRoll] = useState(null);
  const [outcome, setOutcome] = useState("");
  // const { charStats } = useContext(GameContext);
// useState pulls an array with 2 things from it. State variable & updater function
// null value being passed thru is a defualt value for dice roll

useEffect(() => {
  const newOutcome = diceRoll + charStats[`${typeOfCheck}_mod`] - difficultyScore >= 0
  ? "You passed"
  : "You failed";
setOutcome(newOutcome);
}, [diceRoll, typeOfCheck, difficultyScore])


const rollDie = () => {
  const newRoll = Math.floor(Math.random() * 20) +1;
  setDiceRoll(newRoll);
  // calling the state setter function and giving it a new value
};
console.log(charStats[`${typeOfCheck}_mod`])

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
        Modifiers {charStats[`${typeOfCheck}_mod`] || 0} 
      </div>
      <div>
        Dice Roll {diceRoll} + Modifiers {charStats[`${typeOfCheck}_mod`]} - Difficulty Score {difficultyScore}
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
      onClick={rollDie}>{diceRoll && <div className="rolled-number">
        {diceRoll}</div>}
      </div>
      <div>
      {diceRoll && <div className="rolled-number">{outcome}</div>}
      </div>
    </div>
  );
};

export default TwentySidedDie;

