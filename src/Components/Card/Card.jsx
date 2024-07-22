import React from 'react'

function Card() {
  return (
    <div className='card'>
      <div className="wishlist-items">
            <div className="discount">
              <p>{discount}</p>
            </div>
            <div className="wishimg">
              <img src={wishimg} alt="huge bag" />
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

export default Card