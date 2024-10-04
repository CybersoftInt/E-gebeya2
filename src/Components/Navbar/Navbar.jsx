// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import home_logo from "../Assets/home_logo_red.png";
import search_icon from "../Assets/Search_icon.png";
import wishlist_icon from "../Assets/wishlist-icon.png";
import cart_icon from "../Assets/cart_icon.png";
import accountIcon from "../Assets/accountIcon.png";
import logout from "../Assets/logout.png";
import { isAdmin } from "../../utils/authService";
import adminIcon from "../../Components/Assets/administration.png"
function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [suggestions, setSuggestions] = useState([]); // Suggestions state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if token is present
  const token = sessionStorage.getItem("jwt");

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("jwt"); // Remove token from session storage
    navigate("/login"); // Redirect to login page
  };

  const admin = isAdmin();

  // Handle search input change
  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      setLoading(true);
      try {
        // Fetch suggestions from the API
        const response = await axios.get(
          `http://localhost:5021/api/ProductController2/search?query=${query}`
        );
        setSuggestions(response.data);
      } catch (err) {
        console.error("Error fetching search suggestions", err);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSuggestions([]); // Clear suggestions after search
    }
  };

  return (
    <div className="navbar">
      <div className="brand-logo">
        <img src={home_logo} className="navbar-logo" alt="logo" />
        <span> E-Gebeya</span>
      </div>
      <ul>
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact
          </Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <div className="adminICon"></div>{admin && (
          <li onClick={() => navigate("/admin",setMenu("admin"))}>
            <span style={{cursor: 'pointer'}}>Admin</span>
            {menu === "admin" ? <hr /> : <></>}
          </li>
        )}
        <li
          onClick={() => {
            setMenu(token ? "logout" : "signup");
            if (token) handleLogout();
          }}
        >
          {/* Optionally add text or a link here for logout/signup */}
        </li>
      </ul>
      <div className="nav-search">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="transparent-button">
            <img src={search_icon} className="search-icon" alt="search" />
          </button>

          {suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <ul>
                  {suggestions.map((suggestion) => (
                    <li key={suggestion.id}>
                      <Link
                        to={`/product/${suggestion.id}`}
                        onClick={() => setSearchQuery("")}
                      >
                        {suggestion.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </form>
      </div>
      <div className="wish_cart">
        <Link to="/wishlist">
          <img
            onClick={() => setMenu("wishlist")}
            src={wishlist_icon}
            className="wishlist_icon"
            alt="wishlist"
          />
        </Link>
        <Link to="/cart">
          <img
            onClick={() => setMenu("cart")}
            src={cart_icon}
            className="wishlist_icon"
            alt="cart"
          />
        </Link>
        {token ? (
          <Link to="/profile">
            <img
              src={accountIcon}
              className="wishlist_icon"
              alt="accountIcon"
            />
          </Link>
        ) : (
          <img
            onClick={() => handleLogout()}
            src={accountIcon}
            className="wishlist_icon"
            alt="accountIcon"
          />
        )}
        {menu === "logout" || menu === "signup" ? <hr /> : <></>}
        {token ? <img id="logout" src={logout} onClick={handleLogout} /> : ""}
        {menu === "logout" || menu === "signup" ? <hr /> : <></>}
      </div>
    </div>
  );
}

export default Navbar;
