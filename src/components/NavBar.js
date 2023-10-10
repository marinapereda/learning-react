import { NavLink } from "react-router-dom";
import Cart from "./CartWidget.js";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <NavLink className="navbar-brand" href="/">
        ILoveAI
      </NavLink>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav align-items-center me-4">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Sweatshirts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact/contact-team" className="nav-link">
              Contact Team
            </NavLink>
          </li>
        </ul>
        <Cart />
      </div>
    </div>
  );
};

export default NavBar;
