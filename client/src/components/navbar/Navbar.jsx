import React, { Component } from "react";
import AuthService from "../auth/auth-service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState({
      loggedinUser: null
    })
  }

  render() {
    return (
      <div>
        <aside className="menu">
          <img src="img/logo2.svg" alt="logo" width="200px"></img>
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li><a href="#j">My Profile </a></li>
            <li><a href="#y">My Establishments</a></li>
          </ul>
          <button onClick={this.logout} type="submit" name="logout">Logout</button>
        </aside>
      </div>
    );
  }
}

export default Navbar;
