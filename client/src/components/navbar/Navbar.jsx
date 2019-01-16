import React, { Component } from "react";
import AuthService from "../auth/auth-service";
import { Link, Redirect } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, redirect: false };
    this.service = new AuthService();
    this.logout = this.logout.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  logout() {
    this.service.logout().then(() => {
      this.props.fetchUser();
      console.log(this.props.fetchUser());
      this.setRedirect();
    });
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <aside className="">
          <img src="img/care.png" alt="logo" width="100px" />
          <p className="">General</p>
          <ul className="menu-list">
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/pets">My Pets</Link>
            <Link to="/my-establishments">My Establishments</Link>
          </ul>
          <button
            onClick={this.logout}
            type="submit"
            name="logout"
            className="button is-warning is-small">
            Logout
          </button>
        </aside>
      </div>
    );
  }
}

export default Navbar;
