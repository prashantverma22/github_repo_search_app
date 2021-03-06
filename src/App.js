import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import firebase from 'firebase/app';
import 'firebase/auth';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import {UserContext} from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';

import Firebase from './config/Firebase';

firebase.initializeApp(Firebase);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/signin' component = {Signin} />
          <Route exact path = '/signup' component = {Signup} />
          <Route exact path = '*' component = {NotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>   
    </Router>    
  );
}

export default App;
