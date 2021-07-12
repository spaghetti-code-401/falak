import React, { useRef } from 'react';
import './signin_signup.scss';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LoginStart, LoginSuccess, LoginFailure } from '../context/AuthActions';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginCall = async (userCredentials, dispatch) => {
      dispatch(LoginStart);

      try {
        const res = await axios.post(
          `https://api-social-mern.herokuapp.com/api/auth/login`,
          userCredentials
        );
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

  return (
    <div className="signIn">
      <div className="signInWrapper glass">
        <div className="signInLeft">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            nostrum facere quasi ipsum culpa quae pariatur quia recusandae omnis
          </p>
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
          <p>Don't have an account?</p>

          <Link to="/signup">
            <button
              // variant="contained"
              // color="secondary"
              className="newAccountButton glass2">
              Create a new account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
