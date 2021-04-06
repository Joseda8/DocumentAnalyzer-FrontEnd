import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from 'axios';

import AuthService from './components/auth/authservice'

ReactDOM.render(<App />, document.getElementById("root"));
axios.interceptors.request.use();

AuthService.autoLogin();