import React, { useState, useEffect } from "react";
import { npcDialogues } from "../utilities/npcDialogues";
import lotrImage from "/src/assets/dialogue-assets/lotr.png";
import axios from "axios";

const Dialogue = () => {
  const containerStyle = {
    backgroundImage: `url(${lotrImage})`,
  };

  const [currentNPC, setCurrentNPC] = useState("blacksmith"); // ["wiseman", "villageLeader"]
  const [currentDialogueId, setCurrentDialogueId] = useState("1");
  const [response, setResponse] = useState(npcDialogues[currentNPC].initialResponse);
  const [preFetchedResponses, setPreFetchedResponses] = useState([]);

  useEffect(() => {
    async function fetchInitialResponses() {
      const initialDialogue = npcDialogues[currentNPC][currentDialogueId];
      const fetchedResponses = [];

      for (let optionId of initialDialogue.options) {
        const userChoice = npcDialogues[currentNPC][optionId].text;
        const response = await handleChatGPT(userChoice);
        fetchedResponses.push(response);
      }

      setPreFetchedResponses(fetchedResponses);
      console.log("Fetched responses", fetchedResponses);
    }

    fetchInitialResponses();
  }, []);

  const handleOptionClick = async (optionId) => {
    console.log(`Option ${optionId} clicked`);

    const selectedDialogue = npcDialogues[currentNPC][optionId];
    console.log("SELECTED DIALOGUE", selectedDialogue);

    if (optionId == 'leave') {
        console.log("End of conversation detected.");
        setResponse("End of conversation.");
    } else if (optionId == 'start') {
        console.log("Start of conversation detected.");
        setCurrentDialogueId("1");
        setResponse("What else would you like to know young one?");
    } else {
        const optionIndex = currentDialogue.options.indexOf(optionId);

        if (preFetchedResponses[optionIndex]) {
            setResponse(preFetchedResponses[optionIndex]);
        } else {
            const userChoice = selectedDialogue.text;
            const response = await handleChatGPT(userChoice);
            setResponse(response);
        }

        setCurrentDialogueId(optionId); 

        // Here, make API calls for the next set of dialogue options and cache them
        const nextDialogueOptions = npcDialogues[currentNPC][optionId].options;
        const nextResponses = [];

        for (let nextOptionId of nextDialogueOptions) {
            const nextUserChoice = npcDialogues[currentNPC][nextOptionId].text;
            const response = await handleChatGPT(nextUserChoice);
            nextResponses.push(response);
        }

        setPreFetchedResponses(nextResponses);
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
      return data.choices[0].message.content;
  } catch (error) {
      console.error("Error:", error);
      return "Error fetching response.";
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
