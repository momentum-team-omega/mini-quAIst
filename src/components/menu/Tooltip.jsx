import React, { useState, useEffect, useContext } from 'react';
import GameContext from 'contexts/GameContext';
import '/src/styles/Tooltip.css';

const Tooltip = ({ charPosition }) => {
  const { currentMap, toolTips, setToolTips, isSpacePressed, isFPressed } =
    useContext(GameContext);

  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState('');

  const tooltipStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-130%, -50%)',
  };

  useEffect(() => {
    if (
      currentMap === 'startHouse' &&
      charPosition.x === 5.5 &&
      charPosition.y === 5
    ) {
      if (!toolTips['1']) {
        setContent('Use the arrow keys or WASD to move around the map');
        setIsVisible(true);
        setToolTips({ ...toolTips, 1: true });
      }
    } else if (toolTips['1'] === true) {
      setIsVisible(false);
      setContent('');
    }
  }, [currentMap, charPosition, toolTips]);

  useEffect(() => {
    if (currentMap === 'start' && !isSpacePressed) {
      if (!toolTips['2']) {
        setContent('Press SPACEBAR to run');
        setIsVisible(true);
      }
    } else if (currentMap === 'start' && isSpacePressed && !toolTips['2']) {
      setToolTips({ ...toolTips, 2: true });
    } else if (toolTips['2'] === true) {
      setIsVisible(false);
      setContent('');
    }
  }, [currentMap, charPosition, isSpacePressed, toolTips]);

  useEffect(() => {
    const isWithinRange =
      charPosition.x >= 14.5 &&
      charPosition.x <= 16.5 &&
      charPosition.y >= 3 &&
      charPosition.y <= 5;

    if (
      currentMap === 'enchantedForestLocked' &&
      isWithinRange &&
      !isFPressed
    ) {
      if (!toolTips['3']) {
        setContent("Press 'F' To Interact");
        setIsVisible(true);
      }
    } else if (
      currentMap === 'enchantedForestLocked' &&
      isFPressed &&
      !toolTips['3']
    ) {
      setToolTips({ ...toolTips, 3: true });
    } else if (toolTips['3'] === true) {
      setIsVisible(false);
      setContent('');
    }
  }, [currentMap, charPosition, isFPressed, toolTips]);

  return (
    <>
      {isVisible && (
        <div className="tooltip" style={tooltipStyle}>
          <p className="tooltip-text">{content}</p>
        </div>
      )}
    </>
  );
};

export default Tooltip;
