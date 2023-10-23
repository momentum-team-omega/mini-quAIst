import React, { useContext } from 'react';
import '/src/styles/Menu.css';
import GameContext from '../GameContext';

const Menu_Icon = ({}) => {
  const { setMenu } = useContext(GameContext);
  const handleHelp = () => {
    setMenu(true);
  };
  return (
    <div className="menu-icon-container" onClick={handleHelp}>
      <p className="menu-icon">?</p>
    </div>
  );
};

export default Menu_Icon;
