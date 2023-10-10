import React, { useState } from 'react';
import barbCharacter from 'assets/barbarian-character.png';
import mageCharacter from 'assets/mage-character.png';
import rogueCharacter from 'assets/rogue-character.png';
import charBackground from 'assets/fantasy-world.png';

const SelectCharacter = ({ onCharacterSelect }) => {
  const characterAttributes = {
    mage: { strength: 10, health: 10, intelligence: 10 },
    barbarian: { strength: 10, health: 10, intelligence: 10},
    rogue: { strength: 10, health: 10, intelligence: 10 },
  };

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter({ character, attributes: characterAttributes[character] });
  };
  const handleConfirmClick = () => {
    onCharacterSelect(selectedCharacter);
  };
  return (
    <div style={{backgroundImage: `url(${charBackground})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat'}} className="select-character">
      <h2>Select Your Character</h2>
      <div className="character-options">
        <div
          className={`character-option ${
            selectedCharacter === 'mage' ? 'selected' : ''
          }`}
          onClick={() => handleCharacterSelect('mage')}
        >
          <img className="char-container" src={mageCharacter} alt="Mage Character" />
          <p>Mage</p>
          <p>Strength: {characterAttributes.mage.strength}</p>
          <p>Health: {characterAttributes.mage.health}</p>
          <p>Intelligence: {characterAttributes.mage.intelligence}</p>
        </div>
        <div
          className={`character-option ${
            selectedCharacter === 'barbarian' ? 'selected' : ''
          }`}
          onClick={() => handleCharacterSelect('barbarian')}
        >
          <img className="char-container" src={barbCharacter} alt="Barbarian Character" />
          <p>Barbarian</p>
          <p>Strength: {characterAttributes.barbarian.strength}</p>
          <p>Health: {characterAttributes.barbarian.health}</p>
          <p>Intelligence: {characterAttributes.barbarian.intelligence}</p>
        </div>
        <div
          className={`character-option ${
            selectedCharacter === 'rogue' ? 'selected' : ''
          }`}
          onClick={() => handleCharacterSelect('rogue')}
        >
          <img className="char-container" src={rogueCharacter} alt="Rogue Character" />
          <p>Rogue</p>
          <p>Strength: {characterAttributes.rogue.strength}</p>
          <p>Health: {characterAttributes.rogue.health}</p>
          <p>Intelligence: {characterAttributes.rogue.intelligence}</p>
        </div>
      </div>
      <button onClick={handleConfirmClick} disabled={!selectedCharacter}>
        Confirm Selection
      </button>
    </div>
  );
};
export default SelectCharacter;