import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/itemListContainer/itemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js";
// Adding all imported icons to the library at once
library.add(faShoppingCart, faPlus, faMinus);

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <NavBar />
        </nav>
      </header>

      <main className="pt-3">
        <div className="container">
          <div className="row">
            <ItemListContainer greeting={"Welcome"} />
          </div>
        </div>

        <section id="item-detail-container" className="mt-5 py-5">
          <div className="container">
            <div className="row">
              <ItemDetailContainer />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
