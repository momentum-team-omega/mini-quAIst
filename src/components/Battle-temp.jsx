import Nav from "components/Nav";
import Battle from "components/Battle";

const BattleTemp = () => {
  return (
    <>
      <Nav />
      <div className='content'>
        <div className='game-container'>
          <Battle />
        </div>
      </div>
    </>
  );
};
export default BattleTemp;
