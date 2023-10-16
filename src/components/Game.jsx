
import React, { useState } from "react";
import Nav from "components/Nav";
import Overworld from "./Overworld";
import { CharProvider } from "./CharContext";

const Game = () => {
  const [currentMap, setCurrentMap] = useState("village1");

  const [gameWindow, setGameWindow] = useState({
    height: "720px",
    width: "1280px",
  });

  return (
    <>
      <CharProvider>
        <Nav />
        <div className="content">
          <div
            className="game-container"
            style={{
              height: gameWindow.height,
              width: gameWindow.width,
            }}
          >
            <Overworld currentMap={currentMap} setCurrentMap={setCurrentMap} />
          </div>

        </div>
      </CharProvider>
    </>
  );
};
export default Game;
