import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import SFX from 'components/SFX';
import Menu_Icon from 'components/menu/Menu_Icon';
import Vol_Icon from 'components/menu/Vol_Icon';
import Inventory_Icon from 'components/menu/Inventory_Icon';
import Overworld from 'components/Overworld';
import Dialogue from 'components/Dialogue';
import Create_Char from 'components/Create_Char';
import GameContext from 'components/GameContext';
import Battle from 'components/Battle';
import Cut_Scene from 'components/Cut_Scene';

const Game = () => {
  const [scene, setScene] = useState('overworld');
  const [currentMap, setCurrentMap] = useState('village2');

  const [currentNPC, setCurrentNPC] = useState('');
  const [charStats, setCharStats] = useState({
    name: '',
    charClass: '',
    health: null,
    strength: null,
    str_mod: 2,
    wisdom: null,
    wis_mod: -2,
    dexterity: null,
    dex_mod: 0,
  });

  const [typeOfCheck, setTypeOfCheck] = useState('wis');
  const [outcome, setOutcome] = useState('');
  const [makeCheck, setMakeCheck] = useState(false);

  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const [isMoving, setIsMoving] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [isFPressed, setIsFPressed] = useState(false);

  const [checkpoints, setCheckpoints] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [toolTips, setToolTips] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [playerThoughts, setPlayerThoughts] = useState({
    1: false,
  });

  const [menu, setMenu] = useState(false);
  const [inventory, setInventory] = useState(false);

  const [mute, setMute] = useLocalStorageState('mute', true);
  const [music, setMusic] = useState(null);

  const [npcs, setNpcs] = useState([
    {
      id: 1,
      name: 'wiseman',
      steps: 4,
      animationSpeed: 800,
      alive: true,
      triggered: false,
      message: 'Greetings',
    },
    {
      id: 2,
      name: 'steve',
      steps: 4,
      animationSpeed: 400,
      alive: true,
      triggered: false,
      message: 'Crikey!',
    },
    {
      id: 3,
      name: 'villageLeader',
      steps: 4,
      animationSpeed: 200,
      alive: true,
      triggered: false,
      message: 'Hello There!',
    },
    {
      id: 4,
      name: 'blacksmith',
      steps: 4,
      animationSpeed: 200,
      alive: true,
      triggered: false,
      message: 'Greetings',
    },
    {
      id: 5,
      name: 'troll',
      steps: 4,
      animationSpeed: 200,
      alive: true,
      triggered: false,
      message: 'RAWR',
    },
  ]);

  const handleMuteButtonClick = () => {
    setMute(!mute); // Toggle between muted and unmuted state
  };

  return (
    <>
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
          checkpoints,
          setCheckpoints,
          toolTips,
          setToolTips,
          playerThoughts,
          setPlayerThoughts,
          menu,
          setMenu,
          mute,
          setMute,
          music,
          setMusic,
          isMoving,
          setIsMoving,
          isSpacePressed,
          setIsSpacePressed,
          isFPressed,
          setIsFPressed,
          inventory,
          setInventory,
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
            {!mute && <SFX />}
            {!menu && !inventory && <Vol_Icon />}
            {!menu &&
              !inventory &&
              scene !== 'dialogue' &&
              scene !== 'intro' && <Inventory_Icon />}
            {!menu &&
              !inventory &&
              scene !== 'dialogue' &&
              scene !== 'intro' && <Menu_Icon position={'normal'} />}
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
