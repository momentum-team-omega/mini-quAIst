import { useState, useEffect, useContext } from 'react';
import GameContext from '../contexts/GameContext';

const NPC = ({
  currentMap,
  rowIndex,
  colIndex,
  tileSize,
  mapPosition,
  image,
  xOffset,
  yOffset,
  id,
  steps,
  animationSpeed,
  triggered,
  message,
}) => {
  const [frame, setFrame] = useState(1);

  const { currentNPC } = useContext(GameContext);

  const DEFAULT_ANIMATION_SPEED = 80;

  const updateAnimationFrame = () => {
    if (steps > 1) {
      setFrame((prevFrame) => (prevFrame % steps) + 1);
    } else {
      setFrame(1);
    }
  };

  useEffect(() => {
    let mainInterval;
    if (mainInterval) clearInterval(mainInterval);

    let speed = animationSpeed || DEFAULT_ANIMATION_SPEED;

    if (steps > 1 && speed !== 0) {
      mainInterval = setInterval(() => {
        updateAnimationFrame();
      }, speed);
    }

    return () => {
      if (mainInterval) clearInterval(mainInterval);
    };
  }, [frame, currentMap]);

  let bgPositionMap = {};

  if (steps === 4) {
    bgPositionMap = {
      1: '0%',
      2: '33.33%',
      3: '66.66%',
      4: '100%',
    };
  } else if (steps === 2) {
    bgPositionMap = {
      1: '0%',
      2: '100%',
    };
  } else if (steps === 1) {
    bgPositionMap = {
      1: '0%',
    };
  }

  let backgroundSizeValue = '100% 100%';

  if (steps === 4) {
    backgroundSizeValue = '400% 100%';
  } else if (steps === 2) {
    backgroundSizeValue = '200% 100%';
  }

  useEffect(() => {
    setFrame(1);
  }, [currentMap]);

  let styling = {
    top: `${rowIndex * tileSize - mapPosition.y - yOffset}px`,
    left: `${colIndex * tileSize - mapPosition.x - xOffset}px`,
    width: `${tileSize}px`,
    height: `${tileSize}px`,
    backgroundImage: `url(${image})`,
    backgroundPosition: steps > 1 ? `${bgPositionMap[frame]} 0%` : '0% 0%',
    backgroundSize: backgroundSizeValue,
  };

  if (currentNPC === 'troll') {
    styling = {
      ...styling,
      top: `${rowIndex * tileSize - mapPosition.y - yOffset - 132}px`,
      left: `${colIndex * tileSize - mapPosition.x - xOffset - 10}px`,
      width: `${tileSize + 30}px`,
      height: `${tileSize + 30}px`,
    };
  }

  let messageBoxTop = {
    top: `${rowIndex * tileSize - mapPosition.y - yOffset - 55}px`,
    left: `${colIndex * tileSize - mapPosition.x - xOffset - tileSize / 7}px`,
    width: `${tileSize + 20}px`,
    height: `${tileSize - 15}px`,
  };

  if (currentNPC === 'troll') {
    messageBoxTop = {
      ...messageBoxTop,
      top: `${rowIndex * tileSize - mapPosition.y - yOffset - 185}px`,
    };
  }

  return (
    <>
      {triggered && (
        <div className="message-box" style={messageBoxTop}>
          <p className="message-text">{message}</p>
        </div>
      )}
      <div className="NPC" style={styling}></div>
    </>
  );
};

export default NPC;
