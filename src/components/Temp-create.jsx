import React, { useState } from 'react';
import Nav from 'components/Nav';
import Create_Char from 'components/Create_Char';

const TempCreate = () => {
  const [gameWindow, setGameWindow] = useState({
    height: '720px',
    width: '1280px',
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
          <Create_Char />
        </div>
      </div>
    </>
  );
};
export default TempCreate;
