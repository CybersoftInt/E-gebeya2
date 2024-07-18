import React from 'react'
import "./WishCard.css"
function WishCard() {
  return (
<div className="wishlist">
          <div className="wishlist-items">
            <div className="discount">
              <p>35%</p>
            </div>
            <div className="wishimg">
              {/* <img src="" alt="huge bag" /> */}
            </div>
            <div className="delete">
              {/* <img src="" alt="delete" /> */}
            </div>

            <button>Add to Cart</button>
            <div className="par">
              <p className="p1">Playstation Joystick</p>
              <p className="p2">590 <span>1000</span></p>
            </div>
          </div>
        </div>
  )
}

export default WishCard