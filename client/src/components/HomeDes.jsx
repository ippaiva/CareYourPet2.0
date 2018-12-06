import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar/Navbar';

class HomeDes extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
  }

  render () {
    return (
      <div>
        <div className="homeDes">
          <Navbar />

        </div>
        <div className="homeDes2">
          <h1>Hello how are you?</h1>
        </div>
      </div>
    )
  }
}

  export default HomeDes;