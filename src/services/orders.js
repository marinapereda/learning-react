import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";

const docRef = doc(db, "orders", ID);

export const ordersService = {
  getOrders,
  getOrder,
  createOrder,
  removeOrder,
  updateOrder,
};
