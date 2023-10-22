import React from 'react';
import '/src/styles/Menu.css';

const Menu_Icon = ({ setMenu }) => {
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
