import React, { useContext, useState } from 'react';
import Nav from 'components/Nav';
import Overworld from './Overworld';
import Dialogue from './Dialogue';
import Create_Char from './Create_Char';
import GameContext from './GameContext';
import Battle from './Battle';

const Game = () => {
  const [scene, setScene] = useState("overworld"); 
  const [currentNPC, setCurrentNPC] = useState("troll"); 
  const [charStats, setCharStats] = useState({
    name: "game test",
    charClass: "mage",
    health: 33,
    strength: 6,
    str_mod: -2,
    wisdom: 14,
    wis_mod: 2,
    dexterity: 10,
    dex_mod: 0,
  });

  const [typeOfCheck, setTypeOfCheck] = useState('wis');
  const [outcome, setOutcome] = useState('');
  const [makeCheck, setMakeCheck] = useState(false);
  const [currentMap, setCurrentMap] = useState('testMap');

  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  return (
    <>
      <Nav />
      <GameContext.Provider
        value={{
          scene,
          setScene,
          currentNPC,
          setCurrentNPC,
          charStats,
          setCharStats,
          typeOfCheck,
          setTypeOfCheck,
          outcome,
          setOutcome,
          makeCheck,
          setMakeCheck,
        }}
      >
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
              />
            )}
            {scene === 'characterCreation' && (
              <Create_Char charStats={charStats} setCharStats={setCharStats} />
            )}
            {scene === 'dialogue' && <Dialogue />}
            {scene === 'battle' && <Battle />}
          </div>
        </div>
      </GameContext.Provider>
    </>
  );
};
export default Game;
