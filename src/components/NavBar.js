import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="ms-0">
          ANIMA STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#link">LISTA 1</Nav.Link>
            <Nav.Link href="#link">LISTA 2</Nav.Link>
            <Nav.Link href="#link">LISTA 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
