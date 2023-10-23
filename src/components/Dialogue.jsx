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
    setCurrentMap,
    checkpoints,
    setCheckpoints,
  } = useContext(GameContext);

  const [currentDialogueId, setCurrentDialogueId] = useState("1");
  const currentOption = npcDialogues[currentNPC][currentDialogueId];

  const [response, setResponse] = useState(
    npcDialogues[currentNPC].initialResponse
  );
  const [preFetchedResponses, setPreFetchedResponses] = useState([]);

  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  useEffect(() => {
    // Calculate the animation time based on response length and typing speed
    const animationTime = response.length * 50 + 900;

    const animationTimeout = setTimeout(() => {
      setIsTyping(false); // Animation is complete
      handleShowOptions();
    }, animationTime);

    // Clear the timeout if the component unmounts or animation completes
    return () => clearTimeout(animationTimeout);
  }, [response]);

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

  const [loading, setLoading] = useState(false);

  const handleOptionClick = async (optionId) => {
    setIsTyping(true);
    setShowOptions(false);
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
          if (!checkpoints[3]) {
            setCheckpoints((prev) => ({ ...prev, 2: true }));
            // console.log('checkpoint2', checkpoint2);
            setCurrentMap("village2Locked2");
          }
        } else if (currentNPC === "villageLeader") {
          if (!checkpoints[4]) {
            setCheckpoints((prev) => ({ ...prev, 3: true }));
            // console.log('checkpoint3', checkpoint3);
          }
        }

        break;
      case "chooseClass":
        setScene("characterCreation");
      default:
        const userChoice = selectedDialogue.text;
        const response = await handleChatGPT(userChoice);
        setResponse(response);
        setCurrentDialogueId(optionId);
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
      console.log(data.choices[0].message.content)
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error:", error);
      return "Error fetching response.";
    }
  };

  const handleRollOutcome = (rollOutcome) => {
    if (rollOutcome === "passed") {
      setCheckpoints((prev) => ({ ...prev, 4: true }));
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
      <div className="options-wrapper">
        <div
          className="options-container"
          style={{ display: showOptions ? "block" : "none" }}
        >
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
    </div>
  );
};

export default Dialogue;
