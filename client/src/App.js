import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import EstablishmentsList from './components/establishments/EstablishmentsList';
import AddEstablishment from './components/establishments/AddEstablishment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
        <AddEstablishment/>
       
      </div>
    );
  }
}

export default App;
