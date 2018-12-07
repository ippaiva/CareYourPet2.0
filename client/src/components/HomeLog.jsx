import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import EstablishmentsList from './establishments/EstablishmentsList';
import AddEstablishment from './establishments/AddEstablishment';

class HomeUser extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
  }

  render () {
    return (
      <div>
        <div className="">
          <div>
            <h1>Care For Your Pet Logado</h1>
            <p>
              A place where animal lovers become a community.
            </p>
          </div>
        </div>
        <div className="">
          <EstablishmentsList/>
        </div>
      </div>
    )
  }
}

  export default HomeUser;