import React, { useState } from 'react';
import Menu_Content from 'components/Menu_Content';
import Confirm from 'components/Confirm';
import '/src/styles/Menu.css';

const Menu = ({ setMenu }) => {
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
      {!confirm && <Menu_Content />}
      {confirm ? (
        <Confirm setConfirm={setConfirm} />
      ) : (
        <div className="exit-game-button" onClick={handleGameExit}>
          <p className="exit-game-text">Exit Game</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
