import React, { Component } from "react";
import AuthService from "../auth/auth-service";

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
        <ul>
          {/* <li><Link to = '/'>Meu Perfil</Link></li> */}
        </ul>
        <aside className="menu">
          <img src="img/logo2.svg" alt="logo" width="200px"></img>
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li><a href="#j">Meu Perfil</a></li>
            <li><a href="#y">Meus Estabelecimentos</a></li>
          </ul>
          <button type="submit" name="logout" onClick={() => this.logout()} >Log Out</button>
        </aside>
      </div>
    );
  }
}

export default Navbar;
