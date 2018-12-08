import React, { Component } from "react";
import AuthService from "../auth/auth-service";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.service.logout().then(() => {
      this.props.fetchUser()
    });
  }

  render() {
    console.log("navbar", this.props);
    return (
      <div>
        <aside className="menu">
          <img src="img/logo.png" alt="logo" width="200px"></img>
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <Link to='/profile'>Profile</Link>
            <Link to='/pets'>My Pets</Link>
            <Link to='/my-establishments'>My Establishments</Link>
          </ul>
          <button onClick={this.logout} type="submit" name="logout" className="button is-link is-small">Logout</button>
        </aside>
      </div>
    );
  }
}

export default Navbar;
