import React, { useState, useEffect } from 'react';
import compass from 'assets/compass-assets/compass.png';
import compassUpRed from 'assets/compass-assets/compass-up-red.png';
import compassRightRed from 'assets/compass-assets/compass-right-red.png';
import compassDownRed from 'assets/compass-assets/compass-down-red.png';
import compassLeftRed from 'assets/compass-assets/compass-left-red.png';
import compassUpBlue from 'assets/compass-assets/compass-up-blue.png';
import compassRightBlue from 'assets/compass-assets/compass-right-blue.png';
import compassDownBlue from 'assets/compass-assets/compass-down-blue.png';
import compassLeftBlue from 'assets/compass-assets/compass-left-blue.png';
import '/src/styles/Compass.css';

const Compass = ({ isMoving, direction, isSpacePressed }) => {
  let src;

  if (!isMoving) {
    src = compass;
  } else if (isMoving && isSpacePressed) {
    switch (direction) {
      case 'Up':
        src = compassUpRed;
        break;
      case 'Right':
        src = compassRightRed;
        break;
      case 'Down':
        src = compassDownRed;
        break;
      case 'Left':
        src = compassLeftRed;
        break;
      default:
        src = compass;
    }
  } else {
    switch (direction) {
      case 'Up':
        src = compassUpBlue;
        break;
      case 'Right':
        src = compassRightBlue;
        break;
      case 'Down':
        src = compassDownBlue;
        break;
      case 'Left':
        src = compassLeftBlue;
        break;
      default:
        src = compass;
    }
  }

  return <img className="compass" src={src} />;
};

export default Compass;
