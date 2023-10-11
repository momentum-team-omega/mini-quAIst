import React, { useState } from 'react';
import barbCharacter from 'assets/creation-assets/barbarian-character.png';
import mageCharacter from 'assets/creation-assets/mage-character.png';
import rogueCharacter from 'assets/creation-assets/rogue-character.png';
import charBackground from 'assets/creation-assets/fantasy-world.png';

const SelectCharacter = ({ onCharacterSelect }) => {
  const characterAttributes = {
    mage: {
      strength: 10,
      health: 10,
      intelligence: 10,
      description:
        'known for their mastery of arcane magic and spellcasting abilities.',
    },
    barbarian: {
      strength: 10,
      health: 10,
      intelligence: 10,
      description:
        'known for their primal strength, relentless fury, and connection to the wild.',
    },
    rogue: {
      strength: 10,
      health: 10,
      intelligence: 10,
      description: 'known for their stealth, cunning, and versatility.',
    },
  };

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(selectedCharacter === character ? null : character);
  };

  const handleConfirmClick = () => {
    onCharacterSelect(selectedCharacter);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${charBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="select-character"
    >
      <h2>Select Your Character</h2>
      <div className="character-options">
        {['mage', 'barbarian', 'rogue'].map((character) => (
          <div
            key={character}
            className={`character-option ${
              selectedCharacter === character ? 'selected' : ''
            }`}
            onClick={() => handleCharacterSelect(character)}
          >
            <img
              className="char-container"
              src={
                character === 'mage'
                  ? mageCharacter
                  : character === 'barbarian'
                  ? barbCharacter
                  : rogueCharacter
              }
              alt={`${character} Character`}
            />
            <p>{character.charAt(0).toUpperCase() + character.slice(1)}</p>
            <p>Strength: {characterAttributes[character].strength}</p>
            <p>Health: {characterAttributes[character].health}</p>
            <p>Intelligence: {characterAttributes[character].intelligence}</p>
            {selectedCharacter === character && (
              <p onClick={() => handleCharacterSelect(character)}>
                {characterAttributes[character].description}
              </p>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleConfirmClick} disabled={!selectedCharacter}>
        Confirm Selection
      </button>
    </div>
  );
};

export default SelectCharacter;
