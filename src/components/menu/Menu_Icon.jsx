import React, { useContext } from 'react';
import '/src/styles/Menu.css';
import GameContext from 'contexts/GameContext';

const Menu_Icon = ({ position }) => {
  const { setInventory, setMenu } = useContext(GameContext);

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

  const handleMenu = () => {
    setInventory(false);
    setMenu(true);
  };
  return (
    <div className="menu-icon-container" onClick={handleMenu} style={style}>
      <p className="menu-icon">?</p>
    </div>
  );
};

export default Menu_Icon;
