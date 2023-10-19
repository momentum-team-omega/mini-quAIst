import React from 'react';

const Char_Bar = ({ label, value, maxValue }) => {
  return (
    <div className="char-main">
      <div className="label-box">
        <div className={`char-label ${label}`}>{label}</div>
      </div>
      <div className="bar-box">
        <div className="char-max">
          <div
            className={`char-value ${value}`}
            style={{ width: `${(value / maxValue) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Char_Bar;
