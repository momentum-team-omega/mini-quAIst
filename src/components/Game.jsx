import Nav from 'components/Nav';
import Map from 'components/Map';

const Game = () => {
  return (
    <>
      <Nav />
      <div className='content'>
        <div className='game-container'>
          <Map />
        </div>
      </div>
    </>
  );
};
export default Game;
