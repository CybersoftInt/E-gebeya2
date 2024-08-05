import React from 'react'
import Card from '../../Components/Card/Card'
import Contact from '../Contact/Contact'
import Wishlist from '../../Components/Wishlist/Wishlist'
import CreateAccount from '../../Components/CreateAccount/CreateAccount'
import Profile from '../../Components/Profile/Profile'
import Cart from '../../Components/Cart/Cart'

function Home() {
  return (
    <div>
      Home
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