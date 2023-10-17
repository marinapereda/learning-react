import React, { useState, useEffect } from "react";
import products from "../../data/data.json";
import ItemList from "../itemList/itemList.js";

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
  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
