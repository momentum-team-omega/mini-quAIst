import React, { useState, useEffect, useContext } from 'react';
import GameContext from '../../contexts/GameContext';
import '/src/styles/PlayerThoughts.css';

const Player_Thoughts = ({ charPosition }) => {
  const {
    currentMap,
    playerThoughts,
    setPlayerThoughts,
    isSpacePressed,
    isFPressed,
    checkpoints,
  } = useContext(GameContext);

  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState('');

  const playerThoughtsStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-110%, -170%)',
  };

  useEffect(() => {
    let tempContent = '';

    const isWithinRange1 =
      charPosition.x >= 16.5 && charPosition.y >= 33 && charPosition.y <= 35;
    const isWithinRange2 =
      charPosition.x >= 2.5 &&
      charPosition.x <= 4.5 &&
      charPosition.y >= 7 &&
      charPosition.y <= 9;

    switch (currentMap) {
      case 'startHouse':
        if (charPosition.y >= 8) {
          tempContent = 'I should look for my cat outside';
        }
        break;
      case 'start':
        if (
          charPosition.y >= 8 &&
          charPosition.y <= 10 &&
          charPosition.x >= 16.5
        ) {
          tempContent = 'I think my cat went this way...';
        }
        break;
      case 'enchantedForestLocked':
        if (isWithinRange1) {
          tempContent =
            'This path looks blocked. I wonder if someone could help me get through...';
        } else if (isWithinRange2) {
          tempContent = 'I hear someone. Maybe I should go talk to them...';
        }
        break;
      case 'village2Locked':
        if (
          charPosition.x <= 4 &&
          charPosition.y >= 18 &&
          charPosition.y <= 24
        ) {
          tempContent = `You hear a whisper similar to the wise man's voice. "Look for a man named steve in the northwest corner of the village."`;
        } else if (
          charPosition.x >= 18.5 &&
          charPosition.x <= 21.5 &&
          charPosition.y >= 8 &&
          charPosition.y <= 13
        ) {
          tempContent =
            'The town hall says closed for lunch. I wonder if I should talk to steve in the meantime...';
        }
        break;
        
      case 'trollMap':
        if (
          charPosition.x >= 5.5 &&
          charPosition.x <= 8.5 &&
          charPosition.y >= 3 &&
          charPosition.y <= 5
        ) {
          tempContent = `There's my cat! Now I just need to get past this troll...`;
        } else if (
          checkpoints[4] &&
          charPosition.x >= 14.5 &&
          charPosition.x <= 17.5 &&
          charPosition.y >= 3 &&
          charPosition.y <= 5
        ) {
          tempContent =
            'That goblin had my cat! I wont let it get away...';
        }

      default:
        break;
    }

    setIsVisible(tempContent !== '');
    setContent(tempContent);
  }, [currentMap, charPosition, playerThoughts]);

  // console.log('currentMap', currentMap);

  return (
    <>
      {isVisible && (
        <div className="thought-bubble" style={playerThoughtsStyle}>
          <p className="bubble-text">{content}</p>
        </div>
      )}
    </>
  );
};

export default Player_Thoughts;
