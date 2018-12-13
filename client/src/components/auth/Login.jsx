// auth/Login.jsx
import React, { Component } from "react";
import AuthService from "./auth-service";
import InputText from "../forms/InputText";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
    this.handleHome = this.props.handleHome;
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.service
      .login(username, password)
      .then(response => {
        this.setRedirect();
        this.props.fetchUser();
      })
      .catch(error => console.log(error));
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <form onSubmit={this.handleFormSubmit}>
          <InputText
            label="Username:"
            fieldName="username"
            placeHolder="French Bulldog"
            value={this.state.username}
            handleChange={this.handleChange}
          />
          <InputText
            label="Password:"
            fieldName="password"
            placeHolder="hackYourLife"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <button className="button is-warning" type="submit" value="Login">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
