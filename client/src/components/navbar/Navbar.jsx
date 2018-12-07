import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/auth-service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to = '/'>Meu Perfil</Link></li>
        </ul>
        <aside className="menu">
          <img src="img/logo.svg" alt="logo"></img>
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p className="menu-label">Administration</p>
          <ul className="menu-list">
            <li><a>Team Settings</a></li>
            <li><a className="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p className="menu-label">Transactions</p>
          <ul className="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Navbar;
