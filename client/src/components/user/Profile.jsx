import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1>ROMULOBICHAO PROFILES</h1>
      </div>
    )
  }
}

export default Profile;