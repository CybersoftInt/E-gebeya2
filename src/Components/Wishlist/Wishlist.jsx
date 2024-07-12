import React from 'react'
import "./Wishlist.css"
function Wishlist() {
  return (
    <div className='wishlist-container'>
      <div className="header">
        <h4>Wishlist (4)</h4>
        <button>Move All To Bag</button>
      </div>

      <div class="wishlist-items-container">
        <div className="wishlist">
          <div className="wishlist-items">
            <div className="discount">
              <p>35%</p>
            </div>
            <div className="wishimg">
              <img src="" alt="huge bag" />
            </div>
            <div className="delete">
              <img src="" alt="delete" />
            </div>

            <button>Add to Cart</button>
          </div>

          {/* <div>
            <p>Gucci Bag</p>
            <p>$960</p>
          </div> */}
        </div>
        <div className="wishlist">
          <div className="wishlist-items">
            <div className="discount">
              <p>35%</p>
            </div>
            <div className="wishimg">
              <img src="" alt="huge bag" />
            </div>
            <div className="delete">
              <img src="" alt="delete" />
            </div>

            <button>Add to Cart</button>
          </div>

        </div>
        <div className="wishlist">
          <div className="wishlist-items">
            <div className="discount">
              <p>35%</p>
            </div>
            <div className="wishimg">
              <img src="" alt="huge bag" />
            </div>
            <div className="delete">
              <img src="" alt="delete" />
            </div>

            <button>Add to Cart</button>
          </div>
        </div>
        <div className="wishlist">
          <div className="wishlist-items">
            <div className="discount">
              <p>35%</p>
            </div>
            <div className="wishimg">
              <img src="" alt="huge bag" />
            </div>
            <div className="delete">
              <img src="" alt="delete" />
            </div>

            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist