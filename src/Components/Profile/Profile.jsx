import React from 'react'
import '../Profile/Profile.css'
function Profile() {
  return (
    <div>
      <div className="container">

        <div className="profile-container">
          <h3>Manage My Account</h3>
          <div className="profile">
            <p>My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
          </div>
          <h3>My orders</h3>
          <div className="profile">
            <p>My Returns</p>
            <p>My Cancellations</p>
          </div>
          <h3>My Wishlist</h3>
        </div>
        <div className='form'>
          <form action="">
            <fieldset>
              <h3>Edit Your Profile</h3>
              <div className="input">
                <div className="fname">
                  <label htmlFor="first name" >First Name
                    <input type="text" placeholder='First Name' />
                  </label>
                </div>
                <div className="lname">
                  <label htmlFor="last name" >Last Name
                    <input type="text" placeholder='Last Name' />
                  </label>
                </div>

              </div>
              <br />
              <div className='input'>
                <div className="email">
                  <label htmlFor="email" >Email
                    <input type="email" placeholder='Email' />
                  </label>
                </div>
                <div className="addr">
                  <label htmlFor="address" >Address
                    <input type="text" placeholder='Address' />
                  </label>
                </div>
              </div>

              <br />
              <div className="password">
                <div className="pass">
                  <label htmlFor="password">Password Changes <br />
                    <input type="password" name="current pass" id="cpass" placeholder='Current Password' />
                  </label>
                </div>

                <div className="npass">
                  <label htmlFor="npass">
                    <input type="password" name="new pass" id="npass" placeholder='New Password' /><br />
                  </label>

                </div>
                <div className="copass">
                  <label htmlFor="copass">
                    <input type="password" name="confirm pass" id="cppass" placeholder='Confirm Password' /><br />
                  </label>

                </div>
                <div className="buttons">
                  <div className="cancel">
                    <button type="reset">Cancel</button>
                  </div>
                  <div className="save">
                    <button type="submit">Save Changes</button>
                  </div>

                </div>

              </div>
              <br />




            </fieldset>
          </form>
        </div>


      </div>
    </div>
  )
}

export default Profile