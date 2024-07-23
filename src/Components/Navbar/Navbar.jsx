import React, { useState } from 'react'
import './Navbar.css'
import home_logo from "../Assets/home_logo_red.png"
import search_icon from "../Assets/Search_icon.png"
import wishlist_icon from "../Assets/wishlist-icon.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

function Navbar() {
  const [menu, setMenu] = useState('shop')
  return (
    <div className='navbar'>
        <div className="brand-logo">
        <img src={home_logo} className='navbar-logo'/>
        <span> E-Gebeya</span>
        </div>
        <ul>
        <li onClick={() => {setMenu('home')}}>
          <Link style={{ textDecoration: 'none'}} 
          to="/">Home</Link>
          {menu==='home'? <hr/>:<></>}
          </li>
        <li onClick={() => {setMenu('contact')}}>
          <Link  style={{ textDecoration: 'none'}} to="/contact">Contact</Link>
          {menu==='contact'? <hr/>:<></>}
          </li>
        <li onClick={() => {setMenu('about')}}>
          <Link  style={{ textDecoration: 'none'}} to="/about">About</Link>
          {menu==='about'? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu('login')}}><Link  style={{ textDecoration: 'none'}} to="/login">Sign Up</Link>
          {menu==='login'? <hr/>:<></>}</li>  
        </ul>
        <div className="nav-search">
        <input type="search" placeholder='What are you looking for?' />
        <img src={search_icon} className='search-icon'/>
        </div>
        <div className="wish_cart">
          <Link to="/wishlist"><img onClick={() => {setMenu('wishlist')}} src={wishlist_icon} className='wishlist_icon'/></Link>
          <Link to="/cart"><img onClick={() => {setMenu('cart')}} src={cart_icon} className='wishlist_icon'/></Link>
        </div>



    </div>
  ) 
}

export default Navbar