import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.loggedInUser.username,
      password: this.props.loggedInUser.password,
      name: this.props.loggedInUser.name,
      lastName: this.props.loggedInUser.lastName,
      email: this.props.loggedInUser.email,
      phone: this.props.loggedInUser.phone,
      zipcode: this.props.loggedInUser.zipcode,
      address: this.props.loggedInUser.address
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    console.log(value);
    this.setState({[name]: value});
    console.log(this.state)
}

  render() {
    console.log(this.props.loggedInUser)
    return (
      <div className="sidebarContainerProfile">
        {/* <div className="sidebar"> */}
          <Navbar />
        {/* </div> */}
        <div className="formContainerOutter">
          <div className="formContainer">
            <form className="form" method="get">
              <h1 className="title is-1" >My Profile</h1>
              Username: <input type="text" name="Username" value={this.state.username} onChange={ e => this.handleChange(e)} /><br></br>
              Name: <input type="text" name="Name" value={this.state.name} onChange={ e => this.handleChange(e)} /><br></br>
              Last Name: <input type="text" name="LastName" value={this.state.lastName} onChange={ e => this.handleChange(e)} /><br></br>
              Email: <input type="text" name="Email" value={this.state.email} onChange={ e => this.handleChange(e)} /><br></br>
              Phone: <input type="text" name="Phone" value={this.state.phone} onChange={ e => this.handleChange(e)} /><br></br>
              Zipcode: <input type="text" name="Zipcode" value={this.state.zipcode} onChange={ e => this.handleChange(e)} /><br></br>
              Address: <input type="text" name="Address" value={this.state.address} onChange={ e => this.handleChange(e)} /><br></br>
            </form>
            
          </div>
    
        </div>
    
      </div>
    )
  }
};

export default Profile;
