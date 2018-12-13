import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

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
      <div className="sidebarContainer">
        <div className="sidebar">
          <Navbar />
        </div>

        <div className="pets">
          <h1 className="title is-1">My Pets</h1>
        </div>
        
      </div>
    )
  }
}

export default Pets;
