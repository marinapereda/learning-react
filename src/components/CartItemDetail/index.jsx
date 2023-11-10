import ImageWithLoadingBlur from "../imageLoading/imageLoading.js";

import "./index.css";

const CartItemDetail = ({ ID, Name, Image, Price, quantity }) => {
  return (
    <div className="card row align-items-center mb-4 CartItemDetail-Single">
      <div className="card-image col col-3">
        <ImageWithLoadingBlur src={Image} alt={Name} />
      </div>
      <div className="card-content col col-9 text-start">
        <ul className="list-group mb-0">
          <li className="list-group-item">
            <span>Name:</span> {Name}
          </li>
          <li className="list-group-item">
            <span>Price:</span> {Price}
          </li>
          <li className="list-group-item">
            <span>Quantity:</span> {quantity}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartItemDetail;
