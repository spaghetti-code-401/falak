import React, { useRef } from 'react';
import './signin_signup.scss';
import { Link } from 'react-router-dom';
import { LoginStart, LoginSuccess, LoginFailure } from '../context/AuthActions';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import useAPI from '../hooks/useAPI';

export default function SignIn() {
  const email = useRef();
  const password = useRef();
  const API = useAPI();

  const { user, isFetching, error, dispatch } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginCall = async (userCredentials, dispatch) => {
      dispatch(LoginStart);

      try {
        const res = await axios.post(`${API}auth/login`, userCredentials);
        dispatch(LoginSuccess(res.data));
      } catch (err) {
        dispatch(LoginFailure(err));
      }
    };
    try {
      loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleGuest=()=>{
    const loginCall = async (userCredentials, dispatch) => {
      dispatch(LoginStart);
      try {
        const res = await axios.post(
          `${API}auth/login`,
          userCredentials
        );
        dispatch(LoginSuccess(res.data));
      } catch (err) {
        dispatch(LoginFailure(err));
      }
    };
    try {
      loginCall(
        { email: 'someonee@something.noscom', password: 'passwordouss' },
        dispatch
      );
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="signIn">
      <div className="signInWrapper glass">
        <div className="signInLeft">
          <h1>falak</h1>
          <p>Share your thoughts 💡, bugs 🐛 and lack of sleep 😪</p>
        </div>
        <div className="signInRight glass2">
          <form className="form" onSubmit={handleSubmit}>
            <input
              ref={email}
              placeholder="Email"
              className="input glass2"
              type="email"
            />
            <input
              ref={password}
              placeholder="Password"
              className="input glass2"
              type="password"
            />
            <hr className="hr" />

            <button
              type="submit"
              // variant="contained"
              // color="primary"
              className="button glass2 loginButton">
              Log In
            </button>
          </form>
          <p className="loginOr">or</p>
            <Link to="/signup" className="signupButtonWrapper">
              <button
                className="newAccountButton glass2">
                Create a new account
              </button>
            </Link>
          <p className="loginOrMaybe">or maybe even</p>
            <button
              onClick={handleGuest}
              className="guestAccountButton glassGreen">
              Use a guest account
            </button>
        </div>
      </div>
    </div>
  );
}
