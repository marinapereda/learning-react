import { useNavigate } from "react-router-dom";
import ItemCount from "../itemCount/itemCount.js";

const Item = ({ ID, Name, Image, Desc, Price, Stock }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/item/${ID}`);
  };

  return (
    <article
      id={ID}
      className="col col-4 list-product-ind"
      onClick={handleCardClick}
    >
      <div className="card">
        <div className="card-body">
          <img src={Image} alt={Name} />
          <h2>{Name}</h2>
          <span className="price">
            <span className="currency-symbol">$</span>
            {Price}
          </span>
        </div>
        <div className="card-footer">
          <ItemCount
            initial={1}
            stock={Stock}
            onAdd={(quantity) => console.log("Cantidad Agregada ", quantity)}
          />
        </div>
      </div>
    </article>
  );
};

export default Item;
