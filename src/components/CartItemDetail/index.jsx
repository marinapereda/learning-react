import "./index.css";

const CartItemDetail = ({ ID, Name, Price, quantity }) => {
  return (
    <ul className="CartItemDetail-Single">
      <li>
        <span>ID:</span> {ID}
      </li>
      <li>
        <span>Name:</span> {Name}
      </li>
      <li>
        <span>Price:</span> {Price}
      </li>
      <li>
        <span>Quantity:</span> {quantity}
      </li>
    </ul>
  );
};

export default CartItemDetail;
