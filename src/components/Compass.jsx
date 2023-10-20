import React, { useState, useEffect } from 'react';
import compass from 'assets/compass-assets/compass.png';
import compassUp from 'assets/compass-assets/compass-up.png';
import compassRight from 'assets/compass-assets/compass-right.png';
import compassDown from 'assets/compass-assets/compass-down.png';
import compassLeft from 'assets/compass-assets/compass-left.png';
import compassUpRun from 'assets/compass-assets/compass-upRun.png';
import compassRightRun from 'assets/compass-assets/compass-rightRun.png';
import compassDownRun from 'assets/compass-assets/compass-downRun.png';
import compassLeftRun from 'assets/compass-assets/compass-leftRun.png';
import '/src/styles/Compass.css';

const Compass = ({ isMoving, direction, isSpacePressed }) => {
  let src;

  if (!isMoving) {
    src = compass;
  } else if (isMoving && isSpacePressed) {
    switch (direction) {
      case 'Up':
        src = compassUpRun;
        break;
      case 'Right':
        src = compassRightRun;
        break;
      case 'Down':
        src = compassDownRun;
        break;
      case 'Left':
        src = compassLeftRun;
        break;
      default:
        src = compass;
    }
  } else {
    switch (direction) {
      case 'Up':
        src = compassUp;
        break;
      case 'Right':
        src = compassRight;
        break;
      case 'Down':
        src = compassDown;
        break;
      case 'Left':
        src = compassLeft;
        break;
      default:
        src = compass;
    }
  }

  return <img className="compass" src={src} />;
};

export default Compass;
