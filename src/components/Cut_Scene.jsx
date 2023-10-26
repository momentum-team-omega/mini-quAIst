import React, { useState, useEffect, useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import openImage1 from "assets/cutscene-assets/KidsRoomCat.png";
import openImage2 from "assets/cutscene-assets/CatRunning.png";
import endImage1 from "assets/cutscene-assets/CatToBeContinued.png";
import deathScene from "assets/cutscene-assets/death-image.png";
import openImage1Upscaled from "assets/cutscene-assets/KidsRoomCat-upscaled.png";
import openImage2Upscaled from "assets/cutscene-assets/CatRunning-upscaled.png";
import endImage1Upscaled from "assets/cutscene-assets/CatToBeContinued-upscaled.png";
import deathSceneUpscaled from "assets/cutscene-assets/death-image-upscaled.png";
import GameContext from "contexts/GameContext";
import "/src/styles/Cut_Scene.css";

const scenes = [
  {
    imageUrls: [openImage1Upscaled, openImage2Upscaled],
    textArray: [
      "Your kitty has a bad habit of running in to the forest.",
      "As you follow your cat, the woods beside your house begin to look less familiar...",
    ],
    sceneHeader: ["Our story begins..."],
    sceneButton: ["Continue"],
  },
  {
    imageUrls: [endImage1Upscaled],
    textArray: ["Congratulations, you have completed Chapter One!"],
    sceneHeader: ["Huzzah!"],
    sceneButton: ["End Chapter"],
  },
  {
    imageUrls: [deathSceneUpscaled],
    textArray: [
      "The villagers find you washed up on the banks of the river. You are carried back to town and nursed back to full health.",
    ],
    sceneHeader: ["You were defeated..."],
    sceneButton: ["Try Again"],
  },
];

const Cut_Scene = ({ sceneSelection }) => {
  const { setScene } = useContext(GameContext);
  const selectedScene = scenes[sceneSelection];
  const [imageIndex, setImageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showContinueButton, setShowContinueButton] = useState(true);

  useEffect(() => {
    if (isTyping) {
      const typingDuration = selectedScene.textArray[imageIndex].length * 50;
      const typingTimer = setTimeout(() => {
        setIsTyping(true);
        setShowContinueButton(true); // Show the "Continue" button once typing is done
      }, typingDuration);

      return () => clearTimeout(typingTimer);
    }
  }, [isTyping, imageIndex, selectedScene.textArray]);

  const handleContinue = () => {
    setShowContinueButton(true); // Ability to hide the button

    if (imageIndex < selectedScene.imageUrls.length - 1) {
      setImageIndex((prevIndex) => prevIndex + 1);
      setIsTyping(true);
    } else if (sceneSelection < scenes.length - 1) {
      // Check if there are more scenes
      setScene("overworld");

      // Check if the current scene is "death" and set setCurrentMap accordingly
      if (currentScene === "death") {
        setCurrentMap("village2Inside");
      }
    }
  };

  return (
    <>
      <h2 className="page-title">{selectedScene.sceneHeader}</h2>
      <div className="cutscene-images">
        <div className="image-container">
          <img
            src={selectedScene.imageUrls[imageIndex]}
            alt={`Image ${imageIndex + 1}`}
            className="page-image"
          />
        </div>
        <div className="image-text-container">
          <TypeAnimation
            key={imageIndex} // This forces the component to remount when imageIndex changes
            sequence={[selectedScene.textArray[imageIndex]]}
            speed={50}
            repeat={0}
            style={{ fontSize: "2em" }}
            cursor={false}
            onComplete={() => setIsTyping(false)}
          />
        </div>
        {showContinueButton && (
          <button
            className="continue-button"
            onClick={handleContinue}
            style={{
              marginTop: "60px",
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {selectedScene.sceneButton}
          </button>
        )}
      </div>
    </>
  );
};

export default Cut_Scene;
