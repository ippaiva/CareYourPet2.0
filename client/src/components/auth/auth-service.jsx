import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, name, lastName, email, phone, zipCode, address) => {
    return this.service.post('/signup', {
      username, password, name, lastName, email, phone, zipCode, address
      })
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {
        username,
        password
      })
      .then(response => response.data)
  }
  
  logout = () => {
    return this.service.get('/logout')
      .then(response => response)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
      .then(response => response)
  }


}

export default AuthService;