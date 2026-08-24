import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function ColorSchemesExample() {
  return (
    <>
      <Navbar className="navbar" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>ZAY</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"}>
            Home
            </Link>
            <Link to={"/about"}>
            About
            </Link>
            <Link to={"/shop"}>
            Shop
            </Link>
            <Link to={"/contactus"}>
            Contact
            </Link>
          </Nav>
          <ul>
            <li>
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
              <i class="fa-solid fa-cart-shopping"></i>
            </li>
            <li>
              <i class="fa-solid fa-person"></i>
            </li>
          </ul>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
