import React, { useState, useEffect } from 'react';

const Animated_Sprite = ({ image, steps, animationSpeed }) => {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    let mainInterval;

    const updateAnimationFrame = () => {
      setFrame((prevFrame) => (prevFrame % steps) + 1);
    };

    if (steps > 1 && animationSpeed !== 0) {
      mainInterval = setInterval(() => {
        updateAnimationFrame();
      }, animationSpeed);
    }

    return () => {
      if (mainInterval) clearInterval(mainInterval);
    };
  }, [frame, steps, animationSpeed]);

  const bgPositionMap = {};

  if (steps === 4) {
    bgPositionMap[1] = '0%';
    bgPositionMap[2] = '33.33%';
    bgPositionMap[3] = '66.66%';
    bgPositionMap[4] = '100%';
  } else if (steps === 2) {
    bgPositionMap[1] = '0%';
    bgPositionMap[2] = '100%';
  } else if (steps === 1) {
    bgPositionMap[1] = '0%';
  }

  const backgroundSizeValue =
    steps === 4 ? '400% 100%' : steps === 2 ? '200% 100%' : '100% 100%';

  const styling = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${bgPositionMap[frame]} 0%`,
    backgroundSize: backgroundSizeValue,
    width: '50px',
    height: '70px',
  };

  return <div className="menu-img" style={styling} />;
};

export default Animated_Sprite;
