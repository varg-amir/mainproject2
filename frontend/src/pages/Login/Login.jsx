import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { login } from '../../actions/userAction'
import {MdHome} from 'react-icons/md'
import "./Login.css";

function Login({history, location}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

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
            {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>نام کاربری یا آدرس ایمیل</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    size="lg"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="آدرس ایمیل"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>رمز عبور</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    size="lg"
                    value={password}
                    type="password"
                    onChange={(e)=> setPassword(e.target.value)}
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
