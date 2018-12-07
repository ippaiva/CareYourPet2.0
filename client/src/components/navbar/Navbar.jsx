import React, { Component } from "react";
import AuthService from "../auth/auth-service";
import { Link } from 'react-router-dom';
import Profile from '../user/Profile';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  logout(){
    this.service.logout().then(() => {
      this.fetchUser()
    });
  }

  render() {
    return (
      <div>
        <aside className="menu">
          <img src="img/logo2.svg" alt="logo" width="200px"></img>
          <p className="menu-label">CareYourPet - General</p>
          <ul className="menu-list">
            <Link to='/Profile'>Profile</Link>
            <Link to='/Pets'>My Pets</Link>
            <Link to='/MyEstablishments'>My Establishments</Link>
          </ul>
          <button type="submit" name="logout" onClick={() => this.logout()} >Log Out</button>
        </aside>
      </div>
    );
  }
}

export default Navbar;
