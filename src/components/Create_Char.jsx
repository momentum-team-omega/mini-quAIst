import React, { useState } from 'react';
import Char_Bar from "components/Char_Bar";
import barbCharacter from 'assets/creation-assets/barbarian-character.png';
import mageCharacter from 'assets/creation-assets/mage-character.png';
import rogueCharacter from 'assets/creation-assets/rogue-character.png';
import charBackground from 'assets/creation-assets/fantasy-world.png';

const SelectCharacter = ({ charStats, setCharStats }) => {
  const characterAttributes = {
    mage: {
      health: 50,
      strength: 6,
      str_mod: -2,
      wisdom: 14,
      wis_mod: 2,
      dexterity: 10,
      dex_mod: 0,
      description:
      "Mages are arcane spellcasters who derive their power from intense study and a deep understanding of the arcane arts. Similar to sorcerers, mages spend years deciphering ancient tomes, learning new spells, and mastering the arcane.",
    },
    barbarian: {
      health: 50,
      strength: 14,
      str_mod: 2,
      wisdom: 6,
      wis_mod: 2,
      dexterity: 10,
      dex_mod: 0,
      description:
        "The Barbarian is the embodiment of primal fury, a warrior who draws from raw rage and the power of nature to decimate foes on the battlefield. These untamed fighters are known for their resilience and ferocity.",
    },
    rogue: {
      health: 50,
      strength: 6,
      str_mod: 0,
      wisdom: 10,
      wis_mod: -1,
      dexterity: 14,
      dex_mod: 2,
      description: "Rogues are skilled thieves, assassins, spies, and scouts. They excel in stealth, dexterity-based skills, and precision attacks. They are often seen as cunning, nimble, and resourceful adventurers.",
    },
  };
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  const handleCharacterSelect = (character) => {
    if (selectedCharacter === character) {
      // If the same character is selected again, deselect it
      setSelectedCharacter(null);
      setCharStats({ ...charStats, name: '', health: null, strength: null, str_mod: null, wisdom: null, wis_mod: null, dexterity: null, dex_mod: null });
    } else {
      // Set the selected character and update charStats
      setSelectedCharacter(character);
      setCharStats({
        name: character.charAt(0).toUpperCase() + character.slice(1),
        health: characterAttributes[character].health,
        strength: characterAttributes[character].strength,
        str_mod: characterAttributes[character].str_mod,
        wisdom: characterAttributes[character].wisdom,
        wis_mod: characterAttributes[character].wis_mod,
        dexterity: characterAttributes[character].dexterity,
        dex_mod: characterAttributes[character].dex_mod,
      });
    }
  };

  console.log(charStats)

  const handleConfirmClick = () => {
  };

  const handleChange = (e) => {
    setCharStats((prev) => ({
      ...charStats,
      name: e.target.value,
    }));
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
      <div className='background'>
        <p className='who-are-you'>Who Are You?</p>
        <div className='characters-container'>
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
                  className="char-img"
                  src={
                    character === 'mage'
                      ? mageCharacter
                      : character === 'barbarian'
                      ? barbCharacter
                      : rogueCharacter
                  }
                  alt={`${character} Character`}
                />
                <p className='class-name'>{character.charAt(0).toUpperCase() + character.slice(1)}</p>
                <div className="stat-bar-container">
                  <div className="stat-bar-box">
                    <Char_Bar label='Health: ' value={characterAttributes[character].health} maxValue={55} />
                    <Char_Bar label='Strength: ' value={characterAttributes[character].strength} maxValue={20} />
                    <Char_Bar label='Wisdom: ' value={characterAttributes[character].wisdom} maxValue={20} />
                    <Char_Bar label="Dexterity: " value={characterAttributes[character].dexterity} maxValue={20} />
                  </div>
                </div>
                {selectedCharacter === character && (
                  <p className='char-desc' onClick={() => handleCharacterSelect(character)}>
                    {characterAttributes[character].description}
                  </p>
                    )}
              </div>
              ))}
          </div>
              <div className='name-input'>
                <label htmlFor='name' className='name-label'>
                  Enter Your Name:{' '}
                </label>
                <input
                  className='name-input-box'
                  type='text'
                  name='name'
                  id='name'
                  required
                  value={charStats.username}
                  onChange={handleChange}
                />
            </div>
        </div>
        <button className="char-confirm-button" onClick={handleConfirmClick} disabled={!selectedCharacter}>
          Confirm Selection
        </button>
      </div>
    </div>
  );
};
export default SelectCharacter;










