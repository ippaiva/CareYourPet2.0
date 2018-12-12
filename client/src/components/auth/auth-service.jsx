import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, name, lastName, email, phone, zipCode, address) => {
    return this.service.post('/api/auth/signup', {
      username, password, name, lastName, email, phone, zipCode, address
      })
      .then(response => response)
  }

  login = (username, password) => {
    return this.service.post('/api/auth/login', {
        username,
        password
      })
      .then(response => response.data)
  }
  
  logout = () => {
    return this.service.get('/api/auth/logout')
      .then(response => response)
  }

  loggedin = () => {
    return this.service.get('/api/auth/loggedin')
      .then(response => response)
  }

  getAllEstablishments = () => {
    return this.service.get(`/establishments/allEst/list`)
      .then(response => response);
  }

  getEstablishments = (id) => {
    return this.service.get(`/establishments/all/${id}`)
      .then(response => response);
  }
}

export default AuthService;