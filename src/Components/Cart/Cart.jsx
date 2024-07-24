import React from 'react'
import './Cart.css'

function Cart() {
  const subtotal_price = 1750;
  const total_price = 1750;

  return (
    <div className='cart'>
      <div className="dir">
        <a href="#">Home</a>/<a href="#">Cart</a>    
      </div>
      <div className="cart-body">
        <div className="checkout">
          <div className="coupon">
            <input type="text" />
            <button placeholder="Coupon Code" >Apply Coupon</button>

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
            <div className="subtotal-header">
            <span>Product</span>
            <span>price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            </div>
            <div className="cart-items">
              <img src="" alt="" />
              <span>LCD Monitor</span>
              <span>$650</span>
              <input type="number" name="" id="" />
              <span>$650</span>
             
            </div>

          </div>
          <div className="sub-btns">
            <button>Return To Shop</button>
            <button>Update Cart</button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Cart