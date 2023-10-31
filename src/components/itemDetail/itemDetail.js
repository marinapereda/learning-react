import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount.js";

const ItemDetail = ({ ID, Name, Image, Desc, Price, Stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  const handleBuyNowClick = (e) => {
    // This stops the click from propagating up to the parent elements
    e.stopPropagation();
  };

  return (
    <article id={ID} className="col col-md-6 offset-md-3 list-product-ind test">
      <div className="card">
        <section className="card-body">
          <img src={Image} alt={Name} />
          <h2>{Name}</h2>
          <span className="price">
            <span className="currency-symbol">$</span>
            {Price}
          </span>
        </section>
        <footer className="card-footer">
          {quantityAdded > 0 ? (
            <Link to="/cart" className="Option" onClick={handleBuyNowClick}>
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

export default ItemDetail;
