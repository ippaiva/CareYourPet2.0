import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthService from "./components/auth/auth-service";
import ProtectedRoute from "./components/auth/protected-route";
import HomeDes from "./components/HomeDes";
import HomeLog from "./components/HomeLog";
import Signup from "./components/auth/Signup";
import Profile from "./components/user/Profile";
import Pets from "./components/user/Pets";
import MyEstablishments from "./components/establishments/MyEstablishments";
import AddEstablishment from "./components/establishments/AddEstablishment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: "",
      serverResponse: false,
      establishmentName: "",
      address: "",
      zipCode: "",
      phone: "",
      type: "",
      services: "",
      workingHours: "",

    };
    this.service = new AuthService();
    this.fetchUser = this.fetchUser.bind(this);
    this.setUser = this.setUser.bind(this);

    console.log(this.test);
  }

  fetchUser = () => {
    this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response.data,
          serverResponse: true
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: ''
        });
      });
  };

  setUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  componentDidMount() {
    this.fetchUser();
  }

  updateGrandparent(a, b, c, d, e, f, g) {
    this.setState = {
      establishmentName: a,
      address: b,
      zipCode: c,
      phone: d,
      type: e,
      services: f,
      workingHours: g
    }
  }

  render() {
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => { return !this.state.loggedInUser ? 
                <HomeDes fetchUser={this.fetchUser} /> : <Redirect to='/home'/>}} />
              <ProtectedRoute fetchUser={this.fetchUser} user={this.state.loggedInUser} exact path="/home" component={HomeLog}/>
              <Route exact path="/signup" render={() => { return !this.state.loggedInUser ? 
                <Signup getUser={this.setUser} /> : <Redirect to='/home'/>}} />
              <ProtectedRoute user={this.state.loggedInUser} path='/profile' fetchUser={this.fetchUser} component={Profile}/>
              <ProtectedRoute user={this.state.loggedInUser} path='/pets' component={Pets}/>
              <ProtectedRoute user={this.state.loggedInUser} updateGrandparent={this.updateGrandparent} path='/my-establishments' component={MyEstablishments} />
              <ProtectedRoute user={this.state.loggedInUser} path='/add-establishment' component={AddEstablishment}/>
            </Switch>
          </BrowserRouter>
        </div>
      );
   }
}

export default App;
