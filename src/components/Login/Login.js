import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../helpers/reducer';

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt="slack-logo"
        />
        <h1>Sign in to Slack Clone</h1>
        <p>slackclone.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
