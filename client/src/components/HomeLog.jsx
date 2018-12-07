import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Login from './auth/Login';
import Signup from './auth/Signup';

class HomeLog extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isSignUp: false
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        
      </div>
    )
  }
}


  export default HomeLog;