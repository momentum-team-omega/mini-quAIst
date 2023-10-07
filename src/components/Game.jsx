import Nav from 'components/Nav';
import Map from 'components/Map';

const Game = () => {
  return (
    <>
      <Nav />
      <div className='game-container'>
        <Map />
      </div>
    </>
  );
};
export default Game;
