import React, { useState } from "react";
import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";
import cart_image from "../Assets/joystick_red.png";
import { Link } from "react-router-dom";
function Cart() {
  const price = 699.99;
  const total_price = 1899;
  const [num1, setNum1] = useState(1);
  const [price1, setPrice1] = useState(price);
  const [subtotalPrice1, setSubtotalPrice1] = useState(price);
  const [totalPrice1, setTotalPrice1] = useState(0);


  let listProducts = [];
  const initApp = () => {
    fetch('./data2.json')
      .then(response => response.json())
      .then(data => {
        listProducts = data;
        console.log(listProducts);
      });
  };
  // initApp();


  return (
    <div className="cart">
      <div className="page">
        <a href="#">Home</a>/<a href="#">Cart</a>
      </div>
      <div className="cart-body">
        
        <div className="update-cart">

          <div className="subtotal">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td>
                    <img src={cart_image} alt="" />
                    <span>LCD Monitor</span>
                  </td>
                  <td>
                    <span>${price.toFixed(2)}</span>
                  </td>
                  <td>
                    <input type="number" min={0} value={num1} onChange={handleInputChange} />
                  </td>
                  <td>
                    <span>${subtotalPrice1.toFixed(2)}</span>
                  </td>
                </tr> */}
                {/* Add more rows as needed */}
                <CartProduct/>
                <CartProduct/>

              </tbody>
              
            </table>
          </div>
          <div className="sub-btns">
                <Link to="/"><button >Return To Shop</button></Link>
            <button>Update Cart</button>
          </div>
          <div className="check-coupon">
          <div className="checkout">
          <div className="coupon">
            <input type="text" />
            <button placeholder="Coupon Code">Apply Coupon</button>
          </div>
          <div className="cart-total">
            <h1>Cart Total</h1>
            <div className="price1">
              <span>Subtotal:</span>
              <span>${subtotalPrice1}</span>
            </div>
            <hr />
            <div className="price2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="price3">
              <span>Total:</span>
              <span>${total_price}</span>
            </div>
            <button>Procees to checkout</button>
          </div>
        </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;