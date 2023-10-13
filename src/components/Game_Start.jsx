import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const Game_Start = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const imageUrls = [
    "/src/assets/gamestart-assets/LoraEx1.jpeg",
    "/src/assets/gamestart-assets/LoraEx2.jpeg",
    "/src/assets/gamestart-assets/LoraEx3.jpeg",
  ];

  const textArray = [
    "The beach is beautiful and the sounds of the waves are soothing.",
    "The forest swirls around you, causing you to lose your way",
    "The golden leaves hide magical creatures, you can feel eyes upon you",
  ];

  const isTypingRef = useRef(true);

  useEffect(() => {
    const changeImageAndText = () => {
      setImageIndex((prevIndex) => {
        if (prevIndex < imageUrls.length - 1) {
          return prevIndex + 1;
        } else {
          return 0; // Reset to the first image
        }
      });

      isTypingRef.current = false; // Clear text
      setTimeout(() => {
        isTypingRef.current = true;
        setTextIndex((prevIndex) => {
          if (prevIndex < textArray.length - 1) {
            return prevIndex + 1;
          }
        });
      }, 1000);
    };

    const intervalId = setInterval(changeImageAndText, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageUrls.length, textArray.length]);

  return (
    <>
      <h2>Our story begins......</h2>
      <div className='gamestart-images'>
        <div className='image-container' style={{ height: "300px" }}>
          <img
            src={imageUrls[imageIndex]}
            alt={`Image ${imageIndex + 1}`}
            style={{ height: "100%", width: "auto" }}
          />
          {isTypingRef.current && (
            <div className='image-text-container'>
              <TypeAnimation
                sequence={[textArray[textIndex]]}
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

export default Game_Start;
