import React, { useState, useEffect } from "react";
import Item from "../item/item.js";

const ItemList = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <>
      <div className="row justify-content-between item-list mv-5 mb-5 mt-5 gx-5 gy-3">
        {products.map((product) => (
          <Item key={product.ID} {...product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
