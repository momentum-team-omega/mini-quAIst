import React, { useState, useEffect } from "react";

const Game_Start = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageUrls = [
    "/src/assets/gamestart-assets/LoraEx1.jpeg",
    "/src/assets/gamestart-assets/LoraEx2.jpeg",
    "/src/assets/gamestart-assets/LoraEx3.jpeg",
  ];

  useEffect(() => {
    const changeImage = () => {
      if (imageIndex < imageUrls.length - 1) {
        setImageIndex(imageIndex + 1);
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
      <div className='image-container'>
        <img src={imageUrls[imageIndex]} alt={`Image ${imageIndex + 1}`} />
      </div>
    </>
  );
};

export default Game_Start;
