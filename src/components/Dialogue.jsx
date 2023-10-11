import React, { useState } from "react";
import { npcDialogues } from "../utilities/npcDialogues";
import lotrImage from "/src/assets/lotr.png";
import axios from "axios";

const Dialogue = () => {
  const containerStyle = {
    backgroundImage: `url(${lotrImage})`,
  };

  const [currentNPC, setCurrentNPC] = useState("villageLeader"); // ["wiseman", "villageLeader"]
  const [currentDialogueId, setCurrentDialogueId] = useState("1");
  const [response, setResponse] = useState("Hello, young one"); // OpenAI response

  const handleOptionClick = async (optionId) => {
    console.log(`Option ${optionId} clicked`);

    const selectedDialogue = npcDialogues[currentNPC][optionId];
    console.log("SELECTED DIALOGUE", selectedDialogue);

    if (optionId == 'leave') {
      console.log("End of conversation detected.");
      // !selectedDialogue?.options || selectedDialogue.options.length === 0

      setResponse("End of conversation."); // or some other message

    } else if (optionId == 'start') {
      console.log("Start of conversation detected.");
      setCurrentDialogueId("1"); // This updates the current dialogue ID for the next set of options.
      setResponse("What else would you like to know young one?");
      return; 
      
    } else {

      // Fetch response from OpenAI
      const userChoice = selectedDialogue.text;
      await handleChatGPT(userChoice);
      
      setCurrentDialogueId(optionId); // This updates the current dialogue ID for the next set of options.
      
    }
  };

  const handleChatGPT = async (userContent) => {
    const systemContent = npcDialogues[currentNPC].systemContent;
    
    try {
      const messages = [
        {
          role: "system",
          content: systemContent,
        },
        {
          role: "user",
          content: userContent,
        },
      ];
      const payload = {
        model: "gpt-3.5-turbo",
        messages,
        max_tokens: 50,
      };

      const apiResponse = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_SECRET_KEY}`,
          },
        }
      );

      const data = apiResponse.data;
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const currentDialogue = npcDialogues[currentNPC][currentDialogueId];

  console.log("CURRENT DIALOGUE", currentDialogue);

  return (
    <div className="dialogue-container" style={containerStyle}>
      {response && (
        <div>
          <p className="npc-text">{response}</p>
        </div>
      )}
      <div className="options-container">
        {currentDialogue?.options?.map((optionId) => (
          <div
            key={optionId}
            className="option"
            onClick={() => handleOptionClick(optionId)}
          >
            {npcDialogues[currentNPC][optionId].text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dialogue;
