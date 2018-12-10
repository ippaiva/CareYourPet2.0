// Establishments
import React, { Component } from 'react';
import AddEstablishment from './AddEstablishment'
import EstablishmentDetails from './EstablishmentDetails'

class MyEstablishments extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    return (
      <div className="myestablishments">
        <h1>Establishments</h1>
        <AddEstablishment />
        <EstablishmentDetails />
        <button className="button is-success" type="submit" value="Submit">Add Establishment</button>
      </div>
    )
  }
}

export default MyEstablishments;
