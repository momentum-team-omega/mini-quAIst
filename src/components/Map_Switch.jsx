import { useEffect, useContext } from 'react';
import trollMap from 'assets/map-assets/troll-map-sheet.png';
import trollMapCat from 'assets/map-assets/troll-map-cat-sheet.png';
import trollMapFore from 'assets/map-assets/Troll-Map-Fore.png';
import startMap from 'assets/map-assets/startMap-sheet.png';
import startMapFore from 'assets/map-assets/startMap-fore.png';
import startHouse from 'assets/map-assets/startHouse-sheet.png';
import enchantedForest from 'assets/map-assets/enchantedForest-sheet.png';
import enchantedForestFore from 'assets/map-assets/enchantedForest-fore.png';
import enchantedForestLocked from 'assets/map-assets/enchantedForestLocked-sheet.png';
import village2 from 'assets/map-assets/village2-sheet.png';
import village2Locked from 'assets/map-assets/village2locked-sheet.png';
import village2LockedFore from 'assets/map-assets/Village2Locked-fore.png';
import village2Fore from 'assets/map-assets/Village2-fore.png';
import village2inside from 'assets/map-assets/village2inside-sheet.png';
import village2insideFore from 'assets/map-assets/village2inside-fore.png';

import GameContext from 'contexts/GameContext';

const Map_Switch = ({
  setMapImage,
  setForeImage,
  setMapPosition,
  setCharPosition,
  setMapColumns,
  setMapRows,
  setGates,
  setTileSize,
  setMapOffset,
  hasMapSwitched,
  setMapNpcs,
}) => {
  const storedMapPosition = localStorage.getItem('mapPosition');
  const { currentMap, checkpoints, setCurrentNPC, npcs, setIsFPressed } =
    useContext(GameContext);

  useEffect(() => {
    if (currentMap === 'startHouse') {
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
        setCharPosition({ x: 5.5, y: 5 });
      }
      setIsFPressed(false);
      setMapNpcs([]);
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
      setMapNpcs([]);
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
          map: checkpoints[1] ? 'enchantedForest' : 'enchantedForestLocked',
          destPX: -553.5,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 3,
          x: 19,
          y: 9,

          map: checkpoints[1] ? 'enchantedForest' : 'enchantedForestLocked',
          destPX: -553.5,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
        },
        {
          id: 4,
          x: 19,
          y: 10,

          map: checkpoints[1] ? 'enchantedForest' : 'enchantedForestLocked',
          destPX: -553.5,
          destPY: 1835.5,
          destX: 0,
          destY: 0,
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
        setMapPosition({
          x: 224,
          y: -96,
        });
        setCharPosition({ x: 13.5, y: 4 });
      }
      setIsFPressed(false);
      setMapNpcs([
        {
          npc: npcs.find((npc) => npc.id === 5),
          x: 11,
          y: 4,
        },
      ]);
      setCurrentNPC('troll');
      setGates([
        {
          id: 1,
          x: 0,
          y: 3,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
          destPX: 1840.5,
          destPY: 753,
          destX: 0,
          destY: 0,
        },
        {
          id: 2,
          x: 0,
          y: 4,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
          destPX: 1840.5,
          destPY: 753,
          destX: 0,
          destY: 0,
        },
        {
          id: 3,
          x: 0,
          y: 5,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
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
    } else if (currentMap === 'trollMapCat') {
      setMapImage(trollMapCat);
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
      setMapNpcs([
        {
          npc: npcs.find((npc) => npc.id === 5),
          x: 11,
          y: 4,
        },
      ]);
      setCurrentNPC('troll');
      setGates([
        {
          id: 1,
          x: 0,
          y: 3,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
          destPX: 1840.5,
          destPY: 753,
          destX: 0,
          destY: 0,
        },
        {
          id: 2,
          x: 0,
          y: 4,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
          destPX: 1840.5,
          destPY: 753,
          destX: 0,
          destY: 0,
        },
        {
          id: 3,
          x: 0,
          y: 5,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
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
        setCharPosition({ x: 5, y: 5 });
      }
      setIsFPressed(false);
      setMapNpcs([
        {
          npc: npcs.find((npc) => npc.id === 1),
          x: 15,
          y: 4,
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
        setCharPosition({ x: 5, y: 5 });
      }
      setIsFPressed(false);
      setMapNpcs([
        {
          npc: npcs.find((npc) => npc.id === 1),
          x: 15,
          y: 4,
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
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
          destPX: -543,
          destPY: 1007.5,
          destX: 1,
          destY: 21,
        },
        {
          id: 5,
          x: 19,
          y: 34,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
          destPX: -543,
          destPY: 1007.5,
          destX: 1,
          destY: 21,
        },
        {
          id: 6,
          x: 19,
          y: 35,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
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
            x: 634,
            y: 424,
          });
        }
        setCharPosition({ x: 19.5, y: 12 });
      }
      setIsFPressed(false);
      setMapNpcs([
        {
          npc: npcs.find((npc) => npc.id === 2),
          x: 4,
          y: 4,
        },
        {
          npc: npcs.find((npc) => npc.id === 4),
          x: 37,
          y: 12,
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
          map: checkpoints[4] ? 'trollMap' : 'trollMapCat',
          destPX: -555.5,
          destPY: -82.5,
          destX: 1,
          destY: 4,
        },
        {
          id: 7,
          x: 39,
          y: 17,
          map: checkpoints[4] ? 'trollMap' : 'trollMapCat',
          destPX: -555.5,
          destPY: -82.5,
          destX: 1,
          destY: 4,
        },
        {
          id: 8,
          x: 39,
          y: 18,
          map: checkpoints[4] ? 'trollMap' : 'trollMapCat',
          destPX: -555.5,
          destPY: -82.5,
          destX: 1,
          destY: 4,
        },
      ]);
    } else if (currentMap === 'village2Locked') {
      setMapImage(village2Locked);
      setForeImage(village2LockedFore);
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
        setCharPosition({ x: 10, y: 3 });
      }
      setIsFPressed(false);
      setMapNpcs([
        {
          npc: npcs.find((npc) => npc.id === 2),
          x: 4,
          y: 4,
        },
        {
          npc: npcs.find((npc) => npc.id === 4),
          x: 19,
          y: 12,
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
      ]);
    } else if (currentMap === 'village2Locked2') {
      setMapImage(village2Locked);
      setForeImage(village2LockedFore);
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
        setCharPosition({ x: 10, y: 3 });
      }
      setIsFPressed(false);
      setMapNpcs([
        {
          npc: npcs.find((npc) => npc.id === 2),
          x: 4,
          y: 4,
        },
        {
          npc: npcs.find((npc) => npc.id === 4),
          x: 37,
          y: 12,
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
      setForeImage(village2insideFore);
      setTileSize(64);
      setMapColumns(20);
      setMapRows(20);
      setMapOffset({ x: 9.5, y: 6 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: 0.5,
          y: 635.5,
        });
        setCharPosition({ x: 10, y: 15 });
      }
      setIsFPressed(false);
      setMapNpcs([
        {
          npc: npcs.find((npc) => npc.id === 3),
          x: 10,
          y: 9,
        },
      ]);
      setCurrentNPC('');
      setGates([
        {
          id: 1,
          x: 9,
          y: 16,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
          destPX: 634.5,
          destPY: 375,
          destX: 19,
          destY: 11,
        },
        {
          id: 2,
          x: 10,
          y: 16,
          map:
            checkpoints[2] && !checkpoints[3]
              ? 'village2Locked2'
              : checkpoints[3]
              ? 'village2'
              : 'village2Locked',
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
