import React from "react";
import Navbar from "./navbar/Navbar";
import Card from "./establishments/Card";
import Maps from './maps/Maps';

const HomeLog = props => {
  return (
    <div className="sidebarContainer">

      <div className="sidebar">
        <Navbar fetchUser={props.fetchUser} />
      </div>

      <div className="groupImage">

        <div height="50%" width="83%" className="map">
          <Maps />
          {/* <img src="/img/map.png" alt="loggedImage" height="" /> */}
        </div>

        <div className="searchAndCard">
          <input className="input is-small" type="text" placeholder="Search" />

          <Card width="33%"/>
          <Card />
          <Card />
          
        </div>

      </div>
      
    </div>
  );
};

export default HomeLog;
