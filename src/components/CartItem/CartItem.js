import "./CartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ ID, Name, Price, Image, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(ID);
  };

  return (
    <div className="p-2 card cart-item mb-3">
      <div className="card-image">
        <img src={Image} alt={Name} className="img-fluid rounded-start" />
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col col-md-6 d-inline-flex">
            <h5 className="card-title">{Name}</h5>
          </div>
          <div className="col col-md-3 d-inline-flex">
            <p className="card-text">${Price}</p>
          </div>
          <div className="col col-md-3 d-inline-flex">
            <p className="card-text">Quantity: {quantity}</p>
          </div>
        </div>
      </div>
      <div className="card-button">
        <button className="btn btn-secondary" onClick={handleRemove}>
          Remove <FontAwesomeIcon icon="fa-solid fa-trash-can" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
