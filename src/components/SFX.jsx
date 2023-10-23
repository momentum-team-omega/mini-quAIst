import React, { useEffect, useContext, useRef } from 'react';
import footstep from 'assets/sfx-assets/footstep.wav';
import field1 from 'assets/sfx-assets/field-1.wav';
import forest1 from 'assets/sfx-assets/forest-1.wav';
import inside1 from 'assets/sfx-assets/inside-1.wav';
import village1 from 'assets/sfx-assets/village-1.wav';
import GameContext from 'components/GameContext';

const SFX = ({}) => {
  const { currentMap, isMoving, isSpacePressed, isFPressed } =
    useContext(GameContext);

  const footstepAudioRef = useRef(null);
  const mapAudioRef = useRef(null);

  useEffect(() => {
    let interval;

    const DEFAULT_MOVE_SPEED = 250;
    const RUN_MOVE_SPEED = 180;

    const playFootstepAudio = () => {
      const audio = new Audio(footstep);
      footstepAudioRef.current = audio;
      audio.play();
    };

    if (isMoving) {
      playFootstepAudio();
      interval = setInterval(
        playFootstepAudio,
        isSpacePressed ? RUN_MOVE_SPEED : DEFAULT_MOVE_SPEED
      );
    }

    return () => {
      clearInterval(interval);
      if (footstepAudioRef.current) {
        footstepAudioRef.current.pause();
        footstepAudioRef.current.currentTime = 0;
      }
    };
  }, [isMoving, isSpacePressed]);

  useEffect(() => {
    let audioSrc = null;

    switch (currentMap) {
      case 'startHouse':
        audioSrc = inside1;
        break;
      case 'start':
        audioSrc = field1;
        break;
      case 'enchantedForest':
        audioSrc = forest1;
        break;
      case 'enchantedForestLocked':
        audioSrc = forest1;
        break;
      case 'village2':
        audioSrc = village1;
        break;
      case 'village2Locked':
        audioSrc = village1;
        break;
      case 'village2Locked2':
        audioSrc = village1;
        break;
      case 'village2inside':
        audioSrc = inside1;
        break;
      case 'trollMap':
        audioSrc = field1;
        break;
      default:
        audioSrc = null;
    }

    if (audioSrc) {
      if (mapAudioRef.current) {
        mapAudioRef.current.pause();
        mapAudioRef.current.currentTime = 0;
      }
      const audio = new Audio(audioSrc);
      mapAudioRef.current = audio;
      audio.play();
    }
  }, [currentMap]);

  return null;
};

export default SFX;
