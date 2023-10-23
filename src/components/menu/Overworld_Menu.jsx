import React from 'react';
import compass from 'assets/compass-assets/compass-up-red.png';
import keys from 'assets/compass-assets/arrow-keys.png';
import fkey from 'assets/compass-assets/f-key.png';
import '/src/styles/Menu.css';

const Overworld_Menu = ({}) => {
  return (
    <div className="menu-content">
      <div className="menu-header">
        <p className="menu-header-text">Menu</p>
      </div>
      <div className="menu-item-container">
        <div className="menu-item">
          <p className="item-header">Controls: </p>
          <p className="item-text">
            Use WASD or the arrow keys (←↑↓→) to move around the map. You can
            hold SPACE to run.
          </p>
        </div>
        <img src={keys} alt="compass" className="menu-img" />
        <div className="menu-item">
          <p className="item-header">Compass: </p>
          <p className="item-text">
            Refer to the compass in the top left corner of the game screen for
            directions.
          </p>
        </div>
        <img src={compass} alt="compass" className="menu-img" />
        <div className="menu-item">
          <p className="item-header">Interaction: </p>
          <p className="item-text">
            Press "F" when next to a Non-Player-Character (NPC) to interact.
          </p>
        </div>
        <img src={fkey} alt="compass" className="menu-img" />
      </div>
    </div>
  );
};

export default Overworld_Menu;
