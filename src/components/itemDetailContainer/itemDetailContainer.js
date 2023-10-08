import React, { useState, useEffect } from "react";
import { getProductById } from "../itemListContainer/itemListContainer.js";
import ItemDetail from "../itemDetail/itemDetail.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById("1")
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="row">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
