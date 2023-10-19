import React from 'react';
import { Bar } from './Bar';

const red = '#821200';
const blue = '#1953cb';

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
