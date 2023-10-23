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
    if (currentMap === "startHouse" && charPosition.y === 8) {
      if (!playerThoughts["1"]) {
        setContent("I should look for my cat outside");
        setIsVisible(true);
        setPlayerThoughts({ ...playerThoughts, 1: true });
      }
    } else if (playerThoughts["1"] === true) {
      setIsVisible(false);
      setContent("");
    }
  }, [currentMap, charPosition, playerThoughts]);

  useEffect(() => {
    const isWithinRange =
      charPosition.x >= 16.5 && charPosition.y >= 33 && charPosition.y <= 35;

    if (currentMap === "enchantedForestLocked" && isWithinRange) {
      console.log("enchanted forest locked");
      if (!playerThoughts["2"]) {
        setContent(
          "This path looks blocked. I wonder if someone could help me get through..."
        );
        setIsVisible(true);
        // setPlayerThoughts({ ...playerThoughts, 2: true });
      }
    } else if (playerThoughts["2"] === true) {
      setIsVisible(false);
      setContent("");
    }
  }, [currentMap, charPosition, playerThoughts]);

  //   useEffect(() => {
  //     if (currentMap === 'start' && !isSpacePressed) {
  //       if (!playerThoughts['2']) {
  //         setContent('Press SPACEBAR to run');
  //         setIsVisible(true);
  //       }
  //     } else if (currentMap === 'start' && isSpacePressed && !playerThoughts['2']) {
  //       setPlayerThoughts({ ...playerThoughts, 2: true });
  //     } else if (playerThoughts['2'] === true) {
  //       setIsVisible(false);
  //       setContent('');
  //     }
  //   }, [currentMap, charPosition, isSpacePressed, playerThoughts]);

  //   useEffect(() => {
  //     const isWithinRange =
  //       charPosition.x >= 14.5 &&
  //       charPosition.x <= 16.5 &&
  //       charPosition.y >= 3 &&
  //       charPosition.y <= 5;

  //     if (
  //       currentMap === 'enchantedForestLocked' &&
  //       isWithinRange &&
  //       !isFPressed
  //     ) {
  //       if (!playerThoughts['3']) {
  //         setContent("Press 'F' To Interact");
  //         setIsVisible(true);
  //       }
  //     } else if (
  //       currentMap === 'enchantedForestLocked' &&
  //       isFPressed &&
  //       !playerThoughts['3']
  //     ) {
  //       setPlayerThoughts({ ...playerThoughts, 3: true });
  //     } else if (playerThoughts['3'] === true) {
  //       setIsVisible(false);
  //       setContent('');
  //     }
  //   }, [currentMap, charPosition, isFPressed, playerThoughts]);

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
