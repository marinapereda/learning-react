import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../itemListContainer/itemListContainer.js";
import ItemList from "../itemList/itemList.js";

const CategoryDetailContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]);

  return (
    <div className="row">
      <ItemList products={products} />
    </div>
  );
};

export default CategoryDetailContainer;
