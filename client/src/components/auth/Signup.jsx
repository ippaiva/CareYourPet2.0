// auth/Signup.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth-service";
import InputText from "../forms/InputText";
import NavbarNotLoggedIn from "../navbar/NavbarNotLoggedIn";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
      zipcode: "",
      address: "",
      redirect: false,
      errorMessage: ""
    };
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here
  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const lastName = this.state.lastName;
    const username = this.state.username;
    const email = this.state.email;
    const address = this.state.address;
    const zipcode = this.state.zipcode;
    const phone = this.state.phone;
    const password = this.state.password;

    this.service
      .signup(
        username,
        password,
        name,
        lastName,
        email,
        phone,
        zipcode,
        address
      )
      .then(response => {
        console.log(response.data.code, response.data.message);
        if (response.data.code !== 400) {
          this.setState({
            username,
            password,
            redirect: true
          });
          this.props.getUser(response);
        } else {
          this.setState({ errorMessage: response.data.message });
        }
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <NavbarNotLoggedIn />

        <div className="signupContainer">
          <div className="signupBack">
            <form onSubmit={this.handleFormSubmit}>
              <InputText
                label="Name:"
                fieldName="name"
                placeHolder="Digite seu nome"
                value={this.state.name}
                handleChange={this.handleChange}
              />

              <InputText
                label="Last Name:"
                fieldName="lastName"
                placeHolder="Digite seu sobrenome"
                value={this.state.lastName}
                handleChange={this.handleChange}
              />

              <InputText
                label="Username:"
                fieldName="username"
                placeHolder="Digite um username"
                value={this.state.username}
                handleChange={this.handleChange}
              />

              <InputText
                label="Email:"
                fieldName="email"
                placeHolder="Digite um email"
                value={this.state.email}
                handleChange={this.handleChange}
              />

              <InputText
                label="Address:"
                fieldName="address"
                placeHolder="Av. Dos Mano"
                value={this.state.address}
                handleChange={this.handleChange}
              />

              <InputText
                label="ZipCode:"
                fieldName="zipcode"
                placeHolder="07114030"
                value={this.state.zipcode}
                handleChange={this.handleChange}
              />

              <InputText
                label="Phone Number:"
                fieldName="phone"
                placeHolder="199998000342"
                value={this.state.phone}
                handleChange={this.handleChange}
              />

              <InputText
                label="Password:"
                fieldName="password"
                placeHolder="Digite uma senha"
                value={this.state.password}
                handleChange={this.handleChange}
              />

              <input
                className="button is-warning is-small"
                type="submit"
                value="Signup"
              />
              <span>{this.state.errorMessage}</span>
              <p>
                Already have account?
                <Link to="/">Login</Link>
              </p>
            </form>
          </div>

          <div className="signupImage">
            <img src="/img/kid.jpg" alt="Kid hugging a pug" />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
