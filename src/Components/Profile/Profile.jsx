import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Loading from '../Loading/Loading';
import { loginUser } from '../../utils/authService';

function Profile() {
  const [profile, setProfile] = useState({
    UserID: null,
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    CurrentPassword: '',
    PhoneNumber: '',
    Role: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('profile');
  const [newAddress, setNewAddress] = useState({ street: '', city: '', zip: '' });

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
        console.log('Fetched profile data:', response.data);
        const data = response.data;
        setProfile({
          UserID: data.userID|| "",
          FirstName: data.firstName || '',
          LastName: data.lastName || '',
          Email: data.email || '',
          Password: '', // Initialize empty for user input
          CurrentPassword: '', // Initialize empty for user input
          PhoneNumber: data.phoneNumber || '',
          Role: data.role || ''
        });
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

    if (userId === null) {
      toast.error('User ID is missing');
      return;
    }

    const patchData = {
      userId: profile.UserID,
      FirstName: profile.FirstName,
      LastName: profile.LastName,
      Email: profile.Email,
      PhoneNumber: profile.PhoneNumber
    };

    const authData = {
      CurrentPassword: profile.CurrentPassword
    };

    if (profile.Password) {
      patchData.Password = profile.Password;
    }
    console.log('Submitting profile data:', { ...patchData, ...authData });

    try {
      await axios.patch(`http://localhost:5021/api/Person/${userId}`, {
        ...patchData,
        ...authData
      });

      if (profile.Password) {
        await loginUser({ username: profile.Email, password: profile.Password });
    }
      toast.success('Profile updated successfully!');
    } catch (err) {
      toast.error('Failed to update profile');
    }
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to the homepage
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    console.log('New address:', newAddress);
    // Add the address to the backend or state as needed
    toast.success('Address added successfully!');
  };

  if (loading) return <Loading/>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page">
      <ToastContainer />
      <p><a href="/">Home</a> / <a href="#">Profile</a></p>
      <div className="p-container">
        <div className="profile-container">
          <h3>Manage My Account</h3>
          <div className="profile">
            <p className={activeSection === 'profile' ? 'active' : ''} onClick={() => setActiveSection('profile')}>My Profile</p>
            <p className={activeSection === 'address' ? 'active' : ''} onClick={() => setActiveSection('address')}>Address Book</p>
            <p className={activeSection === 'payment' ? 'active' : ''} onClick={() => setActiveSection('payment')}>My Payment Options</p>
            <h3>My Orders</h3>
            <p className={activeSection === 'returns' ? 'active' : ''} onClick={() => setActiveSection('returns')}>My Returns</p>
            <p className={activeSection === 'cancellations' ? 'active' : ''} onClick={() => setActiveSection('cancellations')}>My Cancellations</p>
            <h3>My Wishlist</h3>
          </div>
        </div>
        <div className="form-container">
          {activeSection === 'profile' && (
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
          )}
          {activeSection === 'address' && (
            <form className="form" onSubmit={handleAddAddress}>
              <h3>Add New Address</h3>
              <div className="input">
                <div className="address">
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={newAddress.street}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="city">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={newAddress.city}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="zip">
                  <label htmlFor="zip">ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={newAddress.zip}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>
              <div className="buttons">
                <button className="cancel" type="button" onClick={() => setActiveSection('profile')}>Cancel</button>
                <button className="save" type="submit">Add Address</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
