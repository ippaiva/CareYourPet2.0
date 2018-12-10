import React from "react";
import Navbar from "./navbar/Navbar";
import Card from "./establishments/Card";

//import Maps from './components/maps/maps';

const HomeLog = props => {
  return (
    <div className="homeLog">
      <div className="sidebar">
        <Navbar fetchUser={props.fetchUser} />
      </div>

      <div className="groupImage">
        {/* <Maps /> */}

        <div>
          <img src="/img/map.png" alt="loggedImage" height="" />
          <input className="input is-small" type="text" placeholder="Search" />
        </div>

        <div id="map">
          {/* <Maps/> */}
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
