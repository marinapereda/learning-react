import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter row mt-1 g-3 align-items-center justify-content-between">
      <div className="col-auto">
        <div className="row align-items-center">
          <span className="col-auto form-text">How many?</span>
          <div className="col-auto">
            <div className="input-group justify-content-center">
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  decrement();
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-minus" />
              </button>
              <span className="input-group-text">{quantity}</span>
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  increment();
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-auto AddToCart">
        <Button
          className="btn btn-danger"
          onClick={(e) => {
            e.stopPropagation();
            onAdd(quantity);
          }}
          disabled={!stock}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
