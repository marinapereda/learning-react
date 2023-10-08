import ItemCount from "../itemCount/itemCount.js";

const ItemDetail = ({ ID, Name, Image, Desc, Price, Stock }) => {
  return (
    <article id={ID} className="col col-md-6 offset-md-3 list-product-ind">
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

export default ItemDetail;
