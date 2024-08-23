import "../../../src/Components/Cart/Cart.css";
import React, { useState } from "react";
import "../Cart/Cart.css";
import cart_image from "../Assets/joystick_red.png";

function CartProduct() {
  const price = 699.99;
  const total_price = 1899;
  const [num1, setNum1] = useState(1);
  const [price1, setPrice1] = useState(price);
  const [subtotalPrice1, setSubtotalPrice1] = useState(price);
  const  stockQuantity = 10;

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setNum1(newQuantity);
    calculateSubtotal(newQuantity);
  };

  const calculateSubtotal = (quantity) => {
    const subtotal = quantity > 0 ? price * quantity : 0;
    setSubtotalPrice1(subtotal);
  };


  return (
    <tr>
      <td>
        <img src={cart_image} alt="" />
        <span>PS5 Wireless Controller</span>
      </td>
      <td>
        <span>${price}</span>
      </td>
      <td>
        <input type="number" min={0} max={stockQuantity} value={num1} onChange={handleInputChange} />
      </td>
      <td>
        <span>${subtotalPrice1}</span>
      </td>
    </tr>
  );
}

export default CartProduct;