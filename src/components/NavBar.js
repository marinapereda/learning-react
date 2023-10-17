import { NavLink } from "react-router-dom";
import Cart from "./CartWidget.js";
import {
  Container,
  Navbar as NavbarBS,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavbarBS.Brand as={NavLink} to="/">
          ILoveAI
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="align-items-center">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/shirts">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hoodies">
                Hoodies
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tanks">
                Tanks
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Cart />
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default NavBar;
