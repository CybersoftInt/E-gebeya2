import React, { useState, useEffect } from "react";
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
  // const [data, setData] = useEffect([]);

  const  products2 = [
    {
      id: "001",
      name: "TestProduct",
      description: "its is a test product",
      price: 200,
      catagoryId: "11",
      color: "black",
      size: "M",
      stockQuantity: 100,
      imageUrl: "./src/Components/Assets/ipad_gaming.png",
      brand: "NBA",
    },
    {
      id: "002",
      name: "Gaming Laptop",
      description:
        "A powerful gaming laptop for the ultimate gaming experience",
      price: 1299.99,
      catagoryId: "12",
      color: "grey",
      size: "N/A",
      stockQuantity: 50,
      imageUrl: "./src/Components/Assets/ipad_gaming.png",
      brand: "Razer",
    },
    {
      id: "003",
      name: "Wireless Gaming Mouse",
      description: "High-precision wireless mouse for gaming enthusiasts",
      price: 79.99,
      catagoryId: "13",
      color: "black",
      size: "N/A",
      stockQuantity: 75,
      imageUrl: "./src/Components/Assets/ipad_gaming.png",
      brand: "Logitech",
    },
  ];
  const [data, setData] = useState([])
  useEffect(() => {
    setData(products2);
  });  
  // initApp();

  return (
    <div className="cart">
      <div className="cart-body">
        <div className="update-cart">
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
                <CartProduct />
                <CartProduct />

                {data && data.length > 0
                  ? data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img src={"{item.imageUrl}"} alt="" />
                            <span>{item.name}</span>
                          </td>
                          <td>
                            <span>${item.price}</span>
                          </td>
                          <td>
                            <input
                              type="number"
                              min={0}
                              max={10}
                              value={num1}
                            />
                          </td>
                          <td>
                            <span>$555</span>
                          </td>
                        </tr>
                      );
                    })
                  : "Loading..."}
              </tbody>
            </table>
          </div>
          <div className="sub-btns">
            <Link to="/">
              <button>Return To Shop</button>
            </Link>
            <button>Update Cart</button>
          </div>
                  </div>
      </div>
    </div>
  );
}

export default Cart;
