import React, { useEffect, useContext, useRef } from 'react';
import footstep from 'assets/sfx-assets/footstep.wav';
import field1 from 'assets/sfx-assets/field-1.wav';
import forest1 from 'assets/sfx-assets/forest-1.wav';
import inside1 from 'assets/sfx-assets/inside-1.wav';
import village1 from 'assets/sfx-assets/village-1.wav';
import wisemanTheme from 'assets/sfx-assets/wiseman-theme.wav';
import steveTheme from 'assets/sfx-assets/steve-theme.wav';
import villageLeaderTheme from 'assets/sfx-assets/villageLeader-theme.wav';
import blacksmithTheme from 'assets/sfx-assets/blacksmith-theme.wav';
import trollTheme from 'assets/sfx-assets/troll-theme.wav';
import battleTheme from 'assets/sfx-assets/battle-theme.wav';
import createTheme from 'assets/sfx-assets/create-theme.wav';
import introTheme from 'assets/sfx-assets/intro-theme.wav';
import congratsTheme from 'assets/sfx-assets/congrats-theme.wav';
import deathTheme from 'assets/sfx-assets/death-theme.wav';
import GameContext from 'contexts/GameContext';

const SFX = () => {
  const { scene, currentMap, currentNPC, isMoving, isSpacePressed, mute } =
    useContext(GameContext);
  const footstepAudioRef = useRef(new Audio(footstep));
  const mapAudioRef = useRef();

  useEffect(() => {
    let interval;

    const DEFAULT_MOVE_SPEED = 250;
    const RUN_MOVE_SPEED = 180;

    const playFootstepAudio = () => {
      if (!mute) {
        footstepAudioRef.current.pause();
        footstepAudioRef.current.currentTime = 0;
        footstepAudioRef.current.volume = 0.6;
        footstepAudioRef.current.play();
      }
    };

    if (isMoving) {
      playFootstepAudio();
      interval = setInterval(
        playFootstepAudio,
        isSpacePressed ? RUN_MOVE_SPEED : DEFAULT_MOVE_SPEED
      );
    } else {
      footstepAudioRef.current.pause();
      footstepAudioRef.current.currentTime = 0;
    }

    return () => {
      clearInterval(interval);
    };
  }, [isMoving, isSpacePressed, mute]);

  useEffect(() => {
    let audioSrc = null;
    let loopAudio = true;

    if (scene === 'overworld') {
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
          audioSrc = forest1;
          break;
        case 'trollMapCat':
          audioSrc = forest1;
          break;
        default:
          audioSrc = null;
      }
    } else if (scene === 'dialogue') {
      const npcToAudioSrc = {
        wiseman: wisemanTheme,
        villageLeader: villageLeaderTheme,
        steve: steveTheme,
        blacksmith: blacksmithTheme,
        troll: trollTheme,
      };
      if (npcToAudioSrc[currentNPC]) {
        audioSrc = npcToAudioSrc[currentNPC];
      } else {
        audioSrc = steveTheme;
      }
    } else {
      const sceneToAudioSrc = {
        battle: battleTheme,
        characterCreation: createTheme,
        intro: introTheme,
        endChapter1: congratsTheme,
        death: deathTheme,
      };

      if (sceneToAudioSrc[scene]) {
        audioSrc = sceneToAudioSrc[scene];
        if (scene === 'death' || scene === 'endChapter1') {
          loopAudio = false;
        }
      } else {
        audioSrc = null;
      }
    }

    if (audioSrc) {
      if (mapAudioRef.current) {
        mapAudioRef.current.pause();
        mapAudioRef.current.currentTime = 0;
      }
      if (!mute) {
        mapAudioRef.current = new Audio(audioSrc);
        mapAudioRef.current.volume = 0.33;
        mapAudioRef.current.loop = loopAudio;
        mapAudioRef.current.play();
      }
    }

    return () => {
      if (mapAudioRef.current) {
        mapAudioRef.current.pause();
        mapAudioRef.current.currentTime = 0;
      }
    };
  }, [scene, currentMap, mute]);

  return null;
};

export default SFX;
