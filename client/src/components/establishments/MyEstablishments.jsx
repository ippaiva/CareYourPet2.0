import React, { Component } from 'react';
import EstablishmentDetails from './EstablishmentDetails'
import { Link } from 'react-router-dom';

class MyEstablishments extends Component {
  render() {
    return (
      <div className="myEstablishments">

        <img src="/img/care.png" alt="logo" width="100px" className="logo"/>
      

        <div className="myEstabBody">
          <div >
            <h1 className="title is-1">My Establishments</h1>
            <EstablishmentDetails user={this.props.loggedInUser} />
            <Link to='/add-establishment' className="button is-warning is-small">Add Establishment</Link>
          </div>

        </div>
      
      </div>
    )
  }
}

export default MyEstablishments;
