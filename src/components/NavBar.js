import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="resetTitle">
          <Navbar.Brand className="ms-0 resetTitle">ANIMA STORE</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/category/juegos" className="resetColor">
              <Nav className="mx-5">Juegos</Nav>
            </Link>
            <Link to="/category/programas" className="resetColor">
              <Nav className="mx-5">Programas</Nav>
            </Link>
            <Link to="/category/coleccion" className="resetColor">
              <Nav className="mx-5">Coleccion</Nav>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
