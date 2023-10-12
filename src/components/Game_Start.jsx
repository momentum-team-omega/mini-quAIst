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
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const intervalId = setInterval(changeImage, 10000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>Game Start</h1>
      <div className='image-container'>
        <img src={imageUrls[imageIndex]} alt={`Image ${imageIndex + 1}`} />
      </div>
    </>
  );
};

export default Game_Start;
