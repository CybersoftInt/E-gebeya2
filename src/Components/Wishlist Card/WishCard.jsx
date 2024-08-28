import React from 'react';
import './WishCard.css';
import wishimg from '../Assets/Gucci_bag.png';
import deleteIcon from '../Assets/delete.png'; // Import delete icon

function WishCard() {
  const itemName = 'Gucci duffle bag';
  const discount = '35%';

  return (
    <div className="wishlist-card">
      <div className="wishlist-card-top">
        <div className="discount">
          <p>{discount}</p>
        </div>
        <div className="delete">
          <img src={deleteIcon} alt="Delete" />
        </div>
        <img src={wishimg} alt="Product" className="wishlist-image" />
      </div>
      <div className="wishlist-card-bottom">
        <p className="item-name">{itemName}</p>
        <p className="item-price">
          $590 <span className="original-price">$1000</span>
        </p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default WishCard;
