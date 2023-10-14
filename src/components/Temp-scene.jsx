import React, { useState } from "react";
import Nav from "components/Nav";
import Cut_Scene from "components/Cut_Scene";

const TempScene = () => {
  const [gameWindow, setGameWindow] = useState({
    height: "720px",
    width: "1280px",
  });

  return (
    <>
      <Nav />
      <div className="content">
        <div
          className="game-container"
          style={{
            height: gameWindow.height,
            width: gameWindow.width,
          }}
        >
          <Cut_Scene />
        </div>
      </div>
    </>
  );
};
export default TempScene;
