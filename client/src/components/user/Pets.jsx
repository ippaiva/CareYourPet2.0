import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar';

class Pets extends Component {
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
        <h1>PETS</h1>
      </div>
    )
  }
}


  export default Pets;