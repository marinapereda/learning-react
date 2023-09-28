import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/itemListContainer.js";

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
            <ItemListContainer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
