import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount.js";
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetail = ({ ID, Name, Image, Desc, Price, Stock, Category }) => {
  const { cart, addItem } = useContext(CartContext);

  // Find if the current item is already in the cart.
  const currentItem = cart.find((item) => item.ID === ID);
  const totalQuantityInCart = currentItem ? currentItem.quantity : 0;

  const [currentSessionQuantity, setCurrentSessionQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setCurrentSessionQuantity(quantity);

    const item = {
      ID,
      Name,
      Price,
    };

    addItem(item, quantity);
  };

  const handleBuyNowClick = (e) => {
    e.stopPropagation();
  };

  console.log("Current cart:", cart);
  console.log("Stock:", { Stock });

  return (
    <article id={ID} className="col col-4 list-product-ind item">
      <div className="card">
        <section className="card-body">
          <img src={Image} alt={Name} />
          <h2>{Name}</h2>
          <span className="category">{Category}</span>
          <span className="price">
            <span className="currency-symbol">$</span>
            {Price}
          </span>
        </section>
        <footer className="card-footer">
          {Stock - totalQuantityInCart > 0 ? (
            <>
              <ItemCount
                initial={1}
                stock={Stock - totalQuantityInCart}
                onAdd={handleOnAdd}
              />
              {currentSessionQuantity > 0 && (
                <Link to="/cart" className="Option" onClick={handleBuyNowClick}>
                  Buy Now!
                </Link>
              )}
            </>
          ) : (
            <p>Out of stock</p>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ItemDetail;
