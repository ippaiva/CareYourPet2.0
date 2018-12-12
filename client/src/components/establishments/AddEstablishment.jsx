import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar'

class AddEstablishment extends Component {
  constructor(props){
      super(props);
      this.state = { 
        establishmentName: "",
        address: "",
        zipCode:"",
        phone:"",
        type:"",
        services:[],
        workingHours:[]
      };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const EstablishmentName = this.state.establishmentName;
    const Address = this.state.address;
    const ZipCode = this.state.zipCode;
    const Phone = this.state.phone;
    const Type = this.state.type;
    const Services = this.state.services;
    const WorkingHour = this.state.workingHours;
  
    axios.post("http://localhost:5000/establishments/create", { EstablishmentName, Address, ZipCode, Phone, Type, Services, WorkingHour }, {withCredentials:true})
    .then( () => {
        // this.props.getData();
        this.setState({
          establishmentName: "",
          address: "",
          zipCode: "",
          phone: "",
          type: "",
          services: "",
          workingHours: ""
        });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {
      const {name, value} = event.target;
      console.log(value);
      this.setState({[name]: value});
      console.log(this.state)
  }

  render(){
    return(
      <div className="add-establishment">
      <Navbar className="sidebar" />
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Establishment Name: </label>
            <input className="input is-rounded" type="text" name="establishmentName" value={this.state.establishmentName} onChange={ e => this.handleChange(e)}/>
            <label>Address:</label>
            <input className="input is-rounded" name="address" value={this.state.address} onChange={ e => this.handleChange(e)} />
            <label>ZipCode: </label>
            <input className="input is-rounded" name="zipcode" value={this.state.ZipCode} onChange={ e => this.handleChange(e)} />
            <label>Phone: </label>
            <input className="input is-rounded" name="phone" value={this.state.phone} onChange={ e => this.handleChange(e)} />
            <div className="select is-rounded is-small">
              <select name ="type" onChange={ e => this.handleChange(e)} value={this.state.type}>
                <option value="">Type of Establishment...</option>
                <option value="PETSHOP">PETSHOP</option>
                <option value="HOTEL">HOTEL</option>
                <option value="VETERINARIO">VETENARIAN</option>
                <option value="OUTROS">OTHERS</option>
              </select>
            </div>
            <div>     
            <label>Services: </label>
            <input className="input is-rounded" name="services" value={this.state.services} onChange={ e => this.handleChange(e)} />
            </div> 
            <label>Working Hour: </label>
            <input className="input is-rounded"  name="workingHours" value={this.state.workingHours} onChange={ e => this.handleChange(e)} />
            <button className="button is-warning is-small" type="submit" value="Submit" onClick={this.props.callbackFromParent}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddEstablishment;
