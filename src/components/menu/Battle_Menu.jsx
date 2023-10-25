import React from 'react';
import potion from '/src/assets/battle-assets/potion.png';
import skull from '/src/assets/battle-assets/Skull.png';
import specialAttack from '/src/assets/battle-assets/Special-attack.png';
import crossedSwords from '/src/assets/battle-assets/crossed-swords.png';
import damage from '/src/assets/battle-assets/damage.png';

import '/src/styles/Menu.css';

const Battle_Menu = ({}) => {
  return (
    <div className="menu-content">
      <div className="menu-header">
        <p className="menu-header-text">Menu</p>
      </div>
      <div className="menu-item-container">
        <div className="menu-item">
          <p className="battle-item-header">Combat: </p>
          <p className="item-text">
            In this turn-based combat system, players alternate actions and use
            character-specific abilities to overcome opponents in a tactical
            battle experience.
          </p>
        </div>
        <img
          style={{ height: '34px', width: '34px' }}
          src={crossedSwords}
          alt="crossed swords"
          className="menu-img"
        />
        <div className="menu-item">
          <p className="battle-item-header">Damage: </p>
          <p className="item-text">
            Damage is calculated based on a combination of the character's base
            statistics and rolls effected by modifiers, adding a layer of
            unpredictability to each combat encounter.
          </p>
        </div>
        <img
          style={{ height: '34px', width: '34px' }}
          src={damage}
          alt="damage"
          className="menu-img"
        />
        <div className="menu-item">
          <p className="battle-item-header">Actions: </p>
          <img src={skull} alt="skull" className="menu-img" />
          <p className="item-text">
            Attack: Deliver a basic attack using your character's equipped
            weapon or abilities.{' '}
          </p>
          <img src={potion} alt="potion" className="menu-img" />
          <p className="item-text">
            Potion: Consume a healing potion to restore a portion of your
            character's health.
          </p>
          <img src={specialAttack} alt="lightning" className="menu-img" />
          <p className="item-text">
            Special Attack: Unleash a powerful, class-specific special move with
            the potential for increased damage or unique effects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Battle_Menu;
