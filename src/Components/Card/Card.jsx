// src/Components/Card/Card.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import defaultCardImage from "../Assets/redjoystick.png"; // Default image if none provided
import wishIcon from "../Assets/wishlist-icon.png";
import cartIcon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading"
function Card({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const url = categoryId
    //       ? `http://localhost:5021/api/Category/product/${categoryId}`
    //       : 'http://localhost:5021/api/ProductController2';
    //     const response = await axios.get(url);
    //     console.log("Fetched products:", response.data);
    //     setProducts(response.data);
    //   } catch (error) {
    //     setError('Error fetching products. Please try again later.');
    //     console.error('Error fetching products:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    const fetchProducts = async () => {
      try {
          const url = categoryId
              ? `http://localhost:5021/api/Category/product/${categoryId}`
              : 'http://localhost:5021/api/ProductController2';
  
          const response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch products');
          
          const data = await response.json();

          const randomProducts = getRandomProducts(data, 8);
        setProducts(randomProducts);
          console.log('Fetched products:', data);
      } catch (error) {
          setError('Error fetching products. Please try again later.');
          console.error('Error fetching products:', error);
      } finally {
          setLoading(false);
      }
  };
  

    fetchProducts();
  }, [categoryId]);
  const getRandomProducts = (productsArray, count) => {
    const shuffled = [...productsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  if (loading) return <Loading message="Loading products.."/>;
  if (error) return <p>{error}</p>;
  const handleAddToWishlist = (productId) => {
    // Add logic to handle adding to wishlist
    console.log(`Added product ${productId} to wishlist`);
  };

  const handleAddToCart = (productId) => {
    // Add logic to handle adding to cart
    console.log(`Added product ${productId} to cart`);
  };
  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="cards">
      {products.length > 0 ? (
        products.map((item) => (
          
          <div className="card" key={item.productID}>
            <div className="card-top">
              <div className="discount">
                <span>-40%</span>
              </div>
              <div className="card-icons">
                <img src={wishIcon} alt="Add to wishlist" onClick={() => handleAddToWishlist(item.productID)} />
                <img
                  src={cartIcon}
                  alt="Add to cart"
                  onClick={() => handleAddToCart(item.productID)}
                />
              </div>
              <Link to={`/item/${item.productID}`}>
                <img src={item.imageURL || defaultCardImage} alt={item.name} className="card-image" />
              </Link>
            
            <div className="card-bottom">
              <h3>{item.description || "No description available"}</h3>
              <div className="card-price">
                <span>${item.price ? item.price.toFixed(2) : "N/A"}</span>
                <span>${item.price ? (item.price + 120).toFixed(2) : "N/A"}</span>
              </div>
            </div>
          </div>
          </div>
        ))
      ) : (
        <div className="no-products-container">
      <div className="no-products-icon">&#128577;</div> {/* Use an emoji as an icon */}
      <p className="no-products-text">No products available at the moment</p>
      <p className="no-products-subtext">Please check back later or browse our other categories.</p>
    </div>
      )}
    </div>
  );
}

export default Card;
