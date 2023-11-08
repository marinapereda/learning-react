import { useState, useEffect } from "react";
import { ordersService } from "../../services/orders";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

const CheckoutForm = () => {
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
    const currentTimestamp = Date.now(); // Or use new Date() to get a date object

    // Construct the order data with the timestamp
    const orderData = {
      ...order,
      timestamp: currentTimestamp, // This is the client-side timestamp, consider using serverTimestamp() for consistency
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

      // Clear the cart after a successful order
      clearCart();

      console.log("Order placed and stock updated successfully.");
      // ... handle additional success logic, such as redirecting to a confirmation page ...
    } catch (error) {
      console.error("Failed to place order or update stock:", error);
      // ... handle the error ...
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="timestamp" value={timestamp} />
      <div className="input-group">
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          value={order.name}
          onChange={(e) => setOrder({ ...order, name: e.target.value })}
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={order.email}
          onChange={(e) => setOrder({ ...order, email: e.target.value })}
        ></input>
      </div>
      <div className="input-group">
        <label>Your Order Information:</label>
        <textarea
          name="orderDetails"
          value={order.orderDetails}
          readOnly
        ></textarea>
      </div>
      <div className="input-group">
        <button type="submit">Purchase</button>
      </div>
    </form>
  );
};

export { CheckoutForm };
