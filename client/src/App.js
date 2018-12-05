import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bulma from 'bulma';

import AuthService from './components/auth/auth-service';
import EstablishmentsList from './components/establishments/EstablishmentsList';
import AddEstablishment from './components/establishments/AddEstablishment';
import Navbar from './components/navbar/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import ProtectedRoute from './components/auth/protected-route';
import NavbarNotLoggedIn from './components/navbar/NavbarNotLoggedIn'


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

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
        <BrowserRouter>
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch>
            <ProtectedRoute user={this.state.loggedInUser} path='/establishments' component={EstablishmentsList} />
            <ProtectedRoute user={this.state.loggedInUser} path='/establishments/add' component={AddEstablishment} />
          </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavbarNotLoggedIn userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <BrowserRouter>
          <Switch>
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path='/' render={() => <Login getUser={this.getTheUser}/>}/>
          </Switch>
          </BrowserRouter>
        </div>
      )
    }
  }
}

export default App;
