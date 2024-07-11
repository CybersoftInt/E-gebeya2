import React from 'react'
import './Navbar.css'
import home_logo from "../Assets/home_logo_red.png"
import search_icon from "../Assets/Search_icon.png"
import wishlist_icon from "../Assets/wishlist-icon.png"
import cart_icon from "../Assets/cart_icon.png"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="brand-logo">
        <img src={home_logo} className='navbar-logo'/>
        <span> E-Gebeya</span>
        </div>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>  
        </ul>
        <div className="nav-search">
        <input type="search" placeholder='What are you looking for?' />
        <img src={search_icon} className='search-icon'/>
        </div>
        <div className="wish_cart">
        <img src={wishlist_icon} className='wishlist_icon'/>
        <img src={cart_icon} className='wishlist_icon'/>
        </div>



    </div>
  ) 
}

export default Navbar