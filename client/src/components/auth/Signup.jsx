// auth/Signup.js

import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import InputText from '../forms/InputText';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', name: '', lastName: '', email: '', phone: '', zipcode: '', address: '' };
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const name = this.state.name;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const phone = this.state.phone;
    const zipcode = this.state.zipcode;
    const address = this.state.address;
  
    this.service.signup(username, password, name, lastName, email, phone, zipcode, address)
    .then( response => {
        this.setState({
            Username: "", 
            Password: "",
        });
         this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    console.log('handleChange', event.target)
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {
    console.log('The user was submitted: ' + this.state.username);
    event.preventDefault();
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <InputText label="Name" fieldName="name" placeHolder="Digite um nome" value={this.state.name} handleChange={this.handleChange} />

        <InputText label="Password" fieldName="password" placeHolder="Digite uma senha" value={this.state.password} handleChange={this.handleChange} />
        <input type="submit" value="Signup" />
      </form>
      <p>Already have account? 
          <Link to={"/"}> Login</Link>
      </p>

    </div>
    )
  }
}

export default Signup;
//export default User;