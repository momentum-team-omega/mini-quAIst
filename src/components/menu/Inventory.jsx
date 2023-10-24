import React, { useState, useContext } from 'react';
import Vol_Icon from 'components/menu/Vol_Icon';
import Menu_Icon from 'components/menu/Menu_Icon';
import barbGirl from 'assets/creation-assets/barbarian-girl.png';
import mageGirl from 'assets/creation-assets/mage-girl.png';
import rogueGirl from 'assets/creation-assets/rogue-girl.png';
import '/src/styles/Inventory.css';
import GameContext from '../GameContext';

const Inventory = ({}) => {
  const { setInventory, charStats } = useContext(GameContext);

  const handleExit = () => {
    setInventory(false);
  };

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
      </div>
    </div>
  );
};

export default Inventory;
