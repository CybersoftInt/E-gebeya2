import React from "react";
import main_image from "../Assets/joystickmain.png";
import "./Item.css";
import side_image1 from "../Assets/PS_side01.png";
import side_image2 from "../Assets/PS_side02.png";
import side_image3 from "../Assets/PS_side03.png";
import side_image4 from "../Assets/PS_side04.png";
import plus_icon from "../Assets/icon-plus.png";
import minus_icon from "../Assets/icon-minus.png";
import fast_car_icon from "../Assets/fast_car_icon.png";
import recycle_icon from "../Assets/return-icon.png";
import wishlist_icon from "../Assets/wishlist-icon.png";
import { Form } from "react-router-dom";
function Item() {
  return (
    <div className="item">
      <div className="item_dir">
        <p>
          <a href="#">Account</a> / <a href="#">Gaming</a> / <a href="#">Havic HV G-92 Gamepad</a>
        </p>
      </div>
      <div className="item_details">
        <div className="item_images">
          <div className="side_images">
            <img src={side_image1} alt="main image" className="side_image" />
            <img src={side_image2} alt="main image" className="side_image" />
            <img src={side_image3} alt="main image" className="side_image" />
            <img src={side_image4} alt="main image" className="side_image" />
          </div>
          <div className="main_image">
            <img src={main_image} alt="main image" />
          </div>
        </div>
        <div className="item_disc">
          <h1>HavicHV G-92 Gamepad</h1>
          <p>
            (150 reviews) | <span>in stock</span>{" "}
          </p>
          <h2>$192.00</h2>
          <p className="discription">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          <div className="color-container">
            <h1>Colours:</h1>
            <div className="colors">
              <input type="radio" name="color" value="color1" />
              <input type="radio" name="color" value="color2" />
            </div>
          </div>
          <div class="product-size">
            <h3>Size:</h3>
            <div class="size-options">
              <input type="radio" id="size-s" name="size" value="s" />
              <label for="size-s">S</label>
              <input type="radio" id="size-m" name="size" value="m" />
              <label for="size-m">M</label>
              <input type="radio" id="size-l" name="size" value="l" />
              <label for="size-l">L</label>
              <input type="radio" id="size-xl" name="size" value="xl" />
              <label for="size-xl">XL</label>
            </div>
          </div>
          <div className="buy_ammount">
            <div className="add-minus">
              <span>
                <img id="minus" src={minus_icon} alt="" />
              </span>
              <span>2</span>
              <span>
                <img src={plus_icon} id="plus" alt="" />
              </span>
            </div>
            <button>Buy Now</button>
            <div className="wishlist_icon">
              <img src={wishlist_icon} alt="icon" />
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
              <img src={recycle_icon} alt="fast car icon" />
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
