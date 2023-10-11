import React, { useEffect } from 'react';

const Char_Animate = ({ isMoving, frame, setFrame, isSpacePressed }) => {
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

  return null;
};

export default Char_Animate;
