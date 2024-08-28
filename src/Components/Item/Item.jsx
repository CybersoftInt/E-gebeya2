import React, { useEffect, useState } from "react";
import axios from "axios";
import main_image from "../Assets/joystickmain.png";
import side_image1 from "../Assets/PS_side01.png";
import side_image2 from "../Assets/PS_side02.png";
import side_image3 from "../Assets/PS_side03.png";
import side_image4 from "../Assets/PS_side04.png";
import plus_icon from "../Assets/icon-plus.png";
import minus_icon from "../Assets/icon-minus.png";
import fast_car_icon from "../Assets/fast_car_icon.png";
import recycle_icon from "../Assets/return-icon.png";
import wishlist_icon from "../Assets/wishlist-icon.png";
import "./Item.css";
import { useParams } from "react-router-dom";

function Item() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams(); // Assuming you use React Router and have a route like /item/:productId

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5021/api/ProductController2/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError('Error fetching product details. Please try again later.');
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div className="loading-container">
  <div className="loading-spinner"></div>
  <p>Loading product details...</p>
</div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="item">
      <div className="item_dir">
        <p>
          <a href="#">Account</a> / <a href="#">Gaming</a> / <a href="#">{product?.name}</a>
        </p>
      </div>
      <div className="item_details">
        <div className="item_images">
          <div className="side_images">
            <img src={side_image1} alt="side view 1" className="side_image" />
            <img src={side_image2} alt="side view 2" className="side_image" />
            <img src={side_image3} alt="side view 3" className="side_image" />
            <img src={side_image4} alt="side view 4" className="side_image" />
          </div>
          <div className="main_image">
            <img src={main_image} alt="main image" />
          </div>
        </div>
        <div className="item_disc">
          <h1>{product?.name}</h1>
          <p>
            ({product?.stockQuantity} reviews) | <span>{product?.StockQuantity > 0 ? 'In stock' : 'Out of stock'}</span>{" "}
          </p>
          <h2>${product?.price.toFixed(2)}</h2>
          <p className="discription">
            {product?.description}
          </p>
          <hr />
          <div className="color-container">
            <h1>Colours:</h1>
            <div className="colors">
              <input type="radio" name="color" value="color1" />
              <input type="radio" name="color" value="color2" />
            </div>
          </div>
          <div className="product-size">
            <h3>Size:</h3>
            <div className="size-options">
              <input type="radio" id="size-s" name="size" value="s" />
              <label htmlFor="size-s">S</label>
              <input type="radio" id="size-m" name="size" value="m" />
              <label htmlFor="size-m">M</label>
              <input type="radio" id="size-l" name="size" value="l" />
              <label htmlFor="size-l">L</label>
              <input type="radio" id="size-xl" name="size" value="xl" />
              <label htmlFor="size-xl">XL</label>
            </div>
          </div>
          <div className="buy_ammount">
            <div className="add-minus">
              <span>
                <img id="minus" src={minus_icon} alt="minus" />
              </span>
              <span>2</span>
              <span>
                <img src={plus_icon} id="plus" alt="plus" />
              </span>
            </div>
            <button>Buy Now</button>
            <div className="wishlist_icon">
              <img src={wishlist_icon} alt="wishlist icon" />
            </div>
          </div>
          <div className="delivery">
            <div className="free">
              <img src={fast_car_icon} alt="fast car icon" />
              <div className="delivery_text">
                <h1>Free Delivery</h1>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="return">
              <img src={recycle_icon} alt="return icon" />
              <div className="delivery_text">
                <h1>Return Delivery</h1>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related_item">
        <div className="related_header">
          <div id="red_box"></div>
          <span>Related Items</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
