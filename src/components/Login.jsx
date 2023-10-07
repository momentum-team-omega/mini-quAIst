import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';

const Login = ({ setToken, setIsLoggedIn }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className='login-container'>
      <Nav />
      <div className='content'>
        <div className='welcome-box'>
          <p className='mini-subtext'>WELCOME TO</p>
          <p className='mini-quaist'>MINI QUAIST</p>
          <div className='underline-container'>
            <Under />
          </div>
        </div>
        <div className='login-box'>
          <p className='declare-text'>Declare Thyself</p>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='username-input'>
              <label htmlFor='username' className='username-label'>
                Username:{' '}
              </label>
              <input
                className='username-input-box'
                type='text'
                name='username'
                id='username'
                required
                value={form.username}
                onChange={handleChange}
                onFocus={() => setError(null)}
              />
            </div>
            <div className='password-input'>
              <label htmlFor='password' className='password-label'>
                Password:{' '}
              </label>
              <input
                className='password-input-box'
                type='password'
                name='password'
                id='password'
                required
                value={form.password}
                onChange={handleChange}
                onFocus={() => setError(null)}
              />
            </div>
            {error && <div className='error-message'>{error}</div>}
            <div className='login-button-container'>
              <input type='submit' value='Log In' className='login-button' />
            </div>
          </form>
          <div className='reg-container'>
            <p className='reg-text'>Not a member? Sign up here: </p>
            <Link to='/register' className='reg-link'>
              Register
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
