import { getUserName } from "./authService";

// src/services/apiService.js
const API_URL = 'http://localhost:5021/api/';

const getAuthHeaders = () => {
  const token = sessionStorage.getItem('jwt');
  return {
    Authorization: `Bearer ${token}`
  };
};

export const fetchProtectedData = async () => {
  try {
    const response = await fetch(`${API_URL}/protected-endpoint`, {
      headers: {
        ...getAuthHeaders()
      }
    });
    if (!response.ok) throw new Error('Failed to fetch protected data');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// utils/api.js
export const fetchWishlistsByUserId = async (userId) => {
  const response = await fetch(`http://localhost:5021/api/Wishlist/user/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch wishlists');
  }
  const data = await response.json();
  console.log(data);
  return data; // Adjust based on the actual response structure
};
// utils/api.js
export const fetchUserIdByEmail = async (email) => {
  const response = await fetch(`http://localhost:5021/api/Person/email/${encodeURIComponent(email)}`);
  if (!response.ok) {
    console.log("user not regitered");
  }
  const data = await response.json();
  return data.UserID; // Adjust based on the actual response structure
};
export const fetchuserId = async ()=>{
  const useremail = getUserName();
  return fetchUserIdByEmail(useremail)
}

// utils/api.js
export const fetchAllWishlists = async () => {
  const response = await fetch('http://localhost:5021/api/Wishlist');
  if (!response.ok) {
    throw new Error('Failed to fetch all wishlists');
  }
  const data = await response.json();
  return data; // Adjust based on the actual response structure
};

// src/utils/apiService.js
export const fetchWishlistItemsById = async (wishlistId) => {
  const response = await fetch(`http://localhost:5021/api/Wishlist/${wishlistId}/items`);
  if (!response.ok) throw new Error('Failed to fetch wishlist items');
  return await response.json();
};
export const fetchProductById = async (productID) => {
  const response = await fetch(`http://localhost:5021/api/ProductController2/${productID}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return await response.json();
};
// src/utils/apiService.js

export const addWishlist = async (userId, wishlistName) => {
  const response = await fetch('http://localhost:5021/api/Wishlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userID: userId,
      name: wishlistName,
      createdDate: new Date().toISOString(), // Adjust based on how your backend handles dates
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to add wishlist');
  }

  const data = await response.json();
  return data;
};

// utils/apiService.js
export const addWishlistItem = async (wishlistID, productId) => {
  const response = await fetch(`http://localhost:5021/api/Wishlist/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wishlistID, productId }),
  });
  console.log(response);

  if (!response.ok) {
    throw new Error(`Failed to add item to wishlist: ${response.statusText}`);
  }
  
  return await response.json();
};
