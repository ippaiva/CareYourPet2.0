import React from "react";
import Navbar from "./navbar/Navbar";
import Card from "./establishments/Card";
import Maps from './maps/Maps';
import Service from './auth/auth-service';

class HomeLog extends React.Component {
  constructor() {
    super()
    this.getAllEstablishments = this.getAllEstablishments.bind();
    this.service = new Service();
    this.state = {
      establishments: []
    }
  }

  getAllEstablishments = () => {
    this.service.getAllEstablishments()
      .then(res => {
        if(!res.data.message){
          this.setState({ establishments: res.data })
        } else {
          console.log(res.data.message);
        }
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllEstablishments();
  }

  render() {
    return (
      <div className="sidebarContainer">
  
        <div className="sidebar">
          <Navbar fetchUser={this.props.fetchUser} />
        </div>
  
        <div className="groupImage">
  
          <div height="50%" width="83%" className="map">
            <Maps />
          </div>
  
          <div className="searchAndCard">
            <input className="input is-small" type="text" placeholder="Search" />
            <div className="cardContainerHomeLog">
            {
              this.state.establishments.map(establishment => {
                return(
                  <Card {...establishment} key={establishment._id} width="33%" />
                );
              })
            }

            </div>
          </div>
  
        </div>
        
      </div>
    );
  }
}

export default HomeLog;
