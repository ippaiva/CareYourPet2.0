// Establishments
import React, { Component } from 'react';
import AddEstablishment from './AddEstablishment'
import EstablishmentDetails from './EstablishmentDetails'
import { Link } from 'react-router-dom';

class MyEstablishments extends Component {
  render() {
    return (
      <div className="myestablishments">
        <h1>Establishments</h1>
        <AddEstablishment />
        <EstablishmentDetails />

				<Link to='/add-establishment'>Add Establishment</Link>
        <button className="button is-success" type="submit" value="Submit">Add Establishment</button>
      </div>
    )
  }
}

export default MyEstablishments;
