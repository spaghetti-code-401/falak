import React, { useRef } from 'react';
import './signin_signup.scss';
import { Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import useAPI from '../hooks/useAPI';

export default function SignUp() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const API = useAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity('Passwords do not match!');
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };
      try {
        await axios.post(`${API}auth/register`, user);
        // on successful sign up, redirect to sign in
        history.push('/signin');
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(password);
  console.log(passwordAgain);

  return (
    <div className="signIn">
      <div className="signUpWrapper glass">
        <div className="signInLeft">
          <h1>falak</h1>
          <p>Share your thoughts 💡, bugs 🐛 and lack of sleep 😪</p>
        </div>
        <div className="signInRight glass2">
          <form className="form" onSubmit={handleSubmit}>
            <input
              ref={username}
              placeholder="Username"
              className="input glass2"
              type="text"
              required
            />
            <input
              ref={email}
              required
              placeholder="Email"
              className="input glass2"
              type="email"
            />
            <input
              ref={password}
              required
              placeholder="Password"
              className="input glass2"
              type="password"
              minLength="8"
            />
            <input
              ref={passwordAgain}
              required
              placeholder="Password Again"
              className="input glass2"
              type="password"
            />
            <hr className="hr" />
            <button type="submit" className="button glass2 signUpButton">
              Sign Up
            </button>
          </form>
          <p className="loginOr">Already have an account?</p>
          <Link to="/signin" className="loginButtonWrapper">
            <button className="newAccountButton glass2">log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
