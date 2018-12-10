import React, { Component } from 'react';
import AuthService from "../auth/auth-service";

class NavbarNotLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  render() {
    return (
      // <nav className="navbar" role="navigation" aria-label="main navigation">
      //   <div className="navbar-brand">
      //     <a className="navbar-item" href="/home">
      //       <img src="/img/care.png" alt="logo" height="100%"></img>
      //     </a>
      //   </div>
      // </nav>
      <div className="navbar">
        <img src="/img/care.png" alt="logo"/>
      </div>
    );
  }
}

export default NavbarNotLoggedIn;
