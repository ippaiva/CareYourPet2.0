import React, { Component } from 'react';

class FormEstablishment extends Component{
  render() {
    return (
      <div className="add-establishment">
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Establishment Name: </label>
            <input className="input is-rounded" type="text" name="establishmentName" value={this.props.establishmentName} onChange={e => this.handleChange(e)} />
            <label>Address:</label>
            <input className="input is-rounded" name="address" value={this.props.address} onChange={e => this.handleChange(e)} />
            <label>ZipCode: </label>
            <input className="input is-rounded" name="zipcode" value={this.props.zipCode} onChange={e => this.handleChange(e)} />
            <label>Phone: </label>
            <input className="input is-rounded" name="phone" value={this.props.phone} onChange={e => this.handleChange(e)} />
            <label>Type: </label>
            <input className="input is-rounded" name="type" value={this.props.type} onChange={e => this.handleChange(e)} />
            <label>Services: </label>
            <input className="input is-rounded" name="services" value={this.props.services} onChange={e => this.handleChange(e)} />
            <label>Working Hour: </label>
            <input className="input is-rounded" name="workingHours" value={this.props.workingHours} onChange={e => this.handleChange(e)} />
            <input className="input is-rounded" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default FormEstablishment;