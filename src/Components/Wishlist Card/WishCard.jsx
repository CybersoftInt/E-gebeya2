import React from 'react'
import "./WishCard.css"
import wishimg from "../Assets/Gucci_bag.png"
function WishCard() {
  const itemName = "Gucci duffle bag"
  const discount = "35%"
  return (
<div className="wishlist">
          <div className="wishlist-items">
            <div className="discount">
              <p>{discount}</p>
            </div>
            <div className="wishimg">
              <img src={wishimg} alt="wishlistIcon" />
            </div>
            <div className="delete">
              {/* <img src="" alt="delete" /> */}
            </div>

            <button>Add to Cart</button>
            <div className="par">
              <p className="p1">{itemName}</p>
              <p className="p2">590 <span>1000</span></p>
            </div>
          </div>
        </div>
  )
}

export default WishCard