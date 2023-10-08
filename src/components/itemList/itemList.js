import Item from "../item/item.js";

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((prod) => (
        <Item key={prod.ID} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
