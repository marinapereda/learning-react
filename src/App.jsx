import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext, CartProvider } from "./context/CartContext";

/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar as NavbarBS,
  Nav,
  NavDropdown,
  Button,
  Grid,
} from "react-bootstrap";

/* Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faShoppingCart,
  faPlus,
  faMinus,
  faTrashCan,
  faCircleRight,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

/* Load Pages */
import { Contact, Cart, AddOrder } from "./pages";

/* Load Components */
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/itemListContainer/itemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
import CategoryDetailContainer from "./components/categoryDetailContainer/categoryDetailContainer.js";

// Adding all imported icons to the library at once
library.add(
  faShoppingCart,
  faPlus,
  faMinus,
  faTrashCan,
  faCircleRight,
  faCartPlus
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <header>
            <NavBar />
          </header>
          <main className="pt-3">
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={"Welcome"} />}
              />
              <Route path="/:Category" element={<CategoryDetailContainer />} />
              <Route path="/item/:ID" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<AddOrder />} />
            </Routes>
          </main>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
