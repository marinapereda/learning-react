import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../itemListContainer/itemListContainer.js";
import ItemDetail from "../itemDetail/itemDetail.js";

const ItemDetailContainer = ({ id: idProp }) => {
  const { ID: idFromParams } = useParams();
  const actualID = idProp || idFromParams;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(actualID)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [actualID]);

  return (
    <div className="row">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
