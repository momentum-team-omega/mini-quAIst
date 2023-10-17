import { useEffect } from 'react';
import bridgeLeft from 'assets/map-assets/bridge-left-sheet.png';
import bridgeLeftFore from 'assets/map-assets/bridge-map-left-fore.png';
import bridgeRight from 'assets/map-assets/bridge-right-sheet.png';
import bridgeRightFore from 'assets/map-assets/bridge-map-right-fore.png';
import houseInside from 'assets/map-assets/house-inside-sheet.png';
import village1 from 'assets/map-assets/village1-map-sheet.png';
import village1Fore from 'assets/map-assets/village1-fore.png';
import trollMap from 'assets/map-assets/troll-map-sheet.png';
import trollMapFore from 'assets/map-assets/Troll-Map-Fore.png';
import testMap from 'assets/map-assets/TestMap-sheet.png';

const Map_Switch = ({
  currentMap,
  mapImage,
  setMapImage,
  setForeImage,
  setMapPosition,
  setCharPosition,
  setNpcs,
  setMapColumns,
  setMapRows,
  setGates,
  setTileSize,
  setMapOffset,
  setIsFPressed,
  hasMapSwitched,
}) => {
  useEffect(() => {
    if (!mapImage) {
      setMapImage(bridgeLeft);
    }
    if (currentMap === 'bridgeLeft') {
      setMapImage(bridgeLeft);
      setForeImage(bridgeLeftFore);
      setTileSize(48);
      setMapColumns(11);
      setMapRows(11);
      setMapOffset({ x: 13, y: 8 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -377,
          y: -102,
        });
        setCharPosition({ x: 5, y: 5 });
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 1,
          y: 1,
          steps: 1,
          animationSpeed: 0,
          alive: true,
          triggered: false,
          message: "Press 'F'",
          name: 'chest',
        },
        {
          id: 2,
          x: 6,
          y: 8,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Greetings',
          name: 'wiseman',
        },
        {
          id: 3,
          x: 8,
          y: 8,
          steps: 1,
          animationSpeed: 0,
          alive: true,
          triggered: false,
          message: "Press 'F'",
          name: 'chest',
        },
      ]);
      setGates([
        {
          id: 1,
          x: 10,
          y: 4,
          map: 'bridgeRight',
          destPX: -576,
          destPY: -102,
          destX: 1,
          destY: 5,
        },
        {
          id: 2,
          x: 10,
          y: 5,
          map: 'bridgeRight',
          destPX: -576,
          destPY: -102,
          destX: 1,
          destY: 5,
        },
        {
          id: 3,
          x: 10,
          y: 6,
          map: 'bridgeRight',
          destPX: -576,
          destPY: -102,
          destX: 1,
          destY: 5,
        },
      ]);
    } else if (currentMap === 'bridgeRight') {
      setMapImage(bridgeRight);
      setForeImage(bridgeRightFore);
      setTileSize(48);
      setMapColumns(11);
      setMapRows(11);
      setMapOffset({ x: 13, y: 8 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -377,
          y: -102,
        });
        setCharPosition({ x: 5, y: 5 });
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 2,
          y: 1,
          steps: 1,
          animationSpeed: 0,
          alive: true,
          triggered: false,
          message: "Press 'F'",
          name: 'chest',
        },
        {
          id: 2,
          x: 1,
          y: 8,
          steps: 1,
          animationSpeed: 0,
          alive: true,
          triggered: false,
          message: "Press 'F'",
          name: 'chest',
        },
        {
          id: 3,
          x: 7,
          y: 7,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Greetings',
          name: 'wiseman',
        },
      ]);
      setGates([
        {
          id: 1,
          x: 0,
          y: 4,
          map: 'bridgeLeft',
          destPX: -179.5,
          destPY: -102,
          destX: 9,
          destY: 5,
        },
        {
          id: 2,
          x: 0,
          y: 5,
          map: 'bridgeLeft',
          destPX: -179.5,
          destPY: -102,
          destX: 9,
          destY: 5,
        },
        {
          id: 3,
          x: 0,
          y: 6,
          map: 'bridgeLeft',
          destPX: -179.5,
          destPY: -102,
          destX: 9,
          destY: 5,
        },
        {
          id: 4,
          x: 7,
          y: 4,
          map: 'houseInside',
          destPX: -347.5,
          destPY: 93,
          destX: 5,
          destY: 9,
        },
        {
          id: 5,
          x: 8,
          y: 4,
          map: 'houseInside',
          destPX: -347.5,
          destPY: 93,
          destX: 5,
          destY: 9,
        },
      ]);
    } else if (currentMap === 'houseInside') {
      setMapImage(houseInside);
      setForeImage(null);
      setTileSize(48);
      setMapColumns(11);
      setMapRows(11);
      setMapOffset({ x: 13, y: 8 });
      if (!hasMapSwitched) {
        setMapPosition({
          x: -377,
          y: 95.5,
        });
        setCharPosition({ x: 5, y: 9 });
      }
      setIsFPressed(false);
      setNpcs([
        {
          id: 1,
          x: 2,
          y: 8,
          steps: 1,
          animationSpeed: 0,
          alive: true,
          triggered: false,
          message: "Press 'F'",
          name: 'chest',
        },
        {
          id: 2,
          x: 3,
          y: 2,
          steps: 2,
          animationSpeed: 800,
          alive: true,
          triggered: false,
          message: 'Greetings',
          name: 'wiseman',
        },
        {
          id: 3,
          x: 8,
          y: 2,
          steps: 1,
          animationSpeed: 0,
          alive: true,
          triggered: false,
          message: "Press 'F'",
          name: 'chest',
        },
      ]);
      setGates([
        {
          id: 1,
          x: 5,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 2,
          x: 6,
          y: 10,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
      ]);
    } else if (currentMap === 'village1') {
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
        setMapPosition({
          x: -538,
          y: -85,
        });
        setCharPosition({ x: 1, y: 4 });
      }
      setIsFPressed(false);
      setNpcs([{}]);
      setGates([
        {
          id: 1,
          x: 0,
          y: 3,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 2,
          x: 0,
          y: 4,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 3,
          x: 0,
          y: 5,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 4,
          x: 19,
          y: 3,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 5,
          x: 19,
          y: 4,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
        },
        {
          id: 6,
          x: 19,
          y: 5,
          map: 'bridgeRight',
          destPX: -252,
          destPY: -112,
          destX: 8,
          destY: 5,
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
        setMapPosition({
          x: -538,
          y: -85,
        });
        setCharPosition({ x: 1, y: 4 });
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
    }
  }, [currentMap]);

  return null;
};

export default Map_Switch;
