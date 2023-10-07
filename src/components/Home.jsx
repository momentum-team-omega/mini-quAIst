import { Link } from 'react-router-dom';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <div className='homeContainer'>
      <Nav />
      <div className='welcome-box'>
        <p className='mini-subtext'>WELCOME TO</p>
        <p className='mini-quaist'>MINI QUAIST</p>
        <div className='underline-container'>
          <Under />
        </div>
      </div>
      <div className='link-container'>
        <p className='link-subtext'>YOUR ADVENTURE AWAITS</p>
        <Link to='/play' className='button-img'>
          <img src='/src/assets/button-img.png'></img>
        </Link>
        <p className='link-subtext'>(click on the box)</p>
      </div>
      <div className='battle-container'>
        <Link to='/battle' className='battle=link'>
          BATTLE
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
