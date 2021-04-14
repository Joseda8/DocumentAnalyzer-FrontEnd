import axios from 'axios';
import history from '../../services/history';
import { AUTHAPI_URL } from '../../helpers/constants';

export class AuthService {
  static token;
  
  static AUTHAPI_URL;

  static storeToken(token) {
    this.token = token;
    sessionStorage.setItem(btoa('token'), btoa(token));

    this.AUTHAPI_URL = AUTHAPI_URL;
  }

  static autoLogin() {
    let storedToken = sessionStorage.getItem(btoa('token'));
    if(!storedToken) return;

    // The token is stored
    this.token = atob(storedToken);
    
    // Checks if the user is on the login page or in the default page
    const currentPath = history.location.pathname;
    if(!(currentPath === '/login' || currentPath === '/')) return; 
    
    // Redirection to the files page
    history.push({
      pathname: '/files',
      state: { detail: this.state }
    })
  }

  static loginRequest(email, password) {
    return axios.post(AUTHAPI_URL + 'Login', {
      email: email,
      password: btoa(password), // The password is encrypted in base 64
    });
  }
}

export default AuthService;
