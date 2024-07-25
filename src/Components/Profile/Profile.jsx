import React from 'react';
import '../Profile/Profile.css';

function Profile() {
  return (
    <div className="container">
      <div className="profile-container">
        <h3>Manage My Account</h3>
        <div className="profile">
          <p className="active">My Profile</p>
          <p>Address Book</p>
          <p>My Payment Options</p>
          <h3>My Orders</h3>
          <p>My Returns</p>
          <p>My Cancellations</p>
          <h3>My Wishlist</h3>
        </div>
      </div>
      <div className="form-container">
        <form className="form">
          <h3>Edit Your Profile</h3>
          <div className="input">
            <div className="fname">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" value="" />
            </div>
            <div className="lname">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" value="" />
            </div>
          </div>
          <div className="input">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value="" />
            </div>
            <div className="addr">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value="" />
            </div>
          </div>
          <div className="password">
            <h4>Password Changes</h4>
            <div className="pass">
              <label htmlFor="currentPassword">Current Password</label>
              <input type="password" id="currentPassword" name="currentPassword" />
            </div>
            <div className="pass">
              <label htmlFor="newPassword">New Password</label>
              <input type="password" id="newPassword" name="newPassword" />
            </div>
            <div className="pass">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" />
            </div>
          </div>
          <div className="buttons">
            <button className="cancel" type="button">Cancel</button>
            <button className="save" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;