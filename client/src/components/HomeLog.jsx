import React, { Component } from 'react';
import Navbar from './navbar/Navbar';

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