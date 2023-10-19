import React, { useContext, useState } from 'react';
import Nav from 'components/Nav';
import Overworld from './Overworld';
import Dialogue from './Dialogue';
import Create_Char from './Create_Char';
import GameContext from './GameContext';
import Battle from './Battle';
import Cut_Scene from './Cut_Scene';

const Game = () => {
  const [scene, setScene] = useState('intro');
  const [currentNPC, setCurrentNPC] = useState('');
  const [charStats, setCharStats] = useState({
    name: '',
    charClass: '',
    health: null,
    strength: null,
    str_mod: null,
    wisdom: null,
    wis_mod: null,
    dexterity: null,
    dex_mod: null,
  });

  const [currentMap, setCurrentMap] = useState('start');

  const [typeOfCheck, setTypeOfCheck] = useState('');
  const [outcome, setOutcome] = useState('');
  const [makeCheck, setMakeCheck] = useState(false);
  const [currentMap, setCurrentMap] = useState('start');

  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const [checkpoint1, setCheckpoint1] = useState(false);

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
          currentMap,
          setCurrentMap,
          checkpoint1,
          setCheckpoint1,
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
            {scene === 'intro' && <Cut_Scene initialSceneIndex={0} />}
            {scene === 'ending' && <Cut_Scene initialSceneIndex={1} />}
            {scene === 'overworld' && <Overworld />}
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
