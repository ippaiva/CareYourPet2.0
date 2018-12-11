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
      <div className="establishmentsdetails">
        {this.state.errorMessage}
        {
          this.state.establishments.map(establishment => {
            console.log(establishment);
            return (
              <div key={establishment._id}>
                <h1>Name Of Establishment: {establishment.establishmentName}</h1>
                <div>
                  <h3>Descrição</h3>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum quos optio perspiciatis error, blanditiis corporis cumque ad provident delectus, explicabo quia. Praesentium voluptate similique nesciunt voluptatibus, corrupti laboriosam architecto!</span>
                  <span>serviços</span>
                  <ul>
                    <li>*</li>
                    <li>*</li>
                    <li>*</li>
                  </ul>
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
