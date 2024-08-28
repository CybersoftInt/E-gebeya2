// src/Components/Card/Card.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import defaultCardImage from "../Assets/redjoystick.png"; // Default image if none provided
import wishIcon from "../Assets/wishlist-icon.png";

function Card({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = categoryId
          ? `http://localhost:5021/api/Category/product/${categoryId}`
          : 'http://localhost:5021/api/ProductController2';
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products. Please try again later.');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <p>Loading products...</p>;
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
                <img src={wishIcon} alt="Add to wishlist" />
              </div>
              <img
                src={ defaultCardImage || item.imageUrl} // Use item.imageURL if available
                alt={item.name || "Product image"}
              />
            
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
        <p>No products available.</p>
      )}
    </div>
  );
}

export default Card;
