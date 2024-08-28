// src/Components/Profile/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../Profile/Profile.css';

function Profile() {
  const [profile, setProfile] = useState({
    UserID: null,
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',          // New Password
    CurrentPassword: '',   // Current Password
    PhoneNumber: '',
    Role: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    
    if (!username) {
      setError('User not authenticated');
      setLoading(false);
      return;
    }

    axios.get(`http://localhost:5021/api/Person/email/${username}`)
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch profile data');
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = profile.UserID;

    // Prepare the payload for the PATCH request
    const patchData = {
      FirstName: profile.FirstName,
      LastName: profile.LastName,
      Email: profile.Email,
      PhoneNumber: profile.PhoneNumber,
      Role: profile.Role
    };

    // Include the current password for authentication
    const authData = {
      CurrentPassword: profile.CurrentPassword
    };

    // Only include the new password if it's provided
    if (profile.Password) {
      patchData.Password = profile.Password;
    }

    try {
      await axios.patch(`http://localhost:5021/api/Person/${userId}`, {
        ...patchData,
        ...authData
      });
      toast.success('Profile updated successfully!');
    } catch (err) {
      toast.error('Failed to update profile');
    }
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to the homepage
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page">
      <ToastContainer /> {/* Include ToastContainer to render the toasts */}
      <p><a href="/#">Home</a> / <a href="#">Profile</a></p>
      <div className="p-container">
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
          <form className="form" onSubmit={handleSubmit}>
            <h3>Edit Your Profile</h3>
            <div className="input">
              <div className="fname">
                <label htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  value={profile.FirstName}
                  onChange={handleChange}
                />
              </div>
              <div className="lname">
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  value={profile.LastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input">
              <div className="email">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  value={profile.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="pphone">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  value={profile.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="password">
              <h4>Password Changes</h4>
              <div className="pass">
                <label htmlFor="CurrentPassword">Current Password</label>
                <input
                  type="password"
                  id="CurrentPassword"
                  name="CurrentPassword"
                  value={profile.CurrentPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="pass">
                <label htmlFor="Password">New Password</label>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  value={profile.Password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="buttons">
              <button className="cancel" type="button" onClick={handleCancel}>Cancel</button>
              <button className="save" type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
