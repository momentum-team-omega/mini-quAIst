import { useContext, useState, useEffect } from "react";
import { npcDialogues } from "../utilities/npcDialogues";
import TwentySidedDie from "./TwentySidedDie";
import GameContext from "./GameContext";
import "/src/styles/Dialogue.css";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

import wisemanImage from "/src/assets/dialogue-assets/wiseman.png";
import blacksmithImage from "/src/assets/dialogue-assets/blacksmith.png";
import steveImage from "/src/assets/dialogue-assets/steve.png";
import trollImage from "/src/assets/dialogue-assets/troll.png";
import villageLeaderImage from "/src/assets/dialogue-assets/villageLeader.png";

const Dialogue = () => {
  const {
    setScene,
    currentNPC,
    typeOfCheck,
    setTypeOfCheck,
    outcome,
    setMakeCheck,
    makeCheck,
    checkpoint2,
    setCheckpoint2,
    checkpoint3,
    setCheckpoint3,
    checkpoint4,
    setCheckpoint4,
  } = useContext(GameContext);

  const [charStats, setCharStats] = useState({
    name: "",
    health: 50,
    strength: 6,
    str_mod: -2,
    wisdom: 14,
    wis_mod: 2,
    dexterity: 10,
    dex_mod: 0,
  });

  const [currentDialogueId, setCurrentDialogueId] = useState("1");
  const currentOption = npcDialogues[currentNPC][currentDialogueId];

  const [response, setResponse] = useState(
    npcDialogues[currentNPC].initialResponse
  );
  const [preFetchedResponses, setPreFetchedResponses] = useState([]);

  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  // Calculate animation time based on text length and speed
  const animationTime = response.length * 50 + 500; // Assuming speed is 50 milliseconds per character

  useEffect(() => {
    if (!showOptions) {
      // Schedule a callback after the animation duration
      const animationTimeout = setTimeout(() => {
        handleShowOptions();
      }, animationTime);

      // Clear the timeout in case the component unmounts or animation completes
      return () => clearTimeout(animationTimeout);
    }
  }, [showOptions, animationTime]);

  const npcImages = {
    wiseman: wisemanImage,
    blacksmith: blacksmithImage,
    steve: steveImage,
    troll: trollImage,
    villageLeader: villageLeaderImage,
  };

  const containerStyle = {
    backgroundImage: `url(${npcImages[currentNPC] || ""})`,
  };

  const npcList = Object.keys(npcDialogues);

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
    }

    fetchInitialResponses();
  }, []);

  const [loading, setLoading] = useState(false);

  const handleOptionClick = async (optionId) => {
    setLoading(true);

    const selectedDialogue = npcDialogues[currentNPC][optionId];

    switch (optionId) {
      case "leave":
        setScene("overworld");
        break;

      case "start":
        setCurrentDialogueId("1");
        setResponse("What else would you like to know young one?");
        break;

      case "str":
      case "dex":
      case "wis":
        setTypeOfCheck(optionId);
        setMakeCheck(true);
        break;

      case "fight":
        setScene("battle");
        break;

      case "instruct":
        setResponse(npcDialogues[currentNPC][optionId].instructions);
        setCurrentDialogueId(optionId);

        if (currentNPC === "steve") {
          setCheckpoint2(true);
        } else if (currentNPC === "villageLeader") {
          setCheckpoint3(true);
        }

        break;
      case "chooseClass":
        setScene("characterCreation");
      default:
        const optionIndex = currentDialogue.options.indexOf(optionId);

        if (preFetchedResponses[optionIndex]) {
          setResponse(preFetchedResponses[optionIndex]);
        } else {
          const userChoice = selectedDialogue.text;
          const response = await handleChatGPT(userChoice);
          setResponse(response);
        }

        setCurrentDialogueId(optionId);

        const nextDialogueOptions = npcDialogues[currentNPC][optionId].options;
        const nextResponses = [];

        for (let nextOptionId of nextDialogueOptions) {
          const nextUserChoice = npcDialogues[currentNPC][nextOptionId].text;
          const response = await handleChatGPT(nextUserChoice);
          nextResponses.push(response);
        }

        setPreFetchedResponses(nextResponses);
        break;
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
        max_tokens: 80,
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
      setLoading(false);
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error:", error);
      return "Error fetching response.";
    }
  };

  const handleRollOutcome = (rollOutcome) => {
    if (rollOutcome === "passed") {
      setCheckpoint4(true);
      setScene("ending");
    } else if (rollOutcome === "failed") {
      setScene("battle");
    }
  };

  const currentDialogue = npcDialogues[currentNPC][currentDialogueId];

  return (
    <div className="dialogue-container">
      {makeCheck && (
        <TwentySidedDie
          typeOfCheck={typeOfCheck}
          difficultyScore={currentOption?.difficultyScore}
          charStats={charStats}
          onRollComplete={handleRollOutcome}
        />
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div
            className="npc-text"
            style={{
              width: "1070px",
              padding: "10px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <TypeAnimation sequence={[response]} speed={60} repeat={0} />
          </div>
        </div>
      )}
      <div
        className="npc-image-container"
        style={{
          width: 600,
          height: 338,
          backgroundImage: containerStyle.backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="options-container">
        {showOptions &&
          currentDialogue?.options?.map((optionId) => (
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
