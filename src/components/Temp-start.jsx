import React, { useState } from "react";
import Nav from "components/Nav";
import Game_Start from "components/Game_Start";

const TempStart = () => {
  const [gameWindow, setGameWindow] = useState({
    height: "720px",
    width: "1280px",
  });

  return (
    <>
      <Nav />
      <div className='content'>
        <div
          className='game-container'
          style={{
            height: gameWindow.height,
            width: gameWindow.width,
          }}
        >
          <Game_Start />
        </div>
      </div>
    </>
  );
};
export default TempStart;
