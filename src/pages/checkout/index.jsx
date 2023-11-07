import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemDetail from "../../components/CartItemDetail";
import Checkout from "../../components/Checkout/checkout";
import { Cart } from "../cart/index";

const AddOrder = () => {
  const { cart, totalQuantity, total } = useContext(CartContext);

  return (
    <>
      <h1>Checkout</h1>
      <div className="test">
        {cart.map((p) => (
          <CartItemDetail key={p.ID} {...p} />
        ))}
        <h3>Total: ${total}</h3>
      </div>
      <Checkout />
    </>
  );
};

export { AddOrder };
