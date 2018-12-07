import React, { Component } from 'react';

import Navbar from './navbar/Navbar';

class HomeLog extends Component {
  render() {
    console.log("homelog", this.props)
    return (
      <div>
        <Navbar fetchUser={this.props.fetchUser} />
        <h1>Home logada</h1>
      </div>
    )
  }
}


  export default HomeLog;