import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import EstablishmentsList from './components/establishments/EstablishmentsList';
import AddEstablishment from './components/establishments/AddEstablishment';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser: response
        })
      })
      .catch( err => {
        this.setState({
          loggedInUser: false
        })
      })
    }
  }

  render() {
    return (
      <div className="App">

        
        <AddEstablishment/>
       
      </div>
    );
  }
}

export default App;
