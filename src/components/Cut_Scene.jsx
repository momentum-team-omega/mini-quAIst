
import React, { useState, useEffect, useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import openImage1 from "/src/assets/gamestart-assets/KidsRoomCat.png";
import openImage2 from "/src/assets/gamestart-assets/CatRunning.png";
import openImage3 from "/src/assets/gamestart-assets/LoraEx3.jpeg";
import GameContext from "./GameContext";
import "/src/styles/Cut_Scene.css";

const scenes = [
  {
    imageUrls: [openImage1, openImage2],
    textArray: [
      "Your kitty has a bad habbit of running in to the forest.",
      "As you follow your cat, the woods beside your house begin to look less familiar...",
    ],
  },
  // {
  //   imageUrls: [exampleImage1, exampleImage2, exampleImage3],
  //   textArray: [
  //     "You find yourself in a bustling city square, surrounded by people and noise.",
  //     "Rain starts pouring, and you seek shelter under a nearby awning.",
  //     "A mysterious alley beckons, and you decide to explore its depths.",
  //   ],
  // },
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
    setScene('overworld');
  };

  return (
    <>
      <h2 className="page-title" style={{ marginBottom: "30px" }}>
        Our story begins......
      </h2>
      <div className="gamestart-images">

        <div
          className="image-container"
          style={{ height: "300px", marginBottom: "125px" }}
        >

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
                style={{ fontSize: '2em' }}
              />
            </div>
          )}
        </div>
        {showContinueButton && (
          <button
            className="continue-button"
            onClick={handleContinue}
            style={{ marginTop: "60px" }}
          >
            {sceneIndex === 0 ? "Continue" : "End of Chapter 1"}

          </button>
        )}
      </div>
    </>
  );
};

export default Cut_Scene;
