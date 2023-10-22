import React, { useState, useEffect, useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import openImage1 from "/src/assets/gamestart-assets/KidsRoomCat.png";
import openImage2 from "/src/assets/gamestart-assets/CatRunning.png";
import endImage1 from "/src/assets/gamestart-assets/CatToBeContinued.png";
import GameContext from "./GameContext";
import "/src/styles/Cut_Scene.css";

const scenes = [
  {
    imageUrls: [openImage1, openImage2],
    textArray: [
      "Your kitty has a bad habit of running in to the forest.",
      "As you follow your cat, the woods beside your house begin to look less familiar...",
    ],
  },
  {
    imageUrls: [endImage1],
    textArray: ["Congratulations, you have completed Chaper One!"],
  },
  // Define more scenes here
];

const Cut_Scene = ({ sceneSelection }) => {
  const { setScene } = useContext(GameContext);
  const selectedScene = scenes[sceneSelection];
  const [imageIndex, setImageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showContinueButton, setShowContinueButton] = useState(false);

  useEffect(() => {
    if (isTyping) {
      const typingDuration = selectedScene.textArray[imageIndex].length * 50;
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setShowContinueButton(true); // Show the "Continue" button once typing is done
      }, typingDuration + 1000);

      return () => clearTimeout(typingTimer);
    }
  }, [isTyping, imageIndex, selectedScene.textArray]);

  const handleContinue = () => {
    setShowContinueButton(false); // Hide the button

    if (imageIndex < selectedScene.imageUrls.length - 1) {
      setImageIndex((prevIndex) => prevIndex + 1);
      setIsTyping(true);
    } else {
      setScene("overworld");
    }
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
            src={selectedScene.imageUrls[imageIndex]}
            alt={`Image ${imageIndex + 1}`}
            className="page-image"
          />
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
            {sceneSelection === 0 ? "Continue" : "End Chapter 1"}
          </button>
        )}
      </div>
    </>
  );
};

export default Cut_Scene;
