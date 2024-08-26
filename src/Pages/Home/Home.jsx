import React from 'react'
import Card from '../../Components/Card/Card'
import Contact from '../Contact/Contact'
import Wishlist from '../../Components/Wishlist/Wishlist'
import CreateAccount from '../../Components/CreateAccount/CreateAccount'
import Profile from '../../Components/Profile/Profile'
import Cart from '../../Components/Cart/Cart'
import CategoryList from '../../Components/CategoryList/CategoryList'; 
function Home() {
  const userName = sessionStorage.getItem('userName');
  return (
    <div>
      {userName && <p>Welcome, {userName}!</p>}
      <CategoryList/>
      <Card/>
      <Wishlist/>
      <Cart/>
      <Profile/>
      <CreateAccount/>
      <Contact/>
    </div>
  )
}

export default Home