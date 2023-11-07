import { useState } from "react";
import { ordersService } from "../../services/orders";

const handleSubmit = () => {
  "Not defined";
};

const CheckoutForm = () => {
  const [order, setOrder] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = () => {
    ordersService.createOrder(order);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name={order.name}
          value={order.name}
          onChange={(e) => setOrder({ ...order, name: e.target.value })}
        ></input>
        <input
          type="email"
          name={order.email}
          value={order.email}
          onChange={(e) => setOrder({ ...order, email: e.target.value })}
        ></input>
        <button>Purchase</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
