import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from "../auth/auth-service";

class NavbarNotLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28"></img>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavbarNotLoggedIn;
