import React, { useContext, useState } from 'react';
import Char_Bar from 'components/Char_Bar';
import barbGirl from 'assets/creation-assets/barbarian-girl.png';
import mageGirl from 'assets/creation-assets/mage-girl.png';
import rogueGirl from 'assets/creation-assets/rogue-girl.png';
import charBackground from 'assets/creation-assets/fantasy-world.png';
import GameContext from './GameContext';
import '/src/styles/Create_Char.css';

const SelectCharacter = ({ charStats, setCharStats }) => {
  const { setScene, setCurrentMap, setCheckpoints } = useContext(GameContext);

  const characterAttributes = {
    mage: {
      charClass: 'mage',
      health: 33,
      strength: 6,
      str_mod: -2,
      wisdom: 14,
      wis_mod: 2,
      dexterity: 10,
      dex_mod: 0,
      description:
        'Mages are spellcasters who derive their power from the study and understanding of the arcane arts.',
      special_attack:
        'Mages are capable of channeling primal energies to unleash a powerful Fireball. This Special Attack deals double the damage of a normal attack, but only once per battle!',
    },
    barbarian: {
      charClass: 'barb',
      health: 31,
      strength: 14,
      str_mod: 2,
      wisdom: 6,
      wis_mod: -2,
      dexterity: 10,
      dex_mod: 0,
      description:
        'The Barbarian is the embodiment of primal fury, a warrior who draws from raw rage to decimate foes.',
      special_attack:
        'Rage is the hallmark of the barbarian, an explosinon of primal fury. Harnessing that rage allows a Barbarian to deal double damage, but only once per battle.',
    },
    special_attack: '',
    rogue: {
      charClass: 'rogue',
      health: 32,
      strength: 6,
      str_mod: -2,
      wisdom: 10,
      wis_mod: 0,
      dexterity: 14,
      dex_mod: 2,
      description:
        'Rogues are skilled thieves, assassins, spies, and scouts. They excel in stealth, dexterity-based skills, and precision attacks.',
      special_attack:
        'Sneak Attack is a precise and stealthy maneuver favored by rogues. Its use allows a Rogue to do double damage, but only once per battle.',
    },
  };
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    if (selectedCharacter === character) {
      // If the same character is selected again, deselect it
      setSelectedCharacter(null);
      setCharStats({
        ...charStats,
        name: '',
        charClass: '',
        health: null,
        strength: null,
        str_mod: null,
        wisdom: null,
        wis_mod: null,
        dexterity: null,
        dex_mod: null,
      });
      setCheckpoints((prev) => ({ ...prev, 1: false }));
    } else {
      // Set the selected character and update charStats
      setSelectedCharacter(character);
      setCharStats({
        name: character.charAt(0).toUpperCase() + character.slice(1),
        charClass: characterAttributes[character].charClass,
        health: characterAttributes[character].health,
        strength: characterAttributes[character].strength,
        str_mod: characterAttributes[character].str_mod,
        wisdom: characterAttributes[character].wisdom,
        wis_mod: characterAttributes[character].wis_mod,
        dexterity: characterAttributes[character].dexterity,
        dex_mod: characterAttributes[character].dex_mod,
      });
      setCheckpoints((prev) => ({ ...prev, 1: true }));
      setCurrentMap('enchantedForest');
    }
  };

  // console.log(charStats);

  const handleConfirmClick = () => {
    // console.log(charStats);
    setScene('overworld');
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
      <div className="background">
        <p className="who-are-you">Who Are You?</p>
        <div className="name-entry">
          <div className="name-input">
            <label htmlFor="name" className="name-label">
              Enter Your Name:{' '}
            </label>
            <input
              className="name-input-box"
              type="text"
              name="name"
              id="name"
              required
              value={charStats.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="characters-container">
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
                      ? mageGirl
                      : character === 'barbarian'
                      ? barbGirl
                      : rogueGirl
                  }
                  alt={`${character} Character`}
                />
                <p className="class-name">
                  {character.charAt(0).toUpperCase() + character.slice(1)}
                </p>
                <div className="stat-bar-container">
                  <div className="stat-bar-box">
                    <Char_Bar
                      label="Health: "
                      value={characterAttributes[character].health}
                      maxValue={55}
                    />
                    <Char_Bar
                      label="Strength: "
                      value={characterAttributes[character].strength}
                      maxValue={20}
                    />
                    <Char_Bar
                      label="Wisdom: "
                      value={characterAttributes[character].wisdom}
                      maxValue={20}
                    />
                    <Char_Bar
                      label="Dexterity: "
                      value={characterAttributes[character].dexterity}
                      maxValue={20}
                    />
                  </div>
                </div>
                {selectedCharacter === character && (
                  <p
                    className="char-desc"
                    onClick={() => handleCharacterSelect(character)}
                  >
                    {characterAttributes[character].description} <br />
                    <br />
                    Special Attack:{' '}
                    {characterAttributes[character].special_attack}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button
            className="char-confirm-button"
            onClick={handleConfirmClick}
            disabled={!selectedCharacter}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default SelectCharacter;
