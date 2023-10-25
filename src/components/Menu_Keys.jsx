import { useEffect, useContext } from 'react';
import GameContext from 'components/GameContext';

const Menu_Icon = ({}) => {
  const { setInventory, setMenu, setMute } = useContext(GameContext);

  useEffect(() => {
    const handleMenuKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setInventory(false);
        setMenu((prevMenu) => !prevMenu);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        setMenu(false);
        setInventory((prevInventory) => !prevInventory);
      } else if (e.key === 'm') {
        e.preventDefault();
        setMute((prevMute) => !prevMute);
      }
    };

    window.addEventListener('keydown', handleMenuKey);

    return () => {
      window.removeEventListener('keydown', handleMenuKey);
    };
  }, [setMenu, setInventory, setMute]);

  return null;
};

export default Menu_Icon;
