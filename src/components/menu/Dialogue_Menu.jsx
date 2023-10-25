import React from 'react';
import Animated_Sprite from 'components/menu/Animated_Sprite';
import wiseman from 'assets/npc-assets/wiseman-sheet.png';
import redTroll from 'assets/npc-assets/red-troll-1.png';
import d20 from 'assets/menu-assets/d20.png';
import '/src/styles/Menu.css';

const Dialogue_Menu = ({}) => {
  return (
    <div className="menu-content">
      <div className="dialogue-menu-header">
        <p className="dialogue-menu-header-text">Menu</p>
      </div>
      <div className="dialogue-menu-item-container">
        <div className="menu-item">
          <p className="battle-item-header">NPCs: </p>
          <p className="item-text">
            Along their journey the player will encounter NPCs (non-player
            characters) that they can talk with. These NPCs will often steer the
            player in the right direction and sometimes even give the player
            gifts!
          </p>
        </div>
        <Animated_Sprite image={wiseman} steps={4} animationSpeed={80} />
        <div className="menu-item">
          <p className="battle-item-header" style={{ marginLeft: '0px' }}>
            Ability Checks:{' '}
          </p>
          <p className="item-text">
            Some dialogues will let you make an 'ability check' which is the
            games way of checking if you're skilled enough to perform a certain
            action, with a little luck thrown in! Your character has stats for{' '}
            <strong>STRENGTH</strong>, <strong>WISDOM</strong>, &{' '}
            <strong>DEXTERITY</strong> which are used to determine your
            characters abilities.
          </p>
        </div>
        <Animated_Sprite image={redTroll} steps={4} animationSpeed={80} />
        <div className="menu-item">
          <p className="battle-item-header" style={{ marginLeft: '0px' }}>
            Dice Rolls:{' '}
          </p>
          <p className="item-text">
            The abililty checks are calculated with a d20 (20-sided dice) roll.
            Your character has a modifier value for each stat, the higher the
            stat the better the modifier! These modifiers are included in the
            calculations along with the base difficulty score. If you roll
            higher than the required amount, your action is successful!
          </p>
        </div>
        <img
          style={{ width: '100px' }}
          src={d20}
          alt="damage"
          className="menu-img"
        />
      </div>
    </div>
  );
};

export default Dialogue_Menu;
