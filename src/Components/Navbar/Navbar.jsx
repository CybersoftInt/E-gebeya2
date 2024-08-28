import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import home_logo from "../Assets/home_logo_red.png";
import search_icon from "../Assets/Search_icon.png";
import wishlist_icon from "../Assets/wishlist-icon.png";
import cart_icon from "../Assets/cart_icon.png";
import accountIcon from "../Assets/accountIcon.png";
import logout from "../Assets/logout.png"
import { isAdmin } from "../../utils/authService";
function Navbar() {
  const [menu, setMenu] = useState("shop");
  const navigate = useNavigate();
  
  // Check if token is present
  const token = sessionStorage.getItem('jwt');
  
  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('jwt');
     // Remove token from session storage
    navigate('/login'); 
    const token = sessionStorage.getItem('jwt');// Redirect to login page
  };
  const admin = isAdmin();

  return (
    <div className="navbar">
      <div className="brand-logo">
        <img src={home_logo} className="navbar-logo" alt="logo" />
        <span> E-Gebeya</span>
      </div>
      <ul>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact
          </Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        {admin && (
          <li onClick={() => navigate('/admin')}>
            <span>Admin Panel</span>
            {menu === "admin" && <hr />}
          </li>
        )}
        <li
          onClick={() => {
            setMenu(token ? "logout" : "signup"); // Toggle between logout and signup
            if (token) handleLogout(); // Handle logout
          }}
        >
          
        </li>
      </ul>
      <div className="nav-search">
        <input type="search" placeholder="What are you looking for?" />
        <img src={search_icon} className="search-icon" alt="search" />
      </div>
      <div className="wish_cart">
        <Link to="/wishlist">
          <img
            onClick={() => {
              setMenu("wishlist");
            }}
            src={wishlist_icon}
            className="wishlist_icon"
            alt="wishlist"
          />
        </Link>
        <Link to="/cart">
          <img
            onClick={() => {
              setMenu("cart");
            }}
            src={cart_icon}
            className="wishlist_icon"
            alt="cart"
          />
        </Link>
        {token ? <Link to="/profile">
        <img
            onClick={() => {
              
            }}
            src={accountIcon}
            className="wishlist_icon"
            alt="accountIcon"
          /></Link> : (
          <img
            onClick={() => {
              handleLogout();
            }}
            src={accountIcon}
            className="wishlist_icon"
            alt="accountIcon"
          />
        )}
          {menu === "logout" || menu === "signup" ? <hr /> : <></>}
          {token ? (
            <img  id="logout" src={logout} onClick={handleLogout}/>
          ) : ""}
          {menu === "logout" || menu === "signup" ? <hr /> : <></>}
        
      </div>
    </div>
  );
}

export default Navbar;
