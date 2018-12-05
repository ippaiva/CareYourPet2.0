// EstablishmentsList
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddEstablishment from './AddEstablishment';


class EstablishmentsList extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
   // this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <div className="establishmentList">
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input class="input is-rounded" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
        
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default EstablishmentsList;