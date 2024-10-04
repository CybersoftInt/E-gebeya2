import React, { useEffect, useState } from 'react';
import './Wishlist.css';
import WishCard from '../Wishlist Card/WishCard';
import Card from '../Card/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { fetchUserIdByEmail, fetchWishlistsByUserId, fetchWishlistItemsById, fetchProductById } from '../../utils/apiService';

function Wishlist() {
  const [userWishlists, setUserWishlists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = sessionStorage.getItem('userName');
        if (!email) throw new Error('User email not found in sessionStorage');

        const userId = await fetchUserIdByEmail(email);
        const userWishlistsData = await fetchWishlistsByUserId(userId);
        console.log("userWishlistsData "+ userWishlistsData)

        const wishlistsWithItems = await Promise.all(
          userWishlistsData.map(async (wishlist) => {
            const items = await fetchWishlistItemsById(wishlist.wishlistID);
            const itemsWithProducts = await Promise.all(
              items.map(async (item) => {
                const product = await fetchProductById(item.productID);
                return { ...item, Product: product };
              })
            );

            return { ...wishlist, items: itemsWithProducts };
          })
        );

        setUserWishlists(wishlistsWithItems);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleDeleteItem = (wishlistItemID) => {
    setUserWishlists(prevWishlists =>
      prevWishlists.map(wishlist => ({
        ...wishlist,
        items: wishlist.items.filter(item => item.wishlistItemID !== wishlistItemID),
      }))
    );
  };

  //if (error) return <div>Error: {error}</div>;

  return (
    <div className='wishlist-container'>
      <p id='hw'>
        <a href="#">Home</a> / <a href="#">Wishlist</a>
      </p>
      <div className="header">
        <h4>Wishlist ({userWishlists.length})</h4>
        {console.log(userWishlists.length)}
        <button>Move All To Bag</button>
      </div>

      <div className="wishlist-items-container">
        {userWishlists.map(wishlist => (
          <div key={wishlist.wishlistID} className="wishlist-section">
            <h4>{wishlist.name}({wishlist.items.length})</h4>
            <div>
              {wishlist.items.length > 0 ? (
                wishlist.items.map(item => {
                  console.log('Rendering WishCard with item:', item); 
                  return <WishCard key={item.wishlistItemID} item={item} onDelete={handleDeleteItem} />;
                })
              ) : (
                <p>No items in this wishlist</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="wishlist-for-you">
        <h4>Just For You</h4>
        <button>See All</button>
      </div>
      <div className="just-for-you">
        <Card categoryId={null} />
      </div>
    </div>
  );
}

export default Wishlist;
