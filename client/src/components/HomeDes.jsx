import React, { Component } from 'react';
import Login from './auth/Login';
import Signup from './auth/Signup';

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
      form = <Signup getUser={this.getTheUser} handleSignup={this.handleSignup} />;
    } else {
      form = <Login getUser={this.getTheUser} handleSignup={this.handleSignup} />;
    }

    return (
      <div>
        <div className="">
          <div>
            <div className="card">
              <figure className="image is-4by3">
                <img src="img/home1.jpg" alt="Animals">
                </img>
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                A place where animal lovers become a community!
              </div>
            </div>
            {form}
          </div>
        </div>
        
        
        <div className="">
          <h1>Hello</h1>
        </div>
      </div>
    )
  }
}

  export default HomeNoUser;