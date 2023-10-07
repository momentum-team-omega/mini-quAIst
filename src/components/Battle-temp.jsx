import Nav from 'components/Nav';
import Map from 'components/Battle';

const BattleTemp = () => {
  return (
    <>
      <Nav />
      <div className='game-container'>
        <Battle />
      </div>
    </>
  );
};
export default BattleTemp;
