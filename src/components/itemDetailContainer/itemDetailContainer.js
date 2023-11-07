import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail.js";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { ID } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", ID);

    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();
          console.log("muestrame", data);
          const productAdapted = {
            ID: response.id,
            Name: data.Name,
            Description: data.Description,
            Price: data.Price,
            Image: data.Image,
            Stock: data.Stock,
          };
          setProduct(productAdapted);
        } else {
          console.error("No product found for ID:", ID);
        }
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      })
      .finally(() => setLoading(false));
  }, [ID]);

  return (
    <div className="container">
      {product ? (
        <ItemDetail {...product} />
      ) : loading ? (
        "Loading..."
      ) : (
        "Product not found"
      )}
    </div>
  );
};

export default ItemDetailContainer;
