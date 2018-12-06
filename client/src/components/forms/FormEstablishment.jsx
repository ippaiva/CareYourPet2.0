import React, { Component } from 'react';

class InputText extends Component{
  render() {
    return(
      <div className="add-establishment">
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Establishment Name: </label>
            <input className="input is-rounded" type="text" name="establishmentName" value={this.state.establishmentName} onChange={ e => this.handleChange(e)}/>
            <label>Address:</label>
            <input className="input is-rounded" name="address" value={this.state.address} onChange={ e => this.handleChange(e)} />
            <label>ZipCode: </label>
            <input className="input is-rounded" name="zipcode" value={this.state.zipCode} onChange={ e => this.handleChange(e)} />
            <label>Phone: </label>
            <input className="input is-rounded" name="phone" value={this.state.phone} onChange={ e => this.handleChange(e)} />
            <label>Type: </label>
            <input className="input is-rounded" name="type" value={this.state.type} onChange={ e => this.handleChange(e)} />
            <label>Services: </label>
            <input className="input is-rounded" name="services" value={this.state.services} onChange={ e => this.handleChange(e)} />
            <label>Working Hour: </label>
            <input className="input is-rounded"  name="workingHours" value={this.state.workingHours} onChange={ e => this.handleChange(e)} />
            <input className="input is-rounded" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
}
