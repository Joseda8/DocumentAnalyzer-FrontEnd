import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from 'axios';

import AuthService from './components/auth/auth-service'

ReactDOM.render(<App />, document.getElementById("root"));
axios.interceptors.request.use((config) => {
    const token = AuthService.token;

    // Checks if the token is invalid
    if(!token) return config;

    config.headers.Authorization = 'Bearer ' + token;
    return config;
});

AuthService.autoLogin();