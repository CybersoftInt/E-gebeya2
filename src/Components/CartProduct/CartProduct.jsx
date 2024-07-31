import React from "react";
import "../../../src/Components/Cart/Cart.css";
function CartProduct() {
  return (
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
      </table>
    </div>
  );
}

export default CartProduct;
