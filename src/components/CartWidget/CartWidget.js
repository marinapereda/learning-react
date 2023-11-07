import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <div id="CartWidget">
        <Link
          to="/cart"
          className="btn btn-sm btn-secondary rounded-pill"
          style={{ display: totalQuantity > 0 ? "block" : "none" }}
        >
          <FontAwesomeIcon icon="shopping-cart" />
          <span className="badge text-bg-light ms-2">{totalQuantity}</span>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
