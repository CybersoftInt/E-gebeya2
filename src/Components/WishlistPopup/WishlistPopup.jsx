// src/Components/WishlistPopup/WishlistPopup.jsx
import React, { useEffect, useState } from "react";
import { fetchWishlistsByUserId, addWishlist } from "../../utils/apiService"; // Assuming these functions are defined
import "./WishlistPopup.css"; // Create CSS file for styling

const WishlistPopup = ({ userId, onClose, onAddToWishlist, productId }) => {
  const [wishlists, setWishlists] = useState([]);
  const [newWishlistName, setNewWishlistName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlists = async () => {
      try {
        const response = await fetchWishlistsByUserId(userId);
        setWishlists(response);
      } catch (err) {
        setError("Failed to fetch wishlists.");
        console.error(err);
      }
    };
    fetchWishlists();
  }, [userId]);

  const handleCreateWishlist = async () => {
    if (newWishlistName.trim()) {
      try {
        await addWishlist({ name: newWishlistName, userID: userId });
        setNewWishlistName("");
        onClose(); // Close popup after adding
        // Optionally, refresh wishlists
      } catch (err) {
        setError("Failed to create wishlist.");
        console.error(err);
      }
    }
  };

  const handleSelectWishlist = async (wishlistID) => {
    await onAddToWishlist(wishlistID, productId);
    onClose();
  };

  return (
    <div className="wishlist-popup">
      <h2>Your Wishlists</h2>
      {error && <p className="error">{error}</p>}
      {wishlists.length > 0 ? (
        wishlists.map((wishlist) => (
          <div key={wishlist.wishlistID} className="wishlist-item" onClick={() => handleSelectWishlist(wishlist.wishlistID)}>
            {wishlist.name}
          </div>
        ))
      ) : (
        <p>No wishlists available. Create one!</p>
      )}
      <input
        type="text"
        value={newWishlistName}
        onChange={(e) => setNewWishlistName(e.target.value)}
        placeholder="New Wishlist Name"
      />
      <button onClick={handleCreateWishlist}>Create Wishlist</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default WishlistPopup;
