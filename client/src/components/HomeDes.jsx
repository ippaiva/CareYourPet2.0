import React, { Component } from 'react';
import Login from './auth/Login';
import { Link } from 'react-router-dom';
import NavbarNotLoggedIn from './navbar/NavbarNotLoggedIn';

class HomeNoUser extends Component {
  render () {
    return (
      <div className="HomeNoUser">
      <NavbarNotLoggedIn />
        <div className="outterDiv">
          <h1 className="title is-1">Care For Your Pet</h1>
          <h2 className="subtitle">A place where pet lovers become a community!</h2>
          <Login fetchUser={this.props.fetchUser} />
          <span>Forgot your password?</span>
          <p>Don't have account? <Link to={"/signup"}> Signup</Link></p>
        </div>
      </div>
    )
  }
}

  export default HomeNoUser;