import React from 'react'
import "./Wishlist.css"
import WishCard from '../Wishlist Card/WishCard'
import Card from '../Card/Card'
function Wishlist() {
  return (
    <div className='wishlist-container'>
      <div className="header">
        <h4>Wishlist (4)</h4>
        <button>Move All To Bag</button>
      </div>

      <div class="wishlist-items-container">
        <WishCard />
        <WishCard />
        <WishCard />
        <WishCard />
        <WishCard />
        <WishCard />
      </div>
      <div className="wishlist-for-you">
        <h4>Just For You</h4>
        <button>See All</button>
      </div>
     <div className="just-for-you">
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     </div>

    </div>

  )
}

export default Wishlist