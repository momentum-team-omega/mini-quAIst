import { Link } from 'react-router-dom';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';
import playButton from 'assets/home-assets/play-button.png';
import buttonImg from 'assets/home-assets/button-img.png';
import '/src/styles/Home.css';
import { useContext } from 'react';
import GameContext from 'contexts/GameContext';

const Home = () => {
  const { mute, setMute } = useContext(GameContext);

  const toggleMute = () => {
    setMute((prevMute) => !prevMute);
  };

  return (
    <div className="homeContainer">
      <Nav />
      <div className="content">
        <div className="welcome-box">
          <p className="mini-subtext">WELCOME TO</p>
          <p className="mini-quaist">MINI QUAIST</p>
          <div className="underline-container">
            <Under />
          </div>
        </div>
        <div className="link-container">
          <p className="link-subtext">YOUR ADVENTURE AWAITS</p>
          <Link to="/play" className="button-img-link" onClick={toggleMute}>
            <div className="button-img-container">
              <img className="play-button" src={playButton} />
              <div className="img-shadow" />
              <img className="button-img" src={buttonImg} />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
