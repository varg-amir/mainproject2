import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MdShoppingCart, MdAssignmentInd } from "react-icons/md";
import { logout } from "../actions/userAction";

function NavBar() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">لباس فروش</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">خانه</Nav.Link>
            <Nav.Link href="/categories">محصولات</Nav.Link>
            <Nav.Link href="/shoppingcart">خرید</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/shoppingcart">
              <MdShoppingCart className="ms-1" />
              سبد خرید
            </Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item href="#">پروفایل</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">
                <MdAssignmentInd className="ms-1" />
                وارد شدن
              </Nav.Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu">
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>لیست کاربرها</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>لیست محصولات</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
