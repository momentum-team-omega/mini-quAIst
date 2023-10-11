import { useState, useEffect, useContext } from 'react';

const Char_Move = ({
  setPosition,
  setDirection,
  setFrame,
  tileSize,
  charPosition,
  setCharPosition,
  allowedMovements,
}) => {
  const [isMoving, setIsMoving] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  const [keys, setKeys] = useState({
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
  });

  const pixelToGridPosition = (pixelPosition) => {
    return {
      x: Math.floor(pixelPosition.x / tileSize) + 13,
      y: Math.floor(pixelPosition.y / tileSize) + 8,
    };
  };

  const [keyOrder, setKeyOrder] = useState([]);

  const DEFAULT_MOVE_SPEED = 2.5;
  const RUN_MOVE_SPEED = 5;
  const DEFAULT_ANIMATION_SPEED = 80;
  const RUN_ANIMATION_SPEED = 40;

  const moveCharacter = () => {
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
        console.log(`gridPos: ${JSON.stringify(gridPos)}`);

        return { x: newX, y: newY };
      });
    }
  };

  const updateAnimationFrame = () => {
    if (isMoving) {
      setFrame((prevFrame) => (prevFrame % 4) + 1);
    } else {
      setFrame(0);
    }
  };

  useEffect(() => {
    const handleDownKey = (e) => {
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
        setDirection({ w: 'Up', a: 'Left', s: 'Down', d: 'Right' }[keyPressed]);
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
    };

    window.addEventListener('keydown', handleDownKey);
    window.addEventListener('keyup', handleUpKey);

    return () => {
      window.removeEventListener('keydown', handleDownKey);
      window.removeEventListener('keyup', handleUpKey);
    };
  }, []);

  useEffect(() => {
    let moveCounter = 0;
    let frameCounter = 0;

    const frameIntervalSpeed = isSpacePressed
      ? RUN_ANIMATION_SPEED
      : DEFAULT_ANIMATION_SPEED;

    const mainInterval = setInterval(() => {
      moveCharacter();

      moveCounter += 20;
      frameCounter += 20;

      if (frameCounter >= frameIntervalSpeed) {
        updateAnimationFrame();
        frameCounter = 0;
      }
    }, 20);

    return () => {
      clearInterval(mainInterval);
    };
  }, [isMoving, keys, isSpacePressed]);

  useEffect(() => {
    setIsMoving(
      keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed
    );
  }, [keys]);

  useEffect(() => {
    if (keyOrder.length > 0) {
      const lastKey = keyOrder[keyOrder.length - 1];
      setDirection({ w: 'Up', a: 'Left', s: 'Down', d: 'Right' }[lastKey]);
    }
  }, [keyOrder]);

  return null;
};

export default Char_Move;
