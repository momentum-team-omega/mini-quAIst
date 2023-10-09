// Bar.jsx
import React from "react";

export const Bar = ({ label, value, maxValue }) => {
  return (
    <div className='main'>
      <div className={label}>{label}</div>
      <div className={maxValue}>
        <div
          className={value}
          style={{ width: `${(value / maxValue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
