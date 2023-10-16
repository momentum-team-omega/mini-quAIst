import React, { useContext, useState } from "react";
import Nav from "components/Nav";
import Overworld from "./Overworld";
import Dialogue from "./Dialogue";
import GameContext from './GameContext'; 


const Game = () => {
  const [scene, setScene] = useState('overworld'); // Initial scene
  const [currentNPC, setCurrentNPC] = useState(null); // No NPC initially

  const [currentMap, setCurrentMap] = useState("village1");
  const [showDialogue, setShowDialogue] = useState(false);

  const [gameWindow, setGameWindow] = useState({
    height: "720px",
    width: "1280px",
  });

  return (
    <>
      <Nav />
      <GameContext.Provider value={{ scene, setScene, currentNPC, setCurrentNPC }}>
      <div className="content">
        <div
          className="game-container"
          style={{
            height: gameWindow.height,
            width: gameWindow.width,
          }}
        >
          {scene === 'overworld' && (
            <Overworld
              currentMap={currentMap}
              setCurrentMap={setCurrentMap}
              setShowDialogue={setShowDialogue}
              setCurrentNPC={setCurrentNPC}
            />
          )}
          {scene === 'dialogue' && <Dialogue npc={currentNPC} />}
        </div>
      </div>
      </GameContext.Provider>
    </>
  );
};
export default Game;
