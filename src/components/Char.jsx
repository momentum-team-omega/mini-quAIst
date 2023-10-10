import playerUp from 'assets/map-assets/playerUp.png';
import playerLeft from 'assets/map-assets/playerLeft.png';
import playerDown from 'assets/map-assets/playerDown.png';
import playerRight from 'assets/map-assets/playerRight.png';

const Char = ({ tileSize, direction, frame }) => {
  const images = {
    Up: playerUp,
    Down: playerDown,
    Left: playerLeft,
    Right: playerRight,
  };

  const backgroundImage = `url(${images[direction]})`;

  const bgPositionMap = {
    1: '0%',
    2: '33.33%',
    3: '66.66%',
    4: '100%',
  };

  return (
    <div
      className="main-character"
      style={{
        width: `${tileSize}px`,
        height: `${tileSize}px`,
        backgroundImage,
        backgroundPosition: `${bgPositionMap[frame]} 0%`,
        backgroundSize: '400% 100%',
      }}
    ></div>
  );
};
export default Char;
