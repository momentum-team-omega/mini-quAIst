import React, { useContext } from 'react';
import '/src/styles/Menu.css';
import GameContext from '../GameContext';

const Menu_Icon = ({ position }) => {
  const { setMenu, setInventory } = useContext(GameContext);

  let style;
  if (position === 'normal') {
    style = {
      top: '10px',
      right: '10px',
    };
  } else if (position === 'shifted') {
    style = {
      top: '10px',
      right: '60px',
    };
  }

  const handleHelp = () => {
    setInventory(false);
    setMenu(true);
  };
  return (
    <div className="menu-icon-container" onClick={handleHelp} style={style}>
      <p className="menu-icon">?</p>
    </div>
  );
};

export default Menu_Icon;
