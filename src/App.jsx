import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
} from "@fortawesome/free-solid-svg-icons";

/* Load Pages */
import Contact from "./pages/Contact";

/* Load NavBar */
import NavBar from "./components/NavBar.js";

/* */
import ItemListContainer from "./components/itemListContainer/itemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
import CategoryDetailContainer from "./components/categoryDetailContainer/categoryDetailContainer.js";
// Adding all imported icons to the library at once
library.add(faShoppingCart, faPlus, faMinus);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
                  path="/:category"
                  element={<CategoryDetailContainer />}
                />
                <Route path="/item/:ID" element={<ItemDetailContainer />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>

          <section id="item-detail-container" className="mt-5 py-5">
            <div className="container">
              <div className="row">
                <ItemDetailContainer id="3" />
              </div>
            </div>
          </section>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
