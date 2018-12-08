import React, { Component } from 'react';
import Login from './auth/Login';
import Signup from './auth/Signup';
// import NavbarNotLoggedIn from './navbar/NavbarNotLoggedIn';
import { Link } from 'react-router-dom';

class HomeNoUser extends Component {
  render () {
    return (
      <div>
        <section className="hero is-info is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Care For Your Pet
              </h1>
              <h2 className="subtitle">
              A place where animal lovers become a community!
              </h2>
            </div>
          </div>
        </section>
        <div className="outterDiv hero">
          <div className="card">
            <figure className="image is-4by3">
              <img src="img/retriever.jpg" alt="Animals">
              </img>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              Be part of this growing community!
            </div>
          </div>
          <Login fetchUser={this.props.fetchUser} />
          <span>Forgot your password?</span>
          <p>Don't have account? <Link to={"/signup"}> Signup</Link></p>
        </div>
      </div>
    )
  }
}

  export default HomeNoUser;