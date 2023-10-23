import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/Menu.css';

const Confirm = ({ setConfirm }) => {
  const handleNo = () => {
    setConfirm(false);
  };

  return (
    <div className="confirm-container">
      <p className="confirm-text">Do you want to quit the game?</p>
      <p className="confirm-text2">Your progress will be lost.</p>
      <div className="confirm-options">
        <Link to="/home">
          <div className="confirm-yes">
            <p className="yes-text">Yes</p>
          </div>
        </Link>
        <div className="confirm-no" onClick={handleNo}>
          <p className="no-text">No</p>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
