import React from 'react';
import './WishCard.css';
import deleteIcon from '../Assets/delete.png'; // Import delete icon
import defaultCardImage from '../Assets/redjoystick.png'; // Default image if none provided

// Updated WishCard to accept item data as props
function WishCard({ item }) {
  // Destructure item data from props
  const { wishlistItemID, productID, addedDate, Product } = item;

  // Use product data or default values if not provided
  const itemName = Product?.name || 'No name available';
  const itemPrice = Product?.price || 'N/A';
  const originalPrice = Product?.originalPrice || 'N/A';
  const itemImage = Product?.imageURL || defaultCardImage;

  return (
    <div className="wishlist-card">
      <div className="wishlist-card-top">
        <div className="discount">
          <p>35%</p> {/* Placeholder; adjust if you have discount data */}
        </div>
        <div className="delete">
          <img src={deleteIcon} alt="Delete" />
        </div>
        <img src={itemImage} alt="Product" className="wishlist-image" />
      </div>
      <div className="wishlist-card-bottom">
        <p className="item-name">{itemName}</p>
        <p className="item-price">
          ${itemPrice} <span className="original-price">${originalPrice}</span>
        </p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default WishCard;
