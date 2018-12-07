import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
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
    console.log(props);
  }

  handleSignup = () => {
    console.log('click handle')
    let signup = !this.state.isSignUp;
    this.setState({isSignUp: signup});
  }

  render () {

    let form;

    if (this.state.isSignUp) {
      form = <Signup getUser={this.getTheUser} handleSignup={this.handleSignup} />;
    } else {
      form = <Login getUser={this.getTheUser} handleSignup={this.handleSignup} handleHome={this.props.fetchUser} />;
    }

    return (
      <div>
        <div className="">
        <Navbar/>
          <div>
            <div className="card">
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
          <h1></h1>
        </div>
      </div>
    )
  }
}

  export default HomeNoUser;