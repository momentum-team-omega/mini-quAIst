import React, { useContext } from 'react';
import muteImg from '/src/assets/sfx-assets/mute-icon.svg';
import unmuteImg from '/src/assets/sfx-assets/unmute-icon.svg';
import GameContext from 'components/GameContext';
import '/src/styles/Volume.css';

const Vol_Icon = ({}) => {
  const { mute, setMute } = useContext(GameContext);
  const handleHelp = () => {
    setMute(!mute);
  };
  return (
    <div className="vol-icon-container" onClick={handleHelp}>
      {mute ? (
        <img src={muteImg} className="vol-icon" />
      ) : (
        <img src={unmuteImg} className="vol-icon" />
      )}
    </div>
  );
};

export default Vol_Icon;
