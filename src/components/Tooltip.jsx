import React, { useState, useEffect } from 'react';
import '/src/styles/Tooltip.css';

const Tooltip = ({ isVisible, content }) => {
  const tooltipStyle = {
    top: 'calc(50% - 40px)',
    left: 'calc(50% - 200px)',
    display: isVisible ? 'block' : 'none',
  };

  return (
    <div className="tooltip" style={tooltipStyle}>
      <p className="tooltip-text">{content}</p>
    </div>
  );
};

export default Tooltip;
