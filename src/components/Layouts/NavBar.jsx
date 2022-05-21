import React from 'react'
import {
  Link,
  Outlet
} from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                {/* <Link to="/">Home</Link> */}
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/movies">
                {/* <Link to="/movies">Peliculas</Link> */}
                Peliculas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default NavBar