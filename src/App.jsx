import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

/* Load Pages */
import Contact from "./pages/Contact";
import Home from "./pages/Home";

/* Load NavBar */
import NavBar from "./components/NavBar.js";

/* */
import ItemListContainer from "./components/itemListContainer/itemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
// Adding all imported icons to the library at once
library.add(faShoppingCart, faPlus, faMinus);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <NavBar />
          </nav>
        </header>

        <main className="pt-3">
          <div className="container">
            <div className="row">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/:contactId" element={<Contact />} />
                <Route
                  path="/shop"
                  element={<ItemListContainer greeting={"Welcome"} />}
                />
              </Routes>
            </div>
          </div>

          <section id="item-detail-container" className="mt-5 py-5">
            <div className="container">
              <div className="row">
                <Routes>
                  <Route path="/shop" element={<ItemDetailContainer />} />
                </Routes>
              </div>
            </div>
          </section>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
