import React, { useState } from 'react';
import axios from 'axios';
import styles from './sigin.module.css'; // Import CSS module
import digiImage from './imgs/leftside.jpg';
import { Link, useNavigate } from 'react-router-dom'; // Importation de useNavigate
import { useUser } from './UserContext'; // Import the custom hook

const LoginRegister = () => {
  const activeInput = (event) => {
    let input = event.target;
    if (window.innerWidth > 600) {
      input.style.border = '1px solid #0B253E';
    } else {
      input.style.border = 'none';
    }
  };
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form with:', { email, password });

    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email,
        password,
      });

      console.log('Response data:', response.data);
      setUser(response.data);
      alert('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.row}>
          <img src={digiImage} alt="img" className={styles.img} />
        </div>
        <div className={styles.row}>
          <form
            onSubmit={handleSubmit}
            className={`${styles.form} ${styles.active}`}
            id="login"
          >
            <h2 className={styles.h2login}>Login</h2>
            
            <label htmlFor="email">Email Address</label>
            <div className={styles['pass-reset']}>
              <input
                type="email"
                name="email"
                className={styles.email}
                id="emailInput"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                onClick={activeInput}
              />
            </div>
            <label htmlFor="password">Password</label>
            <div className={styles['pass-reset']}>
              <input
                type="password"
                className={styles.password}
                name="password"
                id="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                onClick={activeInput}
              />
            </div>
            <div className={`${styles['pass-reset']} ${styles['remember-box']}`}>
              <input type="checkbox" name="remember" className={styles.remember} id="remember" />
              <span className={styles['remember-text']}>Remember Password</span>
            </div>
            <button type="submit" className={`${styles.btn}`}>
              Login
            </button>
            <p>
              Don't have an account?
              <Link to="/registration" className={styles.astyle}>
                Sign up
              </Link>
            </p>
            <p className={styles.or}>or</p>
            <button
              type="button"
              className={` ${styles['bt-gogle-auth']}`}
            >
              <i
                className={`ri-google-fill ${styles['google-icon']} ${styles.mt10}`}
              ></i>
              Authorize with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
