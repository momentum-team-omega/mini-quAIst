import { Link, useLocation } from 'react-router-dom';
import '/src/styles/Footer.css';

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  const handleLogout = () => {
    null;
  };

  return (
    <>
      <div className="footer">
        <div className="footerLinks">
          {pathname !== '/home' ? (
            <div className="footerLinkContainer">
              <Link to={{ pathname: '/home' }} className="footerLink">
                Home
              </Link>
            </div>
          ) : null}
          {pathname !== '/wiki' ? (
            <div className="footerLinkContainer">
              <Link to="/wiki" className="footerLink">
                Wiki
              </Link>
            </div>
          ) : null}
          <div className="footerLinkContainer">
            <Link to="/play" className="footerLink">
              Play
            </Link>
          </div>
        </div>
        <div className="contributors">
          <p className="footerText">@CRiddleNC</p>
          <p className="footerText">@duffing09</p>
          <p className="footerText">@merrick-vogt</p>
        </div>
        <div className="contributors">
          <p className="footerText">@Davis-Patterson</p>
          <p className="footerText">@WilkinsJay</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
