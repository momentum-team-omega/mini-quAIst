import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation;
  const { pathname } = location;

  const handleLogout = () => {
    null;
  };

  return (
    <>
      <div className='footer'>
        <div className='footerLinks'>
          <div className='footerLinkContainer'>
            {pathname !== '/home' ? (
              <Link to={{ pathname: '/' }} className='footerLink'>
                Home
              </Link>
            ) : null}
          </div>
          <div className='footerLinkContainer'>
            <Link to='/login' className='footerLink'>
              Login
            </Link>
          </div>
        </div>
        <div className='contributors'>
          <p className='footerText'>@CRiddleNC</p>
          <p className='footerText'>@duffing09</p>
          <p className='footerText'>@merrick-vogt</p>
        </div>
        <div className='contributors'>
          <p className='footerText'>@Davis-Patterson</p>
          <p className='footerText'>@WilkinsJay</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
