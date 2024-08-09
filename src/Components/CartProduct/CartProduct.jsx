import "../../../src/Components/Cart/Cart.css";
import React, { useState } from "react";
import "../Cart/Cart.css";
import cart_image from "../Assets/joystick_red.png";

function CartProduct() {
  const price = 650;
  const total_price = 1750;
  const [num1, setNum1] = useState(1);
  const [price1, setPrice1] = useState(price);
  const [subtotalPrice1, setSubtotalPrice1] = useState(price);

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
    </tr>
  );
}

export default CartProduct;