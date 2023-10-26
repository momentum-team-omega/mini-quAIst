import React, { useState, useContext } from 'react';
import Vol_Icon from 'components/menu/Vol_Icon';
import Menu_Icon from 'components/menu/Menu_Icon';
import Char_Bar from 'components/Char_Bar';
import defaultGirl from 'assets/battle-assets/default-girl.png';
import barbGirl from 'assets/battle-assets/barb-girl.png';
import mageGirl from 'assets/battle-assets/mage-girl.png';
import rogueGirl from 'assets/battle-assets/rogue-girl.png';
import '/src/styles/Inventory.css';
import GameContext from 'contexts/GameContext';

const Inventory = ({}) => {
  const { setInventory, charStats } = useContext(GameContext);

  const handleExit = () => {
    setInventory(false);
  };

  let name;
  if (charStats.name === '') {
    name = '????';
  } else {
    name = charStats.name;
  }

  let charClass;
  if (charStats.charClass === '') {
    charClass = false;
  } else if (charStats.charClass === 'mage') {
    charClass = 'Mage';
  } else if (charStats.charClass === 'barb') {
    charClass = 'Barbarian';
  } else if (charStats.charClass === 'rogue') {
    charClass = 'Rogue';
  }

  let desc;
  if (charStats.charClass === '') {
    desc = 'Awoken from a slumber, you wonder where your cat has ran off to.';
  } else if (charStats.charClass === 'mage') {
    desc =
      'Mages are spellcasters who derive their power from the study and understanding of the arcane arts.';
  } else if (charStats.charClass === 'barb') {
    desc =
      'The Barbarian is the embodiment of primal fury, a warrior who draws from raw rage to decimate foes.';
  } else if (charStats.charClass === 'rogue') {
    desc =
      'Rogues are skilled thieves, assassins, spies, and scouts. They excel in stealth, dexterity-based skills, and precision attacks.';
  }

  let spec;
  if (charStats.charClass === '') {
    spec = false;
  } else if (charStats.charClass === 'mage') {
    spec =
      'Mages are capable of channeling primal energies to unleash a powerful Fireball. This Special Attack deals double the damage of a normal attack, but only once per battle!';
  } else if (charStats.charClass === 'barb') {
    spec =
      'Rage is the hallmark of the barbarian, an explosinon of primal fury. Harnessing that rage allows a Barbarian to deal double damage, but only once per battle.';
  } else if (charStats.charClass === 'rogue') {
    spec =
      'Sneak Attack is a precise and stealthy maneuver favored by rogues. Its use allows a Rogue to do double damage, but only once per battle.';
  }

  let img;
  if (charStats.charClass === '') {
    img = defaultGirl;
  } else if (charStats.charClass === 'mage') {
    img = mageGirl;
  } else if (charStats.charClass === 'barb') {
    img = barbGirl;
  } else if (charStats.charClass === 'rogue') {
    img = rogueGirl;
  }

  return (
    <div className="inv-container">
      <div className="exit-icon-container" onClick={handleExit}>
        <p className="exit-icon">X</p>
      </div>
      <Vol_Icon />
      <Menu_Icon position={'shifted'} />
      <div className="inv-content">
        <div className="inv-header">
          <p className="inv-header-text">Character</p>
        </div>
        <div className="character-container">
          <div className="subtext-container">
            <p className="inv-subtext">Name: {name}</p>
            {charClass && <p className="inv-subtext">Class: {charClass}</p>}
          </div>
          <div className="img-stats-container">
            <div className="img-container">
              <img src={img} alt="char-img" className="character-img" />
            </div>
            {charClass && (
              <div className="char-bar-container">
                <div className="char-bar-box">
                  <Char_Bar
                    label="Health: "
                    value={charStats.health}
                    maxValue={55}
                  />
                  <Char_Bar
                    label="Strength: "
                    value={charStats.strength}
                    maxValue={20}
                  />
                  <Char_Bar
                    label="Wisdom: "
                    value={charStats.wisdom}
                    maxValue={20}
                  />
                  <Char_Bar
                    label="Dexterity: "
                    value={charStats.dexterity}
                    maxValue={20}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="character-info">
            <div className="bio-box">
              <p className="bio-sub-header">Bio:</p>
              <p className="bio-subtext">{desc}</p>
            </div>
            {spec && (
              <div className="spec-box">
                <p className="spec-sub-header">Special:</p>
                <p className="spec-subtext">{spec}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
