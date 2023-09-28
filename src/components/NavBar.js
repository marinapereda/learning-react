import Cart from "./CartWidget.js";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        ILoveAI
      </a>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav align-items-center me-4">
          <li className="nav-item">
            <a className="nav-link" href="">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              T-Shirts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Sweatshirts
            </a>
          </li>
        </ul>
        <Cart />
      </div>
    </div>
  );
};

export default NavBar;
