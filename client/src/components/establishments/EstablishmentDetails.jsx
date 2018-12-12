import React, { Component } from "react";
import Service from '../auth/auth-service';

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
                  <h3>Site:<a href = {establishment.site}/></h3>
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
