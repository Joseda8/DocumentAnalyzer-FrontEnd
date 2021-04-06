import axios from 'axios';
import history from '../../services/history'

export class AuthService {
  static token;
  
  static AUTHAPI_URL = 'http://localhost:16293/';

  static storeToken(token) {
    this.token = token;
    sessionStorage.setItem(btoa('token'), btoa(token));
  }

  static autoLogin() {
    let storedToken = sessionStorage.getItem(btoa('token'));
    if(!storedToken) return;

    // The token is stored
    this.token = atob(storedToken);
    
    // Redirection to the files page
    history.push({
      pathname: '/files',
      state: { detail: this.state }
    })
  }

  static loginRequest(email, password) {
    return axios.post(this.AUTHAPI_URL + 'Login', {
      email: email,
      password: btoa(password), // The password is encrypted in base 64
    });
  }
}

export default AuthService;
