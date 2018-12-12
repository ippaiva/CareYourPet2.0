import React from 'react';
import Navbar from '../navbar/Navbar';

const Profile = (props) => {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <Navbar />

      </div>

      <div className="formContainer">
        <form className="form" method="get">
          <h1 className="title is-1" >My Profile</h1>
          Username: <input type="text" name="Username" value="" /><br></br>
          Name: <input type="text" name="Name" value="" /><br></br>
          Last Name: <input type="text" name="LastName" value="" /><br></br>
          Email: <input type="text" name="Email" value="" /><br></br>
          Phone: <input type="text" name="Phone" value="" /><br></br>
          Zipcode: <input type="text" name="Zipcode" value="" /><br></br>
          Address: <input type="text" name="Address" value="" /><br></br>
        </form>

      </div>

    </div>
  )
}

export default Profile;
