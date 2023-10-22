import { Link } from 'react-router-dom';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';
import playButton from 'assets/home-assets/play-button.png';
import buttonImg from 'assets/home-assets/button-img.png';
import '/src/styles/Home.css';

const Home = () => {
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
          <Link to="/play" className="button-img-link">
            <div className="button-img-container">
              <img className="play-button" src={playButton} />
              <div className="img-shadow" />
              <img className="button-img" src={buttonImg} />
            </div>
          </Link>
          {/* <p className="link-subtext">(click on the box)</p> */}
        </div>
        {/* <div className="battle-container">
          <Link to="/battle" className="battle=link">
            BATTLE (temp)
          </Link>
          <Link to="/dialogue" className="battle=link">
            DIALOGUE (temp)
          </Link>
          <Link to="/create" className="battle=link">
            CREATE (temp)
          </Link>
          <Link to="/check" className="battle=link">
            CHECK (temp)
          </Link>
          <Link to="/inventory" className="battle=link">
            INVENTORY (temp)
          </Link>
          <Link to="/scene" className="battle=link">
            CUT SCENE (temp)
          </Link>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
