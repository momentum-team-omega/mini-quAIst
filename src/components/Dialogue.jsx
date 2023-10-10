import React, { useState } from "react";
import { npcDialogues } from "../utilities/npcDialogues";
import lotrImage from "/src/assets/lotr.png";
import axios from "axios";

const Dialogue = () => {
  const containerStyle = {
    backgroundImage: `url(${lotrImage})`,
  };

  const [currentDialogueId, setCurrentDialogueId] = useState("0101");
  const [response, setResponse] = useState(''); // OpenAI response




  const handleOptionClick = async (optionId) => {
    console.log(`Option ${optionId} clicked`);

    const selectedDialogue = npcDialogues[optionId];

    console.log("Selected Dialogue:", selectedDialogue);

    if (selectedDialogue?.end) {
      console.log("End of conversation detected.");
      
    } else if (optionId === 'askOpenAI') {
      const systemContent = 'You a old wise man in a dungeon and dragons adventure speaking with a 10 year old kid.';
      const userContent = 'Who are you?';
      await handleChatGPT(systemContent, userContent);

    } else if (
      !selectedDialogue?.options ||
      selectedDialogue?.options.length === 0
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

  const handleChatGPT = async (systemContent, userContent) => {
    try {
      const messages = [
        {
          role: 'system',
          content: systemContent,
        },
        {
          role: 'user',
          content: userContent,
        },
      ];
      const payload = {
        model: 'gpt-3.5-turbo',
        messages,
        max_tokens: 50,
      };
   
      const apiResponse = await axios.post('https://api.openai.com/v1/chat/completions', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_CHATGPT_SECRET_KEY}`, // Make sure your key is stored safely
        },
      });
   
      const data = apiResponse.data;
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
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
      {response && (
        <div>
          <strong>Response from ChatGPT:</strong>
          <p className="npc-text">{response}</p>
        </div>
      )}
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
        {/* This is the 5th option */}
        <div className="option" onClick={() => handleOptionClick('askOpenAI')}>
          Who are you? to OpenAI
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
