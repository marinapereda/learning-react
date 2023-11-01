import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No items in Cart</h1>
        <Link to="/" className="Option">
          Products
        </Link>
      </div>
    );
  }

  return (
    <div class="col col-12">
      {cart.map((p) => (
        <CartItem key={p.ID} {...p} />
      ))}
      <div className="row">
        <div className="col col-md-5"></div>
        <div className="col col-md-7 text-end mb-2">
          <h3>Total: ${total}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-5"></div>
        <div className="col col-md-7 text-end">
          <button
            onClick={() => clearCart()}
            className="Button btn btn-outline-secondary me-2"
          >
            Clean Cart
          </button>
          <Link to="/checkout" className="Option btn btn-danger">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
