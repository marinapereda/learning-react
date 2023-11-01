import Item from "../item/item.js";

const ItemList = ({ products }) => {
  if (!products) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="row">
      {products.map((prod) => (
        <Item key={prod.ID} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
