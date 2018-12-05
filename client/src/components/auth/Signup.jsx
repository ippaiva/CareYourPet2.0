// auth/Signup.js

import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import FormField from '../forms/FormField';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', name: '', lastName: '', email: '', phone: '', zipcode: '', address: '' };
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here
  handleFormSubmit = (event) => {
    event.preventDefault();
    const Username = this.state.username;
    const Password = this.state.password;
    const Name = this.state.name;
    const LastName = this.state.lastName;
    const Email = this.state.email;
    const Phone = this.state.phone;
    const ZipCode = this.state.zipcode;
    const Address = this.state.address;
  
    this.service.signup(Username, Password, Name, LastName, Email, Phone, ZipCode, Address)
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
        <label>Username:</label>
        <input type="text" name="username" value={this.state.Username} onChange={ e => this.handleChange(e)}/>
        
        <label>Password:</label>
        <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
        
        <input type="submit" value="Signup" />
      </form>
      {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}

      <p>Already have account? 
          <Link to={"/"}> Login</Link>
      </p>

    </div>
    )
  }
}

export default Signup;
//export default User;