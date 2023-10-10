import React, { useState } from "react";
import { npcDialogues } from "../utilities/npcDialogues";
import lotrImage from "/src/assets/lotr.png";

const Dialogue = () => {
  const containerStyle = {
    backgroundImage: `url(${lotrImage})`,
  };

  const [currentDialogueId, setCurrentDialogueId] = useState("0101");

  const handleOptionClick = (optionId) => {
    console.log(`Option ${optionId} clicked`);

    const selectedDialogue = npcDialogues[optionId];

    console.log("Selected Dialogue:", selectedDialogue);

    if (selectedDialogue.end) {
      console.log("End of conversation detected.");
    } else if (
      !selectedDialogue.options ||
      selectedDialogue.options.length === 0
    ) {
      console.log(
        "No further options available. Redirecting to end of conversation."
      );
      setCurrentDialogueId("0131");
    } else {
      if (npcDialogues[optionId].options) {
        // Log all sub-options if they exist
        // npcDialogues[optionId].options.forEach((subOptionId) => {
        //   console.log(npcDialogues[subOptionId].text);
        // });
      }

      // Navigate to the selected dialogue as before
      setCurrentDialogueId(optionId);
    }
  };

  const currentDialogue = npcDialogues[currentDialogueId];

  console.log("CURRENT DIALOGUE", currentDialogue);
  // console.log("Prompt", currentDialogue.text);
  // console.log("Options", currentDialogue.options);

  // Check if the current dialogue is the end of the conversation
  if (currentDialogue.end) {
    return (
      <div className="dialogue-container" style={containerStyle}>
        <div className="npc-text">{currentDialogue.text}</div>
        {/* You can add a button or action to exit the dialogue or proceed to the next game scene */}
      </div>
    );
  }

  return (
    <div className="dialogue-container" style={containerStyle}>
      <div className="npc-text">{currentDialogue.text}</div>
      <div className="options-container">
        {currentDialogue.options.map((optionId) => (
          <div
            key={optionId}
            className="option"
            onClick={() => handleOptionClick(optionId)}
          >
            {npcDialogues[optionId].text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dialogue;
