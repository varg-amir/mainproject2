import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">لباس فروش</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">خانه</Nav.Link>
            <Nav.Link href="/categories">محصولات</Nav.Link>
            <Nav.Link href="/shoppingcart">خرید</Nav.Link>
            <Nav.Link href="/login">وارد شدن</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
