import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount.js";
import { CartContext } from "../../context/CartContext.jsx";

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
      className="col col-4 list-product-ind item"
      onClick={handleCardClick}
    >
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
          {quantityAdded > 0 ? (
            <Link
              to="/cart"
              className="Option btn btn-primary"
              onClick={handleBuyNowClick}
            >
              Buy Now!
            </Link>
          ) : (
            <ItemCount initial={1} stock={Stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </div>
    </article>
  );
};

export default Item;
