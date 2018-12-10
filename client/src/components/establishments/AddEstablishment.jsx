import React, { Component } from 'react';
import axios from 'axios';

class AddEstablishment extends Component {
  constructor(props){
      super(props);
      this.state = { establishmentName: "", address: "", zipCode:"", phone:"", type:"", services:[], workingHours:[]};
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
        this.setState({ establishmentName: "", address: "", zipCode: "", phone: "", type: "", services: "", workingHours: "" });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {

      const {name, value} = event.target;
      console.log(event);
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="add-establishment">
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
            <div className="select is-rounded">
              <select name ="Type">
                <option value="PETSHOP">PETSHOP</option>
                <option value="HOTEL">HOTEL</option>
                <option value="VETERINARIO">VETERINÁRIO</option>
                <option value="OUTROS">OUTROS</option>
              </select>
            </div>      
            <input className="input is-rounded" name="type" value={this.state.type} onChange={ e => this.handleChange(e)} />
            <label>Services: </label>
            <input className="input is-rounded" name="services" value={this.state.services} onChange={ e => this.handleChange(e)} />
            <label>Working Hour: </label>
            <input className="input is-rounded"  name="workingHours" value={this.state.workingHours} onChange={ e => this.handleChange(e)} />
            <button className="button is-primary" type="submit" value="Submit">Gravar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddEstablishment;