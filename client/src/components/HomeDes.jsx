import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar/Navbar';

class HomeNoUser extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
  }

  render () {
    return (
      <div>
        <div className="">
          <div>
            <h1>Care For Your Pet</h1>
            <p>
              A place where animal lovers become a community.
            </p>
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