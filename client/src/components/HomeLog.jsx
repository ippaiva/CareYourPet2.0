import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
//import Maps from './components/maps/maps';

class HomeLog extends Component {
  render() {
    return (
      <div className="homeLog">
        <div className="">
          <div className="sidebar">
            <Navbar fetchUser={this.props.fetchUser} />
          </div>

          <div>
            <img src="/img/mountains.jpg" alt="loggedImage" height="" />
            <input className="input" type="text" placeholder="Search" />
          </div>

          <div id="map">
            {/* <Maps/> */}

            <img src="/img/mountains.jpg" alt="loggedImage" height="" />
            <input className="input" type="text" placeholder="Search" />
          </div>

          <div className="card">
            {/* Card Component */}
            <div className="hero">
              <div className="card">
                <figure className="image is-4by3">
                  <img src="img/retriever.jpg" alt="Animals" />
                </figure>
              </div>

              <div className="card-content">
                <div className="content">
                  <h4>Avengers Petshop</h4>
                  <p>Grooming and Vet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLog;
