import React from 'react';
import Navbar from '../navbar/Navbar';

const Profile = (props) => {
  return (
    <div>
      <Navbar />
      <form className="form">
        <h1>My Profile</h1>
        Username: <input type="text" name="Username" value="" />
        Name: <input type="text" name="Name" value="" />
        Last Name: <input type="text" name="LastName" value="" />
        Email: <input type="text" name="Email" value="" />
        Phone: <input type="text" name="Phone" value="" />
        Zipcode: <input type="text" name="Zipcode" value="" />
        Address: <input type="text" name="Address" value="" />
      </form>
    </div>
  )
}

export default Profile;
