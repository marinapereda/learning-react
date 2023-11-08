import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemDetail from "../../components/CartItemDetail";
import { CheckoutForm } from "../../components/CheckoutForm/checkoutForm";

const AddOrder = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <>
      <h1>Checkout</h1>
      <div className="test">
        {cart.map((p) => (
          <CartItemDetail key={p.ID} {...p} />
        ))}
        <h3>Total: ${total}</h3>
      </div>
      <CheckoutForm />
    </>
  );
};

export { AddOrder };
