import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount.js";
import { CartContext } from "../../context/CartContext.jsx";
import ImageWithLoadingBlur from "../imageLoading/imageLoading.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./itemDetail.css";

const ItemDetail = ({
  ID,
  Name,
  Image,
  Category,
  Description,
  Price,
  Stock,
}) => {
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
      Category,
      Description,
      Stock,
    };

    addItem(item, quantity);
  };

  const handleBuyNowClick = (e) => {
    e.stopPropagation();
  };

  console.log("Current cart:", cart);
  console.log("Stock:", { Stock });

  return (
    <>
      <div className="row mt-5 mv-5 align-items-center product-single">
        <div id={ID} className="col col-6" data-cat={Category}>
          <div className="card">
            <section className="card-body">
              <div className="card-image">
                <ImageWithLoadingBlur src={Image} alt={Name} />
              </div>
            </section>
          </div>
        </div>
        <div className="col col-6 product-description">
          <h1>{Name}</h1>
          <span className="category">
            <em>Collection:</em> {Category}
          </span>
          <span className="price">
            <span className="currency-symbol">$</span>
            {Price}
          </span>
          {Stock - totalQuantityInCart > 0 ? (
            <>
              {quantityAdded > 0 ? (
                <div className="Option d-grid">
                  <Link
                    to="/cart"
                    className="btn btn-danger"
                    onClick={handleBuyNowClick}
                  >
                    Buy Now! <FontAwesomeIcon icon="fa-solid fa-circle-right" />
                  </Link>
                </div>
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
          <div className="description-txt">
            <p>{Description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
