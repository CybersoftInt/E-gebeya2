import React from "react";
import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";
import cart_image from "../Assets/joystick_red.png"
function Cart() {
  const subtotal_price = 1750;
  const total_price = 1750;

  return (
    <div className="cart">
      <div className="page">
        <a href="#">Home</a>/<a href="#">Cart</a>
      </div>
      <div className="cart-body">
        <div className="checkout">
          <div className="coupon">
            <input type="text" />
            <button placeholder="Coupon Code">Apply Coupon</button>
          </div>
          <div className="cart-total">
            <h1>Cart Total</h1>
            <div className="price1">
              <span>Subtotal:</span>
              <span>{subtotal_price}</span>
            </div>
            <hr />
            <div className="price2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="price3">
              <span>Total:</span>
              <span>{total_price}</span>
            </div>
            <button>Procees to checkout</button>
          </div>
        </div>
        <div className="update-cart">
          <div className="subtotal">
            <table>
              <tr>
                <th>Product</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              <tr>
                <td>
                  <img src={cart_image} alt="" />
                  <span>LCD Monitor</span>
                </td>
                <td>
                  <span>$650</span>
                </td>
                <td>
                  <input type="number" name="" id="" />
                </td>
                <td>
                  <span>$650</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="" alt="" />
                  <span>LCD Monitor</span>
                </td>
                <td>
                  <span>$650</span>
                </td>
                <td>
                  <input type="number" name="" id="" />
                </td>
                <td>
                  <span>$650</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={cart_image} alt="" />
                  <span>LCD Monitor</span>
                </td>
                <td>
                  <span>$650</span>
                </td>
                <td>
                  <input type="number" name="" id="" />
                </td>
                <td>
                  <span>$650</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="sub-btns">
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
