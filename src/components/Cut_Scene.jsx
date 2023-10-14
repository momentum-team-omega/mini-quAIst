import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const scenes = [
  {
    imageUrls: [
      "/src/assets/gamestart-assets/LoraEx1.jpeg",
      "/src/assets/gamestart-assets/LoraEx2.jpeg",
      "/src/assets/gamestart-assets/LoraEx3.jpeg",
    ],
    textArray: [
      "The beach is beautiful and the sounds of the waves are soothing.",
      "The forest swirls around you, causing you to lose your way.",
      "The golden leaves hide magical creatures, you can feel eyes upon you.",
    ],
  },
  {
    imageUrls: [
      "/src/assets/gamestart-assets/LoraEx1.jpeg",
      "/src/assets/gamestart-assets/LoraEx2.jpeg",
      "/src/assets/gamestart-assets/LoraEx3.jpeg",
    ],
    textArray: [
      "You find yourself in a bustling city square, surrounded by people and noise.",
      "Rain starts pouring, and you seek shelter under a nearby awning.",
      "A mysterious alley beckons, and you decide to explore its depths.",
    ],
  },
  // Define more scenes here
];

const Cut_Scene = ({ initialSceneIndex }) => {
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
        return prevIndex; // Stay on the last image
      });

      // Checking for scene end so scenes can be any length
      if (imageIndex < textArray.length - 1) {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
        }, 1000);
      }
    };

    const intervalId = setInterval(advanceImage, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageUrls, textArray, imageIndex]);

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
      </div>
    </>
  );
};

export default Cut_Scene;
