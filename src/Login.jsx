import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({ user }) => {
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      }))
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://cdn.vox-cdn.com/thumbor/K-q2WRPRyxxzzPLjxHGt26swMfM=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg" alt="" />
      <Button className='login__button' variant="container" color="primary" onClick={signIn}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
