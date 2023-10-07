import Nav from 'components/Nav';
import Map from 'components/Map';

const BattleTemp = () => {
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
export default BattleTemp;
