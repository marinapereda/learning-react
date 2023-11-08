import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  collection,
  getDocs,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const getOrders = async () => {
  const db = getFirestore();
  const collRef = collection(db, "orders");
  const snapshot = await getDocs(collRef);

  return snapshot.docs.map((doc) => ({ ID: doc.id, ...doc.data() }));
};

const getOrder = async (ID) => {
  const db = getFirestore();
  const docRef = doc(db, "orders", ID);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    return { ID: snapshot.id, ...snapshot.data() };
  } else {
  }
};

const createOrder = async (data) => {
  const db = getFirestore();
  const collRef = collection(db, "orders");
  const orderDataWithServerTimestamp = {
    ...data,
    createdAt: serverTimestamp(),
  };
  const resp = await addDoc(collRef, orderDataWithServerTimestamp);
  console.log(resp.id);
  return resp;
};

const removeOrder = (ID) => {};

const getProducts = async () => {
  const db = getFirestore();
  const collRef = collection(db, "products");
  const snapshot = await getDocs(collRef);

  return snapshot.docs.map((doc) => ({ ID: doc.id, ...doc.data() }));
};

const getProduct = async (ID) => {
  const db = getFirestore();
  const docRef = doc(db, "products", ID);

  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    return { ID: snapshot.id, ...snapshot.data() };
  } else {
  }
};

const updateProduct = async (ID, newStock) => {
  const db = getFirestore();
  const productRef = doc(db, "products", ID);
  await updateDoc(productRef, { Stock: newStock });
};

export const ordersService = {
  getOrders,
  getOrder,
  createOrder,
  removeOrder,
  getProducts,
  getProduct,
  updateProduct,
};
