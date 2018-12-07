import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import EstablishmentsList from './components/establishments/EstablishmentsList';
import AddEstablishment from './components/establishments/AddEstablishment';
import Navbar from './components/navbar/Navbar'
import ProtectedRoute from './components/auth/protected-route';
import NavbarNotLoggedIn from './components/navbar/NavbarNotLoggedIn'
import HomeNoUser from './components/HomeDes'
import HomeLog from './components/HomeLog'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.fetchUser = this.fetchUser.bind(this);
  }

  fetchUser() {
    if (this.state.loggedInUser === null) { 
      this.service.loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response.data
        });
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

  logout = () => {
    this.setState({
      loggedinUser: null
    })
  }

  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
          {/* <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} /> */}
          <BrowserRouter>
            <Switch>
              <ProtectedRoute user={this.state.loggedInUser} path='/' component={HomeLog} />
              <ProtectedRoute user={this.state.loggedInUser} path='/establishments/add' component={AddEstablishment} />
              <ProtectedRoute user={this.state.loggedInUser} path='/establishments' component={EstablishmentsList} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div className="App">
          {/* <NavbarNotLoggedIn userInSession={this.state.loggedInUser} getUser={this.getTheUser} /> */}
          <BrowserRouter>
            <Switch>
              <Route exact path='/' render={() => <HomeNoUser getUser={this.fetchUser}/>}/>
            </Switch>
          </BrowserRouter>
        </div>
      )
    }
  }
}

export default App;
