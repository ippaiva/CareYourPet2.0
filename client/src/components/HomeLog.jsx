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
        <Navbar logout={this.props.logout}/>
        
      </div>
    )
  }
}


  export default HomeLog;