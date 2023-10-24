import React, { useState, useContext } from 'react';
import Overworld_Menu from 'components/menu/Overworld_Menu';
import Battle_Menu from 'components/menu/Battle_Menu';
import Confirm from 'components/menu/Confirm';
import Vol_Icon from 'components/menu/Vol_Icon';
import Inventory_Icon from 'components/menu/Inventory_Icon';
import '/src/styles/Menu.css';
import GameContext from '../GameContext';

const Menu = ({}) => {
  const { scene, setMenu, mute, setMute } = useContext(GameContext);
  const [confirm, setConfirm] = useState(false);

  const handleExit = () => {
    setMenu(false);
  };
  const handleGameExit = () => {
    setConfirm(true);
  };

  return (
    <div className="menu-container">
      <div className="exit-icon-container" onClick={handleExit}>
        <p className="exit-icon">X</p>
      </div>
      <Vol_Icon />
      <Inventory_Icon />
      {!confirm && scene === 'overworld' && <Overworld_Menu />}
      {!confirm && scene === 'battle' && <Battle_Menu />}
      {confirm ? (
        <Confirm setConfirm={setConfirm} />
      ) : (
        <div className="exit-options">
          <div className="exit-game-button" onClick={handleExit}>
            <p className="exit-game-text">Return</p>
          </div>
          <div className="exit-game-button" onClick={handleGameExit}>
            <p className="exit-game-text">Exit Game</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
