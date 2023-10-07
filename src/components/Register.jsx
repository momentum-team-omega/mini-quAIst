import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'components/Nav';
import Under from 'components/Under';
import Footer from 'components/Footer';

const Register = ({ setToken, setIsLoggedIn }) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
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

    if (form.password === confirmPassword) {
      navigate(-1);
    } else {
      setError('Passwords must match');
    }
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
          <p className='registration-text'>Who Are Ye?</p>
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
              />
            </div>
            <div className='email-input'>
              <label htmlFor='email' className='email-label'>
                Email:{' '}
              </label>
              <input
                className='email-input-box'
                type='email'
                name='email'
                id='email'
                required
                value={form.email}
                onChange={handleChange}
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
            <div className='confirm-password-input'>
              <label
                htmlFor='confirmPassword'
                className='confirm-password-label'
              >
                Confirm:{' '}
              </label>
              <input
                className='password-input-box'
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                onFocus={() => setError(null)}
              />
            </div>
            {error && <div className='error-message'>{error}</div>}
            <div className='login-button-container'>
              <input type='submit' value='Register' className='login-button' />
            </div>
          </form>
          <div className='log-container'>
            <p className='log-text'>Already a member?</p>
            <Link to='/login' className='log-link'>
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
