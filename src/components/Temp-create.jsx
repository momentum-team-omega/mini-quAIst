import React, { useContext, useState } from 'react';
import Nav from 'components/Nav';
import Create_Char from 'components/Create_Char';
import GameContext from "./GameContext";

const TempCreate = () => {
  
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
  });

  const [charStats, setCharStats] = useState({
    name: '',
    health: null,
    strength: null,
    str_mod: null,
    wisdom: null,
    wis_mod: null,
    dexterity: null,
    dex_mod: null,
  })

  // console.log(charStats)

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
          <Create_Char charStats={charStats} setCharStats={setCharStats} />
        </div>
      </div>
    </>
  );
};
export default TempCreate;
