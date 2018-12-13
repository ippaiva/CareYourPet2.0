import React, { Component } from "react";
import Service from '../auth/auth-service';
import { Link } from 'react-router-dom';

 class EstablishmentsDetails extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      establishments: [],
      errorMessage: ''
    }
  }

  componentDidMount() {
    this.service.getEstablishments(this.props.user._id)
      .then(res => {
        console.log(res);
        if (!res.data.message) {
          this.setState({ establishments: res.data })
        } else {
          this.setState({ errorMessage: res.data.message })
        }
        console.log(this.state.establishments);
      }).catch(err => console.log(err));
  }

   render() {
    return (
      <div>
        {this.state.errorMessage}
        {
          this.state.establishments.map(establishment => {
            console.log(establishment);
            return (
              <div key={establishment._id} className="establishmentsdetails">
                <div className="estabUserDetails">
                  <h1>Name of Establishment: {establishment.establishmentName}</h1>
                  <h3>Type: {establishment.type}</h3>
                  <h3>Services: {establishment.services}</h3>
                  <h3>Working Hours: {establishment.workingHours}</h3>
                  <Link to={() => establishment.site ? establishment.site : ''}>Site: </Link>
                </div>
              </div>
              );
            })
          }
        </div>
    );
  }
}

export default EstablishmentsDetails; 
