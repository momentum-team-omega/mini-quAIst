import { useEffect, useContext } from 'react';
import CollisionContext from 'contexts/CollisionContext';

const Char_Move = ({
  position,
  setPosition,
  TILE_SIZE,
  MOVE_SPEED,
  setDirection,
  setFrame,
}) => {
  const collisionMap = useContext(CollisionContext);

  const keys = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
  };

  // const checkCollision = (newX, newY) => {
  //   const gridX = Math.floor(newX / TILE_SIZE);
  //   const gridY = Math.floor(newY / TILE_SIZE);

  //   console.log(`Checking collision at gridX: ${gridX}, gridY: ${gridY}`);

  //   return collisionMap[gridY][gridX] === 1025;
  // };

  const moveCharacter = () => {
    let isMoving =
      keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed;

    if (isMoving) {
      setPosition((currentPos) => {
        let newX = currentPos.x;
        let newY = currentPos.y;

        if (keys.w.pressed) newY -= MOVE_SPEED;
        if (keys.a.pressed) newX -= MOVE_SPEED;
        if (keys.s.pressed) newY += MOVE_SPEED;
        if (keys.d.pressed) newX += MOVE_SPEED;

        // if (checkCollision(Math.floor(newX / 48), Math.floor(currentPos.y / 48)))
        //   newX = currentPos.x;
        // if (checkCollision(Math.floor(currentPos.x / 48), Math.floor(newY / 48)))
        //   newY = currentPos.y;

        // console.log(
        //   `Moving from x: ${currentPos.x}, y: ${currentPos.y} to x: ${newX}, y: ${newY}`
        // );

        return { x: newX, y: newY };
      });

      setFrame((prevFrame) => (prevFrame % 4) + 1);
    }
  };

  useEffect(() => {
    const handleDownKey = (e) => {
      e.preventDefault();

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          setDirection('Up');
          keys.w.pressed = true;
          break;
        case 'ArrowLeft':
        case 'a':
          setDirection('Left');
          keys.a.pressed = true;
          break;
        case 'ArrowDown':
        case 's':
          setDirection('Down');
          keys.s.pressed = true;
          break;
        case 'ArrowRight':
        case 'd':
          setDirection('Right');
          keys.d.pressed = true;
          break;
      }
    };

    const handleUpKey = (e) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          keys.w.pressed = false;
          break;
        case 'ArrowLeft':
        case 'a':
          keys.a.pressed = false;
          break;
        case 'ArrowDown':
        case 's':
          keys.s.pressed = false;
          break;
        case 'ArrowRight':
        case 'd':
          keys.d.pressed = false;
          break;
      }
    };

    window.addEventListener('keydown', handleDownKey);
    window.addEventListener('keyup', handleUpKey);

    return () => {
      window.removeEventListener('keydown', handleDownKey);
      window.removeEventListener('keyup', handleUpKey);
    };
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(moveCharacter, 100);

    return () => {
      clearInterval(moveInterval);
    };
  }, []);

  return null;
};

export default Char_Move;
