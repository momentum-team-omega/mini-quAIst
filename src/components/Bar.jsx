import React from "react";

export const Bar = ({ label, value, maxValue, main }) => {
  const red = "#821200";
  const blue = "#1953cb";

  const normalizedValue = Math.max(value, 0);

  const valueStyle = {
    width: `${(normalizedValue / maxValue) * 100}%`,
    backgroundColor: main ? (value < 15 ? red : blue) : red,
  };

  return (
    <div className="main">
      <div className="health-number">{value}</div>
      <div className={`label ${label}`}>{label}</div>
      <div className="max">
        <div className={`value ${value}`} style={valueStyle}></div>
      </div>
    </div>
  );
};
