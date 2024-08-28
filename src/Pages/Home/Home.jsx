import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card'
import Contact from '../Contact/Contact'
import Wishlist from '../../Components/Wishlist/Wishlist'
import CreateAccount from '../../Components/CreateAccount/CreateAccount'
import Profile from '../../Components/Profile/Profile'
import Cart from '../../Components/Cart/Cart'
import CategoryList from '../../Components/CategoryList/CategoryList'; 
import Dashboard from '../../Components/Dashboard/Dashboard'
import ProductManager from '../../Components/ProductManager/ProductManager'
import { isAdmin } from '../../utils/authService'
import ManageProducts from '../../Components/Dashboard/ManageProducts/ManageProducts'
function Home() {
  const userName = sessionStorage.getItem('userName');
  const admin = isAdmin();
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    // Check if the user is an admin when the component mounts
    const checkAdminStatus = async () => {
      const adminStatus = isAdmin(); // Call the function to check admin status
      setIsAdminUser(adminStatus); // Update the state
    };
    checkAdminStatus();
  }, []);
  return (
    <div>
      {isAdminUser ? <p>Welcome admin</p> : <p>Welcome, {userName}!</p>}
      <ProductManager/>
      <Contact/>
    </div>
  )
}

export default Home