import React from "react";
import Navbar from "./navbar/Navbar";
import Card from "./establishments/Card";
import Maps from './maps/Maps';

//import Maps from './components/maps/maps';

const HomeLog = props => {
  return (
    <div className="homeLog">
      <div className="sidebar">
        <Navbar fetchUser={props.fetchUser} />
      </div>

      <div className="groupImage">
        
        <div id="map">
          <Maps />
          <input className="input is-small" type="text" placeholder="Search" />
        </div>

        <div>
          <div className="carol">
            <Card service={props.service} />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLog;
