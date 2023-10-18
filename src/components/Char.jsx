import playerUp from 'assets/char-assets/playerUp.png';
import playerLeft from 'assets/char-assets/playerLeft.png';
import playerDown from 'assets/char-assets/playerDown.png';
import playerRight from 'assets/char-assets/playerRight.png';
import defaultUp from 'assets/char-assets/defaultUp.png';
import defaultLeft from 'assets/char-assets/defaultLeft.png';
import defaultDown from 'assets/char-assets/defaultDown.png';
import defaultRight from 'assets/char-assets/defaultRight.png';
import mageUp from 'assets/char-assets/mageUp.png';
import mageLeft from 'assets/char-assets/mageLeft.png';
import mageDown from 'assets/char-assets/mageDown.png';
import mageRight from 'assets/char-assets/mageRight.png';
import rogueUp from 'assets/char-assets/rogueUp.png';
import rogueLeft from 'assets/char-assets/rogueLeft.png';
import rogueDown from 'assets/char-assets/rogueDown.png';
import rogueRight from 'assets/char-assets/rogueRight.png';
import barbUp from 'assets/char-assets/barbUp.png';
import barbLeft from 'assets/char-assets/barbLeft.png';
import barbDown from 'assets/char-assets/barbDown.png';
import barbRight from 'assets/char-assets/barbRight.png';
import { useState, useEffect, useContext } from 'react';
import GameContext from './GameContext';

const Char = ({ tileSize, direction, isMoving, isSpacePressed }) => {
  const [frame, setFrame] = useState(1);

  const { charStats } = useContext(GameContext);

  const DEFAULT_ANIMATION_SPEED = 80;
  const RUN_ANIMATION_SPEED = 40;

  const classToImages = {
    '': {
      Up: defaultUp,
      Down: defaultDown,
      Left: defaultLeft,
      Right: defaultRight,
    },
    mage: {
      Up: mageUp,
      Down: mageDown,
      Left: mageLeft,
      Right: mageRight,
    },
    rogue: {
      Up: rogueUp,
      Down: rogueDown,
      Left: rogueLeft,
      Right: rogueRight,
    },
    barb: {
      Up: barbUp,
      Down: barbDown,
      Left: barbLeft,
      Right: barbRight,
    },
    player: {
      Up: playerUp,
      Down: playerDown,
      Left: playerLeft,
      Right: playerRight,
    },
  };

  const images = classToImages[charStats.charClass] || classToImages[''];

  const backgroundImage = `url(${images[direction]})`;

  const updateAnimationFrame = () => {
    if (isMoving) {
      setFrame((prevFrame) => (prevFrame % 4) + 1);
    } else {
      setFrame(0);
    }
  };

  useEffect(() => {
    const frameIntervalSpeed = isSpacePressed
      ? RUN_ANIMATION_SPEED
      : DEFAULT_ANIMATION_SPEED;

    const mainInterval = setInterval(() => {
      updateAnimationFrame();
    }, frameIntervalSpeed);

    return () => {
      clearInterval(mainInterval);
    };
  }, [isMoving, isSpacePressed]);

  const bgPositionMap = {
    0: '0%',
    1: '0%',
    2: '33.33%',
    3: '66.66%',
    4: '100%',
  };

  return (
    <div
      className="main-character"
      style={{
        width: `${tileSize + 15}px`,
        height: `${tileSize}px`,
        backgroundImage,
        backgroundPosition: isMoving
          ? `${bgPositionMap[frame]} 0%`
          : `${bgPositionMap[0]} 0%`,
        backgroundSize: '400% 100%',
      }}
    ></div>
  );
};

export default Char;
