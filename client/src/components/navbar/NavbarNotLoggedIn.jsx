import React, { Component } from "react";
import AuthService from "../auth/auth-service";

class NavbarNotLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  render() {
    return (
      <div className="navbar">
        <img src="/img/care.png" alt="logo" width="100px" className="logo" />
      </div>
    );
  }
}

export default NavbarNotLoggedIn;
