import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import defaultCardImage from "../Assets/redjoystick.png"; // Default image if none provided
import wishIcon from "../Assets/wishlist-icon.png";

function Card() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5021/api/ProductController2');
        
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="cards">
      {products.length > 0 ? (
        products.map((item) => (
          <div className="card" key={item.ProductID}>
            <div className="card-top">
              <div className="discount">
                <span>-40%</span>
              </div>
              <div className="card-icons">
                <img src={wishIcon} alt="Add to wishlist" />
              </div>
              <img
                src={defaultCardImage} // Fallback to default image if none provided
                alt={item.name || "Product image"}
              />
              <div className="card-bottom">
                <h3>{item.description || "No description available"}</h3>
                <div className="card-price">
                  <span>${item.price ? item.price.toFixed(2) : "N/A"}</span> {/* Placeholder for original price */}
                  <span>${item.price +120}</span> {/* Handle undefined price */}
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
