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
      <div >
        <div>
          <Navbar />
        </div>

        <h1>PETS</h1>
        
      </div>
    )
  }
}

export default Pets;