import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Loading from "../Loading/Loading";
import { loginUser } from "../../utils/authService";

function Profile() {
  const [profile, setProfile] = useState({
    UserID: null,
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    CurrentPassword: "",
    PhoneNumber: "",
    Role: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("profile");
  const [newAddress, setNewAddress] = useState({
    StreetAddress: "",
    City: "",
    Region: "", // Added
    Country: "", // Added
    ZIPCode: "",
    IsDefault: false,
  });
  const [addresses, setAddresses] = useState([]); // Added state to store fetched addresses

  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem("username");

    if (!username) {
      setError("User not authenticated");
      setLoading(false);
      navigate("/login");
      return;
    }

    axios
      .get(`http://localhost:5021/api/Person/email/${username}`)
      .then((response) => {
        console.log("Fetched profile data:", response.data);
        const data = response.data;
        setProfile({
          UserID: data.userID || "",
          FirstName: data.firstName || "",
          LastName: data.lastName || "",
          Email: data.email || "",
          Password: "", // Initialize empty for user input
          CurrentPassword: "", // Initialize empty for user input
          PhoneNumber: data.phoneNumber || "",
          Role: data.role || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch profile data");
        setLoading(false);
      });
    axios
      .get(`http://localhost:5021/api/Address?userId=30`)
      .then((response) => {
        console.log("Fetched addresses:", response.data);
        setAddresses(response.data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = profile.UserID;

    if (userId === null) {
      toast.error("User ID is missing");
    }

    const patchData = {
      userId: profile.UserID,
      FirstName: profile.FirstName,
      LastName: profile.LastName,
      Email: profile.Email,
      PhoneNumber: profile.PhoneNumber,
    };

    const authData = {
      CurrentPassword: profile.CurrentPassword,
    };

    if (profile.Password) {
      patchData.Password = profile.Password;
    }
    console.log("Submitting profile data:", { ...patchData, ...authData });

    try {
      await axios.patch(`http://localhost:5021/api/Person/${userId}`, {
        ...patchData,
        ...authData,
      });

      if (profile.Password) {
        await loginUser({
          username: profile.Email,
          password: profile.Password,
        });
      }
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  const handleCancel = () => {
    navigate("/"); // Redirect to the homepage
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    console.log("name and value"+e.target )
    setNewAddress((prevState) => ({ ...prevState, [name]: value }));
    
  };
  useEffect(()=>{

  },[])

  const handleAddAddress = async (e) => {
    e.preventDefault();

    // Prepare the address data with the userID included
    const addressData = {
      UserID: profile.UserID, // Include the userID
      StreetAddress: newAddress.StreetAddress,
      City: newAddress.city,
      Region: newAddress.Region || "", // Optional, adjust as needed
      Country: newAddress.country || "", // Optional, adjust as needed
      ZIPCode: newAddress.ZIPCode,
      IsDefault: newAddress.IsDefault ,
    };

    console.log("New address to be posted:", addressData);

    try {
      const response = await axios.post(
        "http://localhost:5021/api/Address",
        addressData
      );
      console.log("Address added successfully:", response.data);
      setAddresses([...addresses, response.data]); // Add the new address to the state
      toast.success("Address added successfully!");
      setNewAddress({
        StreetAddress: "",
        City: "",
        Region: "",
        Country: "",
        ZIPCode: "",
        IsDefault: false,
      }); // Reset form
    } catch (err) {
      toast.error("Failed to add address");
    }
  };
  const handleDeleteAddress = async (addressId) => {
    try {
      await axios.delete(`http://localhost:5021/api/Address/${addressId}`);
      setAddresses(
        addresses.filter((address) => address.addressID !== addressId)
      );
      toast.success("Address deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete address");
    }
  };

  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  return (
    <div className="page">
      <ToastContainer />
      <p>
        <a href="/">Home</a> / <a href="#">Profile</a>
      </p>
      <div className="p-container">
        <div className="profile-container">
          <h3>Manage My Account</h3>
          <div className="profile">
            <p
              className={activeSection === "profile" ? "active" : ""}
              onClick={() => setActiveSection("profile")}
            >
              My Profile
            </p>
            <p
              className={activeSection === "address" ? "active" : ""}
              onClick={() => setActiveSection("address")}
            >
              Address Book
            </p>
            <p
              className={activeSection === "payment" ? "active" : ""}
              onClick={() => setActiveSection("payment")}
            >
              My Payment Options
            </p>
            <h3>My Orders</h3>
            <p>no orders</p>
            <h3>My Wishlists</h3>
            <p>no wishlist</p>
          </div>
        </div>
        <div className="form-container">
          {activeSection === "profile" && (
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
                <button className="cancel" type="button" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="save" type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          )}
          {activeSection === "address" && (
            <form className="form" onSubmit={handleAddAddress}>
              <h3>Add New Address</h3>
              <div className="input">
                <div className="address">
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={newAddress.streetAddress}
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
                  <label htmlFor="ZIPCode">ZIP Code</label>
                  <input
                    type="text"
                    id="ZIPCode"
                    name="ZIPCode"
                    value={newAddress.zipCode}
                    onChange={handleAddressChange}
                  />
                  <label htmlFor="IsDefault">Set as Default</label>
                  <input
                    type="checkbox"
                    id="IsDefault"
                    name="IsDefault"
                    checked={newAddress.IsDefault}
                    onChange={(e) =>
                      setNewAddress((prev) => ({
                        ...prev,
                        IsDefault: e.target.checked,
                      }))
                    } // Handle checkbox separately
                  />
                </div>
              </div>
              <div className="buttons">
                <button
                  className="cancel"
                  type="button"
                  onClick={() => setActiveSection("profile")}
                >
                  Cancel
                </button>
                <button className="save" type="submit">
                  Add Address
                </button>
              </div>
              <div className="addresses">
                <h3>Your Addresses</h3>
                {addresses.map((address) => (                  
                  <div className="address-item" key={address.addressID}>
                    {console.log(address)}
                    <p>Street : {address.streetAddress}</p>
                    <p>City: {address.city}</p>
                    <p>Postal ZIP:{address.zipCode}</p>
                    <p>
                       {address.isDefault ? <p>isDefault</p> : <p>isNotDefault</p>}
                    </p>
                    <button
                      className="delete"
                      onClick={() => handleDeleteAddress(address.addressID)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
