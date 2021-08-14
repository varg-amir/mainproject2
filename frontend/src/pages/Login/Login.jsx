import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import {MdHome} from 'react-icons/md'
import "./Login.css";

function Login() {
  return (
    <div>
      <Container className="login-container ">
      <ul class="breadcrumb mb-5 d-flex align-items-center border-bottom ">
          <li className="text-center">
            <MdHome className="home-icon" />
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="#">ورود</a>
          </li>
          
        </ul>
        <div className="w-100">
          <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>نام کاربری یا آدرس ایمیل</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    size="lg"
                    type="email"
                    placeholder="آدرس ایمیل"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رمز عبور</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    size="lg"
                    type="password"
                    placeholder="رمز عبور"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex justify-content-between"
                  controlId="formBasicCheckbox"
                >
                  <div class="form-check">
                    <label class="form-check-label ms-3" for="flexCheckDefault">
                      مرا به خاطر بسپار
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>

                  <a className="text-dark text-decoration-none text-muted" href="">رمز عبور را فراموش کردم</a>
                </Form.Group>
                <Button variant="primary" type="submit" className="d-block w-100 rounded-0 login-button" size='lg'>
                  ورود
                </Button>
              </Form>
            </Col>
            <Col lg={3}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Login;
