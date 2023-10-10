// Bar.jsx
import React from "react";

export const Bar = ({ label, value, maxValue }) => {
  return (
    <div className='main'>
      <div className={`label ${label}`}>{label}</div>
      <div className='max'>
        <div
          className={`value ${value}`}
          style={{ width: `${(value / maxValue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
