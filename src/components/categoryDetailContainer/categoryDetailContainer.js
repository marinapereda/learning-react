import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/itemList";
import { fetchProducts } from "../itemListContainer/itemListContainer";

const CategoryDetailContainer = () => {
  const { Category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(Category)
      .then((response) => {
        console.log("response nuevo", response);
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [Category]);

  return (
    <div className="container">
      <h2>{Category}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default CategoryDetailContainer;
