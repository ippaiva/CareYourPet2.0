import React, { Component } from 'react';
import axios from 'axios';

class AddEstablishment extends Component {
  constructor(props){
      super(props);
      this.state = { establishmentName: "", address: "", zipCode:"", phone:"", type:"", services:[], workingHours:[]};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const Establishment = this.state.establishmentName;
    const Address = this.state.address;
    const ZipCode = this.state.zipCode;
    const Phone = this.state.phone;
    const Type = this.state.type;
    const Services = this.state.services;
    const WorkingHour = this.state.workingHours;
  
    axios.post("http://localhost:5000/api/create", { Establishment, Address, ZipCode, Phone, Type, Services, WorkingHour }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({ establishmentName: "", address: "", zipCode: "", phone: "", type: "", services: "", workingHours: "" });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {
    console.log('mateus', event.target.name)  
      const {name, value} = event.target;
    
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="add-establishment">
        <form onSubmit={this.handleFormSubmit}>
          <label>Establishment Name: </label>
          <input className="input is-rounded" type="text" name="establishmentName" value={this.state.establishmentName} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <input name="address" value={this.state.address} onChange={ e => this.handleChange(e)} />
          <input name="zipcode" value={this.state.zipCode} onChange={ e => this.handleChange(e)} />
          <input name="address" value={this.state.phone} onChange={ e => this.handleChange(e)} />
          <input name="address" value={this.state.type} onChange={ e => this.handleChange(e)} />
          <input name="address" value={this.state.services} onChange={ e => this.handleChange(e)} />
          <input name="address" value={this.state.workingHours} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddEstablishment;