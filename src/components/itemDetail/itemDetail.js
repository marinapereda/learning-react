import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount.js";
import { CartContext } from "../../context/CartContext.jsx";
import ImageWithLoadingBlur from "../imageLoading/imageLoading.js";

import "./itemDetail.css";

const ItemDetail = ({ ID, Name, Image, Desc, Price, Stock, Category }) => {
  const { cart, addItem } = useContext(CartContext);

  // Find if the current item is already in the cart.
  const currentItem = cart.find((item) => item.ID === ID);
  const totalQuantityInCart = currentItem ? currentItem.quantity : 0;

  const [quantityAdded, setQuantityAdded] = useState(0);

  const [currentSessionQuantity, setCurrentSessionQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setCurrentSessionQuantity(quantity);
    setQuantityAdded(quantity);

    const item = {
      ID,
      Name,
      Price,
      Image,
    };

    addItem(item, quantity);
  };

  const handleBuyNowClick = (e) => {
    e.stopPropagation();
  };

  console.log("Current cart:", cart);
  console.log("Stock:", { Stock });

  return (
    <article
      id={ID}
      className="col col-4 list-product-ind item"
      data-cat={Category}
    >
      <div className="card">
        <section className="card-body">
          <div className="card-image">
            <div className="card-counter">
              {Stock - totalQuantityInCart > 0 ? (
                <>
                  {quantityAdded > 0 ? (
                    <Link
                      to="/cart"
                      className="Option btn btn-primary test"
                      onClick={handleBuyNowClick}
                    >
                      Buy Now!
                    </Link>
                  ) : (
                    <ItemCount
                      initial={1}
                      stock={Stock - totalQuantityInCart}
                      onAdd={handleOnAdd}
                    />
                  )}
                </>
              ) : (
                <p>Out of stock</p>
              )}
            </div>
            <ImageWithLoadingBlur src={Image} alt={Name} />
          </div>
          <footer className="card-footer">
            <h3>{Name}</h3>
            <span className="category">{Category}</span>
            <span className="price">
              <span className="currency-symbol">$</span>
              {Price}
            </span>
          </footer>
        </section>
      </div>
    </article>
  );
};

export default ItemDetail;
