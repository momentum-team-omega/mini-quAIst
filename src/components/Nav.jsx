import { Link, useLocation } from 'react-router-dom';
import homeIcon from 'assets/favicon.png';

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
          {pathname !== '/login' && pathname !== '/register' ? (
            <Link to="/login">
              <div className="loginText">login</div>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Nav;
