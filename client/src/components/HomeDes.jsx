import React, { Component } from 'react';
import Login from './auth/Login';
import Signup from './auth/Signup';
import NavbarNotLoggedIn from './navbar/NavbarNotLoggedIn';

class HomeNoUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isSignUp: false
    };
  }

  handleSignup = () => {
    let signup = !this.state.isSignUp;
    this.setState({isSignUp: signup});
  }

  render () {
    let form;
    if (this.state.isSignUp) {
      form = <Signup handleSignup={this.handleSignup} handleHome={this.props.getUser} />;
    } else {
      form = <Login handleSignup={this.handleSignup} handleHome={this.props.getUser} />;
    }
    return (
      <div>
        <div className="">
        <NavbarNotLoggedIn />
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
                <img src="img/retriever.jpg" alt="Golden Retriever with Hooman">
                </img>
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                Be part of this growing community!
              </div>
            </div>
            {form}
          </div>
        </div>
      </div>
    )
  }
}

  export default HomeNoUser;