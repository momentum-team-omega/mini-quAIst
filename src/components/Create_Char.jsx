import React, { useState } from 'react';
import barbCharacter from '/src/assets/barbarian-character.png';
import mageCharacter from '/src/assets/mage-character.png';
import rogueCharacter from '/src/assets/rogue-character.png';
const SelectCharacter = ({ onCharacterSelect }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };
  return (
    <div className="select-character">
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
        </div>
        <div
          className={`character-option ${
            selectedCharacter === 'barbarian' ? 'selected' : ''
          }`}
          onClick={() => handleCharacterSelect('barbarian')}
        >
          <img className="char-container" src={barbCharacter} alt="Barbarian Character" />
          <p>Barbarian</p>
        </div>
        <div
          className={`character-option ${
            selectedCharacter === 'rogue' ? 'selected' : ''
          }`}
          onClick={() => handleCharacterSelect('rogue')}
        >
          <img className="char-container" src={rogueCharacter} alt="Rogue Character" />
          <p>Rogue</p>
        </div>
      </div>
    </div>
  );
};
export default SelectCharacter;