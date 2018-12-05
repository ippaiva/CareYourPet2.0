import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import EstablishmentsList from './components/establishments/EstablishmentsList';
import AddEstablishment from './components/establishments/AddEstablishment';
import Navbar from './components/navbar/Navbar'
import Bulma from 'bulma';
import ProtectedRoute from './components/auth/protected-route';

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

  getUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    {this.fetchUser()}
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch>
            <ProtectedRoute user={this.state.loggedInUser} path='/establishments' component={EstablishmentsList} />
            <ProtectedRoute user={this.state.loggedInUser} path='/establishments/add' component={AddEstablishment} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
       </div>
      )
    }
  }
}

export default App;
