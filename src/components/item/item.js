import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount.js";
import { CartContext } from "../../context/CartContext.jsx";
import ImageWithLoadingBlur from "../imageLoading/imageLoading.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ ID, Name, Image, Desc, Price, Stock, Category }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    e.preventDefault();
    navigate(`/item/${ID}`);
  };

  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
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

  return (
    <article
      id={ID}
      className="col col-lg-4 col-md-6 col-sm-12 mb-5 list-product-ind item"
      data-cat={Category}
      onClick={handleCardClick}
    >
      <div className="card">
        <section className="card-body">
          <div className="card-image">
            <div className="card-counter">
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
                <ItemCount initial={1} stock={Stock} onAdd={handleOnAdd} />
              )}
            </div>
            <ImageWithLoadingBlur src={Image} alt={Name} />
          </div>
          <footer className="card-footer">
            <div className="row align-items-center">
              <div className="col col-sm-8 text-start">
                <h3>{Name}</h3>
              </div>
              <div className="col col-sm-4 text-end">
                <span className="price">
                  <span className="currency-symbol">$</span>
                  {Price}
                </span>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </article>
  );
};

export default Item;
