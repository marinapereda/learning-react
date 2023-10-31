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
          className="CartWidget"
          style={{ display: totalQuantity > 0 ? "block" : "none" }}
        >
          <FontAwesomeIcon icon="shopping-cart" />
          {totalQuantity}
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
