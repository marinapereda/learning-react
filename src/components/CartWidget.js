import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faShoppingCart);

const Cart = () => {
  return (
    <>
      <FontAwesomeIcon icon="shopping-cart" />
      <span className="ms-1">3</span>
    </>
  );
};

export default Cart;
