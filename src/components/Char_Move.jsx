import { useEffect, useContext } from 'react';
import MapContext from 'contexts/MapContext';

const Char_Move = ({ position, setPosition, MAP_SIZE }) => {
  const { mapData, setMapData } = useContext(MapContext);
  const unwalkableTiles = ['darkgreen', 'blue', 'brown', 'papayawhip'];

  // const isWalkable = (x, y) => {
  //   if (mapData) {
  //     if (x < 0 || x >= MAP_SIZE || y < 0 || y >= MAP_SIZE) {
  //       return false;
  //     }

  //     const roundedX = Math.round(x);
  //     const roundedY = Math.round(y);

  //     return !unwalkableTiles.includes(mapData[roundedY][roundedX]);
  //   }
  // };

  useEffect(() => {
    const handleKeyPress = (event) => {
      let newX = position.x;
      let newY = position.y;

      switch (event.key) {
        case 'ArrowUp':
        case 'w':
          newY -= 1;
          event.preventDefault();
          break;
        case 'ArrowDown':
        case 's':
          newY += 1;
          event.preventDefault();
          break;
        case 'ArrowLeft':
        case 'a':
          newX -= 1;
          event.preventDefault();
          break;
        case 'ArrowRight':
        case 'd':
          newX += 1;
          event.preventDefault();
          break;
        default:
          break;
      }

      // if (isWalkable(newX, newY)) {
      setPosition({ x: newX, y: newY });
      console.log('position: ', position);
      // } else {
      // console.log('Collision detected at:', newX, newY);
      // }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  return null;
};

export default Char_Move;
