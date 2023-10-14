import playerUp from 'assets/char-assets/playerUp.png';
import playerLeft from 'assets/char-assets/playerLeft.png';
import playerDown from 'assets/char-assets/playerDown.png';
import playerRight from 'assets/char-assets/playerRight.png';
import { useState, useEffect } from 'react';

const Char = ({ tileSize, direction, isMoving, isSpacePressed }) => {
  const images = {
    Up: playerUp,
    Down: playerDown,
    Left: playerLeft,
    Right: playerRight,
  };
  const [frame, setFrame] = useState(1);

  const backgroundImage = `url(${images[direction]})`;

  const DEFAULT_ANIMATION_SPEED = 80;
  const RUN_ANIMATION_SPEED = 40;

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
        width: `${tileSize}px`,
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
