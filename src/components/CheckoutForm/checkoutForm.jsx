import { useState, useEffect } from "react";
import { ordersService } from "../../services/orders";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [timestamp, setTimestamp] = useState(Date.now());
  const { cart, clearCart, total } = useContext(CartContext);
  const [order, setOrder] = useState({
    name: "",
    email: "",
    orderDetails: "",
  });

  const [products, setProducts] = useState(null);

  // Effect to run whenever the cart changes
  useEffect(() => {
    setLoading(true);
    console.log(cart);

    // Map the cart items to a string using the correct property names
    const details = cart
      .map(
        (item) =>
          `${item.Name} (x${item.quantity}): $${(
            item.Price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    // Update the order state
    setOrder((prev) => ({ ...prev, orderDetails: details }));
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Set the timestamp to the current time
    const currentTimestamp = Date.now();

    const orderData = {
      ...order,
      timestamp: currentTimestamp,
      total: total,
    };

    try {
      // Check stock and create the order
      for (const item of cart) {
        const docRef = doc(db, "products", item.ID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = docSnap.data();
          const currentStock = Number(productData.Stock);
          const quantityOrdered = Number(item.quantity);
          const newStock = currentStock - quantityOrdered;

          if (typeof newStock === "number" && !isNaN(newStock)) {
            await updateDoc(docRef, { Stock: newStock });
          } else {
            console.error(
              `Calculated new stock for ${item.Name} is not a number:`,
              newStock
            );
            throw new Error("Stock calculation error");
          }
        } else {
          console.error(`No product found for ID: ${item.ID}`);
          throw new Error("Product not found");
        }
      }

      // Create the order
      const docRef = await ordersService.createOrder(orderData);
      console.log("Order ID:", docRef.id);

      // Clear the cart & get back to the Homepage after a successful order
      clearCart();
      navigate("/");

      console.log("Order placed and stock updated successfully.");
    } catch (error) {
      console.error("Failed to place order or update stock:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="timestamp" value={timestamp} />
      <div className="d-block text-start mb-2">
        <label className="form-label" htmlFor="">
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={order.name}
          onChange={(e) => setOrder({ ...order, name: e.target.value })}
        ></input>
      </div>
      <div className="d-block text-start mb-2">
        <label className="form-label" htmlFor="">
          Email:
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={order.email}
          onChange={(e) => setOrder({ ...order, email: e.target.value })}
        ></input>
      </div>
      <div className="d-block text-start mb-4">
        <label className="form-label">Your Order Information:</label>
        <textarea
          name="orderDetails"
          value={order.orderDetails}
          className="form-control"
          readOnly
        ></textarea>
      </div>
      <div className="d-block text-start">
        <button type="submit" className="btn btn-danger">
          Purchase
        </button>
      </div>
    </form>
  );
};

export { CheckoutForm };
