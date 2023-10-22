import { useEffect, useContext } from 'react';
import village1 from 'assets/map-assets/village1-map-sheet.png';
import village1Fore from 'assets/map-assets/village1-fore.png';
import trollMap from 'assets/map-assets/troll-map-sheet.png';
import trollMapFore from 'assets/map-assets/Troll-Map-Fore.png';
import testMap from 'assets/map-assets/TestMap-sheet.png';
import startMap from 'assets/map-assets/startMap-sheet.png';
import startMapFore from 'assets/map-assets/startMap-fore.png';
import startHouse from 'assets/map-assets/startHouse-sheet.png';
import enchantedForest from 'assets/map-assets/enchantedForest-sheet.png';
import enchantedForestFore from 'assets/map-assets/enchantedForest-fore.png';
import enchantedForestLocked from 'assets/map-assets/enchantedForestLocked-sheet.png';
import village2 from 'assets/map-assets/village2-sheet.png';
import village2Locked from 'assets/map-assets/village2locked-sheet.png';
import village2Fore from 'assets/map-assets/Village2-fore.png';
import village2inside from 'assets/map-assets/village2inside-sheet.png';

import GameContext from './GameContext';

const Map_Switch = ({
  mapImage,
  setMapImage,
  setForeImage,
  mapPosition,
  setMapPosition,
  setCharPosition,
  setMapColumns,
  setMapRows,
  setGates,
  setTileSize,
  setMapOffset,
  setIsFPressed,
  hasMapSwitched,
}) => {
  const storedMapPosition = localStorage.getItem('mapPosition');
  const { currentMap, checkpoint1, setCurrentNPC, setNpcs } =
    useContext(GameContext);

  useEffect(() => {
    if (!mapImage || currentMap === 'startHouse') {
      setMapImage(startHouse);
      setForeImage();
      setTileSize(64);
      setMapColumns(11);
      setMapRows(11);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -287,
          y: -15,
        });
        setCharPosition({ x: 5.5, y: 5 }); // default value
      }
      setIsFPressed(false);
      setNpcs([]);
      setCurrentNPC('');
      setGates([
        {
          id: 1,
          x: 4,
          y: 10,
          map: 'start',
          destPX: -158,
          destPY: 175,
          destX: 7,
          destY: 8,
        },
        {
          id: 2,
          x: 5,
          y: 10,
          map: 'start',
          destPX: -158,
          destPY: 175,
          destX: 7,
          destY: 8,
        },
        {
          id: 3,
          x: 6,
          y: 10,
          map: 'start',
          destPX: -158,
          destPY: 175,
          destX: 7,
          destY: 8,
        },
      ]);
    } else if (currentMap === 'start') {
      setMapImage(startMap);
      setForeImage(startMapFore);
      setTileSize(64);
      setMapColumns(20);
      setMapRows(20);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -158,
          y: 175,
        });
        setCharPosition({ x: 7.5, y: 8 });
      }
      setIsFPressed(false);
      setNpcs([]);
      setCurrentNPC('');
      setGates([
        {
          id: 1,
          x: 7,
          y: 7,
          map: 'startHouse',
          destPX: -281,
          destPY: 260.5,
          destX: 5,
          destY: 9,
        },
        {
          id: 2,
          x: 19,
          y: 8,
          map: checkpoint1 ? 'enchantedForest' : 'enchantedForestLocked',
          // destPX: -256,
          // destPY: -59.5,
          // destX: 5,
          // destY: 9,
          destPX: -553.5,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 3,
          x: 19,
          y: 9,

          map: checkpoint1 ? 'enchantedForest' : 'enchantedForestLocked',
          destPX: -553.5,
          destPY: 1835.5,
          destX: 0,
          destY: 0,

          // destPX: -553.5,
          // destPY: 1835.5,
          // destX: 1,
          // destY: 34,
        },
        {
          id: 4,
          x: 19,
          y: 10,

          map: checkpoint1 ? 'enchantedForest' : 'enchantedForestLocked',
          destPX: -553.5,
          destPY: 1835.5,
          destX: 0,
          destY: 0,

          // destPX: -553.5,
          // destPY: 1835.5,
          // destX: 1,
          // destY: 34,
        },
      ]);
    }
    if (currentMap === 'village1') {
      setMapImage(village1);
      setForeImage(village1Fore);
      setTileSize(64);
      setMapColumns(40);
      setMapRows(30);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: 953,
          y: 376.5,
        });
        setCharPosition({ x: 24, y: 11 });
      }
      setIsFPressed(false);
      setNpcs([{}]);
      setCurrentNPC('');
      setGates([
        {
          id: 1,
          x: 0,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 2,
          x: 0,
          y: 11,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 3,
          x: 0,
          y: 12,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 4,
          x: 9,
          y: 1,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 5,
          x: 10,
          y: 1,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 6,
          x: 11,
          y: 1,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 7,
          x: 31,
          y: 29,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 8,
          x: 32,
          y: 29,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 9,
          x: 33,
          y: 29,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 10,
          x: 39,
          y: 14,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 11,
          x: 39,
          y: 15,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 12,
          x: 39,
          y: 16,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 12,
          x: 24,
          y: 9,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 13,
          x: 25,
          y: 9,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
      ]);
    } else if (currentMap === 'trollMap') {
      setMapImage(trollMap);
      setForeImage(trollMapFore);
      setTileSize(64);
      setMapColumns(20);
      setMapRows(8);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        if (storedMapPosition) {
          setMapPosition(JSON.parse(storedMapPosition));
        } else {
          setMapPosition({
            x: -538,
            y: -85,
          });
        }
        setCharPosition({ x: 1, y: 4 });
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 10,
          y: 4,
          steps: 4,
          animationSpeed: 200,
          alive: true,
          triggered: false,
          message: 'RAWR',
          name: 'troll',
        },
      ]);
      setCurrentNPC('troll');
      setGates([
        {
          id: 1,
          x: 0,
          y: 3,

          map: 'village2',
          destPX: 1840.5,
          destPY: 753,
          destX: 0,
          destY: 0,
        },
        {
          id: 2,
          x: 0,
          y: 4,

          map: 'village2',
          destPX: 1840.5,
          destPY: 753,
          destX: 0,
          destY: 0,
        },
        {
          id: 3,
          x: 0,
          y: 5,

          map: 'village2',
          destPX: 1840.5,
          destPY: 753,
          destX: 0,
          destY: 0,
        },
        {
          id: 4,
          x: 19,
          y: 3,

          map: 'start',
          destPX: -158,
          destPY: 175,
          destX: 0,
          destY: 0,
        },
        {
          id: 5,
          x: 19,
          y: 4,

          map: 'start',
          destPX: -158,
          destPY: 175,
          destX: 0,
          destY: 0,
        },
        {
          id: 6,
          x: 19,
          y: 5,

          map: 'start',
          destPX: -158,
          destPY: 175,
          destX: 7,
          destY: 8,
        },
      ]);
    } else if (currentMap === 'testMap') {
      setMapImage(testMap);
      setForeImage(null);
      setTileSize(64);
      setMapColumns(20);
      setMapRows(20);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        if (storedMapPosition) {
          setMapPosition(JSON.parse(storedMapPosition));
        } else {
          setMapPosition({
            x: 299.5,
            y: 390,
          });
        }
        setCharPosition({ x: 14, y: 11 });
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 3,
          y: 11,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Hello There',
          name: 'wiseman',
        },
        {
          id: 2,
          x: 5,
          y: 8,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Greetings',
          name: 'villageLeader',
        },
        {
          id: 3,
          x: 10,
          y: 6,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Good Evening',
          name: 'tavernKeeper',
        },
        {
          id: 4,
          x: 14,
          y: 8,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Crikey!',
          name: 'steve',
        },
        {
          id: 5,
          x: 16,
          y: 11,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'RAWR',
          name: 'troll',
        },
      ]);
      setCurrentNPC('');
      setGates([
        {
          id: 1,
          x: 9,
          y: 19,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 2,
          x: 10,
          y: 19,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 3,
          x: 11,
          y: 19,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
      ]);
    } else if (currentMap === 'enchantedForestLocked') {
      setMapImage(enchantedForestLocked);
      setForeImage(enchantedForestFore);
      setTileSize(64);
      setMapColumns(20);
      setMapRows(40);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        if (storedMapPosition) {
          setMapPosition(JSON.parse(storedMapPosition));
        } else {
          setMapPosition({
            x: -389.5,
            y: -134.5,
          });
        }
        setCharPosition({ x: 5, y: 5 }); // default value
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 15,
          y: 4,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Greetings',
          name: 'wiseman',
        },
      ]);
      setCurrentNPC('wiseman');
      setGates([
        {
          id: 1,
          x: 0,
          y: 33,
          map: 'start',
          destPX: 562,
          destPY: 175,
          destX: 18,
          destY: 8,
        },
        {
          id: 2,
          x: 0,
          y: 34,
          map: 'start',
          destPX: 562,
          destPY: 175,
          destX: 18,
          destY: 8,
        },
        {
          id: 3,
          x: 0,
          y: 35,
          map: 'start',
          destPX: 562,
          destPY: 175,
          destX: 18,
          destY: 8,
        },
      ]);
    } else if (currentMap === 'enchantedForest') {
      setMapImage(enchantedForest);
      setForeImage(enchantedForestFore);
      setTileSize(64);
      setMapColumns(20);
      setMapRows(40);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        if (storedMapPosition) {
          setMapPosition(JSON.parse(storedMapPosition));
        } else {
          setMapPosition({
            x: -389.5,
            y: -134.5,
          });
        }
        setCharPosition({ x: 5, y: 5 }); // default value
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 15,
          y: 4,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Greetings',
          name: 'wiseman',
        },
      ]);
      setCurrentNPC('wiseman');
      setGates([
        {
          id: 1,
          x: 0,
          y: 33,
          map: 'start',
          destPX: 562,
          destPY: 175,
          destX: 18,
          destY: 8,
        },
        {
          id: 2,
          x: 0,
          y: 34,
          map: 'start',
          destPX: 562,
          destPY: 175,
          destX: 18,
          destY: 8,
        },
        {
          id: 3,
          x: 0,
          y: 35,
          map: 'start',
          destPX: 562,
          destPY: 175,
          destX: 18,
          destY: 8,
        },
        {
          id: 4,
          x: 19,
          y: 33,
          map: 'village2',
          destPX: -543,
          destPY: 1007.5,
          destX: 1,
          destY: 21,
        },
        {
          id: 5,
          x: 19,
          y: 34,
          map: 'village2',
          destPX: -543,
          destPY: 1007.5,
          destX: 1,
          destY: 21,
        },
        {
          id: 6,
          x: 19,
          y: 35,
          map: 'village2',
          destPX: -543,
          destPY: 1007.5,
          destX: 1,
          destY: 21,
        },
      ]);
    } else if (currentMap === 'village2') {
      setMapImage(village2);
      setForeImage(village2Fore);
      setTileSize(64);
      setMapColumns(40);
      setMapRows(30);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        if (storedMapPosition) {
          setMapPosition(JSON.parse(storedMapPosition));
        } else {
          setMapPosition({
            x: 10.5,
            y: -134.5,
          });
        }
        setCharPosition({ x: 10, y: 3 }); // default value
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 4,
          y: 4,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Crikey!',
          name: 'steve',
        },
        {
          id: 2,
          x: 37,
          y: 12,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Greetings',
          name: 'wiseman',
        },
      ]);
      setCurrentNPC('');
      setGates([
        {
          id: 1,
          x: 0,
          y: 20,
          map: 'enchantedForest',
          destPX: 564,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 2,
          x: 0,
          y: 21,
          map: 'enchantedForest',
          destPX: 564,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 3,
          x: 0,
          y: 22,
          map: 'enchantedForest',
          destPX: 564,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 4,
          x: 19,
          y: 10,
          map: 'village2inside',
          destPX: 0.5,
          destPY: 635.5,
          destX: 10,
          destY: 15,
        },
        {
          id: 5,
          x: 20,
          y: 10,
          map: 'village2inside',
          destPX: 0.5,
          destPY: 635.5,
          destX: 10,
          destY: 15,
        },
        {
          id: 6,
          x: 39,
          y: 16,

          map: 'trollMap',
          destPX: -555.5,
          destPY: -82.5,
          destX: 1,
          destY: 4,
        },
        {
          id: 7,
          x: 39,
          y: 17,

          map: 'trollMap',
          destPX: -555.5,
          destPY: -82.5,
          destX: 1,
          destY: 4,
        },
        {
          id: 8,
          x: 39,
          y: 18,

          map: 'trollMap',
          destPX: -555.5,
          destPY: -82.5,
          destX: 1,
          destY: 4,
        },
      ]);
    } else if (currentMap === 'village2Locked') {
      setMapImage(village2Locked);
      setForeImage(village2Fore);
      setTileSize(64);
      setMapColumns(40);
      setMapRows(30);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        if (storedMapPosition) {
          setMapPosition(JSON.parse(storedMapPosition));
        } else {
          setMapPosition({
            x: 10.5,
            y: -134.5,
          });
        }
        setCharPosition({ x: 10, y: 3 }); // default value
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 4,
          y: 4,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Crikey!',
          name: 'steve',
        },
        {
          id: 2,
          x: 37,
          y: 12,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Greetings',
          name: 'wiseman',
        },
      ]);
      setCurrentNPC('');
      setGates([
        {
          id: 1,
          x: 0,
          y: 20,
          map: 'enchantedForest',
          destPX: 564,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 2,
          x: 0,
          y: 21,
          map: 'enchantedForest',
          destPX: 564,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 3,
          x: 0,
          y: 22,
          map: 'enchantedForest',
          destPX: 564,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 4,
          x: 19,
          y: 10,
          map: 'village2inside',
          destPX: 0.5,
          destPY: 635.5,
          destX: 10,
          destY: 15,
        },
        {
          id: 5,
          x: 20,
          y: 10,
          map: 'village2inside',
          destPX: 0.5,
          destPY: 635.5,
          destX: 10,
          destY: 15,
        },
      ]);
    } else if (currentMap === 'village2inside') {
      setMapImage(village2inside);
      setForeImage(null);
      setTileSize(64);
      setMapColumns(20);
      setMapRows(20);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: 0.5,
          y: 635.5,
        });
        setCharPosition({ x: 10, y: 15 }); // default value
      }
      setIsFPressed(false);
      setNpcs([]);
      setCurrentNPC('');
      setGates([
        {
          id: 1,
          x: 9,
          y: 16,
          map: 'village2',
          destPX: 634.5,
          destPY: 375,
          destX: 19,
          destY: 11,
        },
        {
          id: 2,
          x: 10,
          y: 16,
          map: 'village2',
          destPX: 634.5,
          destPY: 375,
          destX: 19,
          destY: 11,
        },
      ]);
    }
  }, [currentMap]);

  return null;
};

export default Map_Switch;
