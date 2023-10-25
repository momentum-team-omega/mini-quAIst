import React, { useContext } from 'react';
import invImg from '/src/assets/menu-assets/player-icon.svg';
import GameContext from 'components/GameContext';
import '/src/styles/Inventory.css';

const Inventory_Icon = ({}) => {
  const { setInventory, setMenu } = useContext(GameContext);
  const handleInv = () => {
    setMenu(false);
    setInventory(true);
  };
  return (
    <div className="inv-icon-container" onClick={handleInv}>
      <img src={invImg} className="player-icon" />
    </div>
  );
};

export default Inventory_Icon;
