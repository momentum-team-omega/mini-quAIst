import { useState, useEffect, useContext } from 'react';
import GameContext from './GameContext';

const Char_Move = ({
  setPosition,
  setDirection,
  tileSize,
  setCharPosition,
  allowedMovements,
  mapOffset,
}) => {
  const {
    menu,
    inventory,
    setInventory,
    setMenu,
    isMoving,
    setIsMoving,
    isSpacePressed,
    setIsSpacePressed,
    setIsFPressed,
  } = useContext(GameContext);

  const [keys, setKeys] = useState({
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
  });

  const gridToPixelPosition = (gridPosition) => {
    return {
      x: (gridPosition.x - mapOffset.x) * tileSize - tileSize - 8 / 2,
      y: (gridPosition.y - mapOffset.y) * tileSize + tileSize / 2,
    };
  };

  const pixelToGridPosition = (pixelPosition) => {
    // console.log('tileSize: ', tileSize);
    return {
      x:
        Math.floor((pixelPosition.x + tileSize + 8 / 2) / tileSize) +
        mapOffset.x,
      y: Math.floor((pixelPosition.y - tileSize / 2) / tileSize) + mapOffset.y,
    };
  };

  const [keyOrder, setKeyOrder] = useState([]);

  const DEFAULT_MOVE_SPEED = 2.5;
  const RUN_MOVE_SPEED = 5;

  const moveCharacter = () => {
    if (!menu) {
      const actualMoveSpeed = isSpacePressed
        ? RUN_MOVE_SPEED
        : DEFAULT_MOVE_SPEED;

      if (isMoving && keyOrder.length > 0) {
        setPosition((currentPos) => {
          let newX = currentPos.x;
          let newY = currentPos.y;
          // console.log(`currentPos: ${currentPos.x}, ${currentPos.y}`);
          const lastKey = keyOrder[keyOrder.length - 1];
          switch (lastKey) {
            case 'ArrowUp':
            case 'w':
              if (allowedMovements.up) newY -= actualMoveSpeed;
              break;
            case 'ArrowLeft':
            case 'a':
              if (allowedMovements.left) newX -= actualMoveSpeed;
              break;
            case 'ArrowDown':
            case 's':
              if (allowedMovements.down) newY += actualMoveSpeed;
              break;
            case 'ArrowRight':
            case 'd':
              if (allowedMovements.right) newX += actualMoveSpeed;
              break;
          }
          const gridPos = pixelToGridPosition({ x: newX, y: newY });
          setCharPosition(gridPos);

          localStorage.setItem('charPosition', JSON.stringify(gridPos));
          localStorage.setItem(
            'mapPosition',
            JSON.stringify(gridToPixelPosition(gridPos))
          );

          // console.log(`X: ${newX}, Y: ${newY}`);
          // console.log('gridPos: ', gridPos);

          return { x: newX, y: newY };
        });
      }
    }
  };

  useEffect(() => {
    const handleDownKey = (e) => {
      if (!menu) {
        let keyPressed = null;
        switch (e.key) {
          case 'ArrowUp':
          case 'w':
            keyPressed = 'w';
            break;
          case 'ArrowLeft':
          case 'a':
            keyPressed = 'a';
            break;
          case 'ArrowDown':
          case 's':
            keyPressed = 's';
            break;
          case 'ArrowRight':
          case 'd':
            keyPressed = 'd';
            break;
        }
        if (keyPressed) {
          e.preventDefault();
          setDirection(
            { w: 'Up', a: 'Left', s: 'Down', d: 'Right' }[keyPressed]
          );
          setKeyOrder((prevOrder) => [
            ...prevOrder.filter((key) => key !== keyPressed),
            keyPressed,
          ]);
          setKeys((prevKeys) => ({
            ...prevKeys,
            [keyPressed]: { pressed: true },
          }));
        }
        if (e.key === ' ') {
          setIsSpacePressed(true);
          e.preventDefault();
        }
        if (e.key === 'f') {
          e.preventDefault();
          setIsFPressed(true);
        }
      }
    };

    const handleUpKey = (e) => {
      let keyReleased = null;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          keyReleased = 'w';
          break;
        case 'ArrowLeft':
        case 'a':
          keyReleased = 'a';
          break;
        case 'ArrowDown':
        case 's':
          keyReleased = 's';
          break;
        case 'ArrowRight':
        case 'd':
          keyReleased = 'd';
          break;
      }
      if (keyReleased) {
        setKeyOrder((prevOrder) =>
          prevOrder.filter((key) => key !== keyReleased)
        );
        setKeys((prevKeys) => ({
          ...prevKeys,
          [keyReleased]: { pressed: false },
        }));
      }
      if (e.key === ' ') {
        setIsSpacePressed(false);
      }
      if (e.key === ' ') {
        setIsFPressed(false);
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
    const isAnyKeyPressed =
      keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed;
    setIsMoving(isAnyKeyPressed);
  }, [keys]);

  useEffect(() => {
    if (keyOrder.length > 0) {
      const lastKey = keyOrder[keyOrder.length - 1];
      setDirection({ w: 'Up', a: 'Left', s: 'Down', d: 'Right' }[lastKey]);
    }
  }, [keyOrder]);

  useEffect(() => {
    let intervalId;

    if (isMoving) {
      intervalId = setInterval(() => {
        moveCharacter();
      }, 20);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isMoving, keyOrder, isSpacePressed]);

  useEffect(() => {
    const handleMenuKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenu((prevMenu) => !prevMenu);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        setInventory((prevInventory) => !prevInventory);
      }
    };

    window.addEventListener('keydown', handleMenuKey);

    return () => {
      window.removeEventListener('keydown', handleMenuKey);
    };
  }, [setMenu, setInventory]);

  return null;
};

export default Char_Move;
