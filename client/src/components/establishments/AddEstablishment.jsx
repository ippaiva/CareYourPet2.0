import React, { Component } from 'react';
import axios from 'axios';


class AddEstablishment extends Component {
  constructor(props){
      super(props);
      this.state = { establishmentName: "", adress: "", zipCode:"", phone:"", type:"", services:[], workingHours:[]};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const Establishment = this.state.establishmentName;
    const Adress = this.state.adress;
    const ZipCode = this.state.zipCode;
    const Phone = this.state.phone;
    const Type = this.state.type;
    const Services = this.state.services;
    const WorkingHour = this.state.workingHours;
  
    axios.post("http://localhost:5000/api/create", { Establishment, Adress, ZipCode, Phone, Type, Services, WorkingHour }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({ Establishment: "", Adress: "", ZipCode: "", Phone: "", Type: "", Services: "", WorkingHour: "" });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {
    console.log('mateus', event)  
      const {name, value} = event.target;
    
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="add-establishment">
        <form onSubmit={this.handleFormSubmit}>
          <label>Establishment Name: </label>
          <input className="input is-rounded" type="text" name="Establishment" value={this.state.establishmentName} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="Adress" value={this.state.adress} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddEstablishment;