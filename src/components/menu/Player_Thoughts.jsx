import React, { useState, useEffect, useContext } from "react";
import GameContext from "../GameContext";

const Player_Thoughts = ({ charPosition }) => {
  const {
    currentMap,
    playerThoughts,
    setPlayerThoughts,
    isSpacePressed,
    isFPressed,
  } = useContext(GameContext);

  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState("");

  const playerThoughtsStyle = {
    top: "50%",
    left: "50%",
    transform: "translate(-130%, -50%)",
  };

  useEffect(() => {
    const isWithinRange = charPosition.y >= 8;

    if (currentMap === "startHouse" && isWithinRange) {
      setContent("I should look for my cat outside");
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setContent("");
    }
  }, [currentMap, charPosition, playerThoughts]);

  useEffect(() => {
    const isWithinRange =
      charPosition.x >= 16.5 && charPosition.y >= 8 && charPosition.y <= 10;

    if (currentMap === "start" && isWithinRange) {
      setContent("I think my cat went this way...");
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setContent("");
    }
  }, [currentMap, charPosition, playerThoughts]);

  useEffect(() => {
    const isWithinRange1 =
      charPosition.x >= 16.5 && charPosition.y >= 33 && charPosition.y <= 35;
    const isWithinRange2 =
      charPosition.x >= 2.5 &&
      charPosition.x <= 4.5 &&
      charPosition.y >= 7 &&
      charPosition.y <= 9;

    if (currentMap === "enchantedForestLocked" && isWithinRange1) {
      setContent(
        "This path looks blocked. I wonder if someone could help me get through..."
      );
      setIsVisible(true);
    } else if (currentMap === "enchantedForestLocked" && isWithinRange2) {
      setContent("I hear someone. Maybe I should go talk to them...");
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setContent("");
    }
  }, [currentMap, charPosition, playerThoughts]);

  useEffect(() => {
    if (
      currentMap === "village2Locked" &&
      charPosition.x <= 4 &&
      charPosition.y >= 18 &&
      charPosition.y <= 24
    ) {
      if (!playerThoughts["3"]) {
        setContent(
          `You hear a whisper similar to the wise man's voice. "Look for a man named steve in the northwest corner of the village."`
        );
        setIsVisible(true);
        //   setPlayerThoughts({ ...playerThoughts, 3: true });
      }
    } else if (playerThoughts["3"] === true) {
      setIsVisible(false);
      setContent("");
    }
  }, [currentMap, charPosition, playerThoughts]);

  console.log("currentMap", currentMap);

  return (
    <>
      {isVisible && (
        <div className="tooltip" style={playerThoughtsStyle}>
          <p className="tooltip-text">{content}</p>
        </div>
      )}
    </>
  );
};

export default Player_Thoughts;
