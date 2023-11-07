import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList.js";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

// Define fetchProducts
export const fetchProducts = (Category = null) => {
  const collectionRef = Category
    ? query(collection(db, "products"), where("Category", "==", Category))
    : collection(db, "products");

  return getDocs(collectionRef).then((response) => {
    return response.docs.map((doc) => {
      const data = doc.data();
      return { ID: doc.id, ...data };
    });
  });
};

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { Category } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchProducts(Category)
      .then((response) => {
        // console.log("new new response", response);
        setProducts(response);
      })

      .catch(console.error)
      .finally(() => setLoading(false));
  }, [Category]);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
