import React, { useState, useEffect } from "react";
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
    "The golden leaves hid magical creatures",
  ];

  useEffect(() => {
    const changeImage = () => {
      if (imageIndex < imageUrls.length - 1) {
        setImageIndex(imageIndex + 1);
        setTextIndex(0); // Start with the first text on a new image
      } else {
        // All images have been displayed, so clear the interval
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(changeImage, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageIndex, imageUrls]);

  return (
    <>
      <h2>Our story begins......</h2>
      <div className='gamestart-images'>
        <div className='image-container'>
          <img src={imageUrls[imageIndex]} alt={`Image ${imageIndex + 1}`} />
          <div className='image-text'>
            <TypeAnimation
              sequence={[textArray[textIndex]]}
              speed={50} // Adjust typing speed as needed
              repeat={1} // Type once
              style={{ fontSize: "2em" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Game_Start;
