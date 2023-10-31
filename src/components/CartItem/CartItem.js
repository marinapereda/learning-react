import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ ID, Name, Price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(ID);
  };

  return (
    <div className="cart-item">
      <h4>{Name}</h4>
      <p>${Price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
