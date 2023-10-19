import React, { useState, useEffect, useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import openingImage1 from "/src/assets/gamestart-assets/KidsRoomCat.png";
import openingImage2 from "/src/assets/gamestart-assets/CatRunning.png";
import openingImage3 from "/src/assets/gamestart-assets/LoraEx3.jpeg";
import GameContext from "./GameContext";

const scenes = [
  {
    imageUrls: [openingImage1, openingImage2, openingImage3],
    textArray: [
      "The beach is beautiful and the sounds of the waves are soothing.",
      "The forest swirls around you, causing you to lose your way.",
    ],
  },
  {
    imageUrls: [openingImage1, openingImage2, openingImage3],
    textArray: [
      "You find yourself in a bustling city square, surrounded by people and noise.",
      "Rain starts pouring, and you seek shelter under a nearby awning.",
      "A mysterious alley beckons, and you decide to explore its depths.",
    ],
  },
  // Define more scenes here
];

const Cut_Scene = ({ initialSceneIndex }) => {
  const { setScene } = useContext(GameContext);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(initialSceneIndex || 0);
  const selectedScene = scenes[sceneIndex];
  const imageUrls = selectedScene.imageUrls;
  const textArray = selectedScene.textArray;
  const [imageIndex, setImageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const advanceImage = () => {
      setImageIndex((prevIndex) => {
        if (prevIndex < imageUrls.length - 1) {
          return prevIndex + 1;
        }
        return prevIndex;
      });

      if (imageIndex < textArray.length - 1) {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
        }, 300);
      }
    };

    const intervalId = setInterval(advanceImage, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageUrls, textArray, imageIndex]);

  useEffect(() => {
    if (imageIndex === imageUrls.length - 1 && !isTyping) {
      setTimeout(() => {
        setShowContinueButton(true);
      }, 4000);
    }
  }, [imageIndex, isTyping, imageUrls]);

  const handleContinue = () => {
    setScene("overworld");
  };

  return (
    <>
      <h2 className="page-title">Our story begins......</h2>
      <div className="gamestart-images">
        <div className="image-container" style={{ height: "300px" }}>
          <img
            src={imageUrls[imageIndex]}
            alt={`Image ${imageIndex + 1}`}
            className="page-image"
          />
          {isTyping && (
            <div className="image-text-container">
              <TypeAnimation
                sequence={[textArray[imageIndex]]}
                speed={50}
                repeat={1}
                style={{ fontSize: "2em" }}
              />
            </div>
          )}
        </div>
        {showContinueButton && (
          <button onClick={handleContinue} style={{ marginTop: "60px" }}>
            {sceneIndex === 0 ? "Continue" : "End of Chapter 1"}
          </button>
        )}
      </div>
    </>
  );
};

export default Cut_Scene;
