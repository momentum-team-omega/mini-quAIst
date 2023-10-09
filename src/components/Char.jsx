import playerUp from 'assets/playerUp.png';
import playerLeft from 'assets/playerLeft.png';
import playerDown from 'assets/playerDown.png';
import playerRight from 'assets/playerRight.png';

const Char = ({ TILE_SIZE, direction, frame }) => {
  const images = {
    Up: playerUp,
    Down: playerDown,
    Left: playerLeft,
    Right: playerRight,
  };

  const backgroundImage = `url(${images[direction]})`;
  // console.log('backgroundImage: ', backgroundImage);

  const bgPositionMap = {
    1: '0%',
    2: '25%',
    3: '50%',
    4: '75%',
  };

  return (
    <div
      className="main-character"
      style={{
        width: `${TILE_SIZE}px`,
        height: `${TILE_SIZE}px`,
        backgroundImage,
        backgroundPosition: `${bgPositionMap[frame]} 0%`,
        backgroundSize: '400% 100%',
      }}
    >
      {/* <img src={playerDown} className="character-img"></img> */}
    </div>
  );
};
export default Char;
