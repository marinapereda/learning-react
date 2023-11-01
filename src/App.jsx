import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext, CartProvider } from "./context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar as NavbarBS,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
/* Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import "./App.css";
import {
  faShoppingCart,
  faPlus,
  faMinus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

/* Load Pages */
import Contact from "./pages/Contact";

/* Load NavBar */
import NavBar from "./components/NavBar.js";

/* Load Cart */
import Cart from "./components/Cart/Cart";

/* */
import ItemListContainer from "./components/itemListContainer/itemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
import CategoryDetailContainer from "./components/categoryDetailContainer/categoryDetailContainer.js";
// Adding all imported icons to the library at once
library.add(faShoppingCart, faPlus, faMinus, faTrashCan);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <header>
            <NavBar />
          </header>
          <main className="pt-3">
            <div className="container">
              <div className="row">
                <Routes>
                  <Route
                    path="/"
                    element={<ItemListContainer greeting={"Welcome"} />}
                  />
                  <Route
                    path="/:Category"
                    element={<CategoryDetailContainer />}
                  />
                  <Route path="/item/:ID" element={<ItemDetailContainer />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </main>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
