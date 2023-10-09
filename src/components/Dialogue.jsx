import React from "react";

const Dialogue = ({ npcText, options, backgroundImage }) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="dialogue-container" style={containerStyle}>
      <div className="dialogue-content">
        <div className="npc-text">{npcText}</div>
        <div className="options-container">
          {options.map((option, index) => (
            <div key={index} className="option">
              {index+1}. {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
