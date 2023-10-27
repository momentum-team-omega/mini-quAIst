import { Link, useLocation } from 'react-router-dom';
import homeIcon from 'assets/favicon.png';
import '/src/styles/Nav.css';

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className="navBar">
        <div className="homeLinkContainer">
          <Link to="/home" className="nav-home-link">
            <img src={homeIcon} className="home-icon"></img>
          </Link>
        </div>
        <div className="loginContainer">
          {pathname !== '/wiki' ? (
            <Link to="/wiki">
              <div className="loginText">wiki</div>
            </Link>
          ) : (
            <Link to="/play">
              <div className="loginText">play</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Nav;
