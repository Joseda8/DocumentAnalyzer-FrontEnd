import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import AuthBackground from "../src/components/auth/auth-background/auth-background";


function App() {
  return (
    <AuthBackground>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthBackground>
  );
}

export default App;
