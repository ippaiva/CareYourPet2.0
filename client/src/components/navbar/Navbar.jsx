import React, { Component } from "react";
import AuthService from "../auth/auth-service";
import { Link } from 'react-router-dom'

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
            <Link to='../user/Profile.jsx'>Profile</Link>
            <Link to='../user/Pets.jsx'>My Pets</Link>
            <Link to='../establishments/MyEstablishments.jsx'>My Establishments</Link>
          </ul>
          <button type="submit" name="logout" onClick={() => this.logout()} >Log Out</button>
        </aside>
      </div>
    );
  }
}

export default Navbar;
