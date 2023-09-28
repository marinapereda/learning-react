import React, { useState, useEffect } from "react";
import products from "../data/data.json";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Simulating a fetch request with a timeout for demonstration
    setTimeout(() => {
      setProductList(products);
    }, 3000);
  }, []);

  return (
    <div>
      {productList.map((product) => (
        <div key={product.ID}>
          <h2>{product.Name}</h2>
          <p>{product.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
