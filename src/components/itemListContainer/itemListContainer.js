import { useState, useEffect } from "react";
import products from "../../data/data.json";
import ItemList from "../itemList/itemList.js";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products && products.length) {
        resolve(products);
      } else {
        reject("No products found");
      }
    }, 500);
  });
};

export const getProductById = (ID) => {
  const productId = Number(ID); // Convert ID to a number

  return new Promise((resolve, reject) => {
    const product = products.find((prod) => prod.ID === productId);
    if (product) {
      resolve(product);
    } else {
      reject("Product not found");
    }
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    const productsInCategory = products.filter(
      (prod) => prod.Category === category
    );
    if (productsInCategory.length) {
      resolve(productsInCategory);
    } else {
      reject(`No products found for category: ${category}`);
    }
  });
};

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
