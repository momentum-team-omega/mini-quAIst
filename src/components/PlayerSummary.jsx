import React from "react";
import { Bar } from "./Bar";

const red = "rgba(255, 0, 0, 0.5)";
const blue = "rgba(0, 0, 255, 0.5)";

export const PlayerSummary = ({
  main = false,
  name,
  level,
  value,
  maxValue,
  onSmackClick,
}) => {
  return (
    <div
      style={{ backgroundColor: main ? blue : red }}
      className="player-summary"
    >
      <div className="info">
        <div className="name">{name}</div>
        {/* <div className="level">LVL: {level}</div> */}
      </div>
      <div className="health">
        <Bar label="HP" value={value} maxValue={maxValue} main={main} />
      </div>
    </div>
  );
};
