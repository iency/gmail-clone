import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
      <div className="app">
        <Header />

        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route exact path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  )
}

export default App;
