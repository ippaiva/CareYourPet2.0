import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import Navbar from './components/navbar/Navbar';
import ProtectedRoute from './components/auth/protected-route';
import NavbarNotLoggedIn from './components/navbar/NavbarNotLoggedIn';
import HomeNoUser from './components/HomeDes';
import HomeLog from './components/HomeLog';
import Profile from './components/user/Profile';
import Pets from './components/user/Pets';
import MyEstablishments from './components/establishments/MyEstablishments';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: '', serverResponse: false };
    this.service = new AuthService();
    this.fetchUser = this.fetchUser.bind(this);
  }

  fetchUser = () => {
    if (this.state.loggedInUser === '') {
      this.service.loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response.data,
          serverResponse: true
        });
      })
      .catch( err => {
        this.setState({
          loggedInUser: false
        })
      })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    if(this.serverResponse === true){

    }
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.fetchUser} />
          <BrowserRouter>
            <Switch>
              <ProtectedRoute user={this.state.loggedInUser} path='/home' component={HomeLog} />
              <ProtectedRoute user={this.state.loggedInUser} path='./components/user/Profile.jsx' component={Profile} />
              <ProtectedRoute user={this.state.loggedInUser} path='./components/user/Pets.jsx' component={Pets} />
              <ProtectedRoute user={this.state.loggedInUser} path='./components/establishments/MyEstablishments.jsx' component={MyEstablishments} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavbarNotLoggedIn userInSession={this.state.loggedInUser}/>
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
