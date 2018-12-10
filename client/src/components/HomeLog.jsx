import React from 'react';
import Navbar from './navbar/Navbar';
import Card from './establishments/Card'

const HomeLog = (props) => {
    return (
      <div className="homeLog">

        <div className="sidebar">
          <Navbar fetchUser={props.fetchUser} />
        </div>

        <div className="groupImage">

          <div>
            <img src="/img/map.png" alt="loggedImage" height=""></img>
            <input className="input is-small" type="text" placeholder="Search"></input>
          </div>

          <div className="carol">

          <Card service={props.service}/>
          <Card />
          <Card />

        </div>
        </div>

    </div>  
    )

}

export default HomeLog;
