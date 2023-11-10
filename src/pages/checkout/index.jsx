import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemDetail from "../../components/CartItemDetail";
import { CheckoutForm } from "../../components/CheckoutForm/checkoutForm";

import "./checkout.css";

const AddOrder = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <div className="row mt-4 mb-4">
          <h1>Checkout</h1>
        </div>
        <div className="row gx-5">
          <div className="col col-6">
            <div className="receipt">
              {cart.map((p) => (
                <CartItemDetail key={p.ID} {...p} />
              ))}
              <div className="d-block text-end receipt-total">
                <h3>Total: ${total}</h3>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </>
  );
};

export { AddOrder };
