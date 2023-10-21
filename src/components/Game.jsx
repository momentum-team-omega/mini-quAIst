import React, { useContext, useState } from 'react';
import Nav from 'components/Nav';
import Overworld from './Overworld';
import Dialogue from './Dialogue';
import Create_Char from './Create_Char';
import GameContext from './GameContext';
import Battle from './Battle';
import Cut_Scene from './Cut_Scene';

const Game = () => {
  const [scene, setScene] = useState('overworld');
  const [currentNPC, setCurrentNPC] = useState('');
  const [charStats, setCharStats] = useState({
    name: '',
    charClass: '',
    health: 30,
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
  const [currentMap, setCurrentMap] = useState('village2');
  const [npcs, setNpcs] = useState([]);

  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const [checkpoint1, setCheckpoint1] = useState(false);
  const [checkpoint2, setCheckpoint2] = useState(false);
  const [checkpoint3, setCheckpoint3] = useState(false);
  const [checkpoint4, setCheckpoint4] = useState(false);

  const [toolTips, setToolTips] = useState({
    1: false,
    2: false,
    3: false,
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
          currentMap,
          setCurrentMap,
          npcs,
          setNpcs,
          checkpoint1,
          setCheckpoint1,
          checkpoint2,
          setCheckpoint2,
          checkpoint3,
          setCheckpoint3,
          checkpoint4,
          setCheckpoint4,
          toolTips,
          setToolTips,
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
            {scene === 'intro' && <Cut_Scene sceneSelection={0} />}
            {scene === 'ending' && <Cut_Scene sceneSelection={1} />}
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
