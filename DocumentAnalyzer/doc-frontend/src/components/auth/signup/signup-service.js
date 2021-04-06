import axios from "axios";

export class SignupService {
  static AUTHAPI_URL = "http://localhost:16293/";

  static signupRequest(fullName, email, password) {
    return axios.post(this.AUTHAPI_URL + "Signup", {
      fullName: fullName,
      email: email,
      password: btoa(password), // The password is encrypted in base 64
    });
  }
}

export default SignupService;
