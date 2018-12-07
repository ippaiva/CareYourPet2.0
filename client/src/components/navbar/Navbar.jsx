import React, { Component } from "react";
import AuthService from "../auth/auth-service";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import Profile from '../user/Profile';
>>>>>>> 03da5c2312800300626734a4f2fa749a4290bd4b

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
            <Link to='/Profile'>Profile</Link>
            <Link to='/Pets'>My Pets</Link>
            <Link to='/MyEstablishments'>My Establishments</Link>
          </ul>
          <button onClick={this.logout} type="submit" name="logout">Logout</button>
        </aside>
      </div>
    );
  }
}

export default Navbar;
