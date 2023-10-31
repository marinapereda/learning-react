import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  console.log("cart");

  const addItem = (item, quantityToAdd) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.ID === item.ID
      );

      // If the item exists, update its quantity
      if (existingItemIndex !== -1) {
        return prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevCart, { ...item, quantity: quantityToAdd }];
      }
    });
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.ID !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.ID === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
