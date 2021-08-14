import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SingleProductSlider from "../../components/SingleProductSlider";
import { MdHome, MdStar, MdStarBorder, MdShoppingCart } from "react-icons/md";
import { Container, Row, Col, Button, Tab, Tabs } from "react-bootstrap";
import products from '../../Products'
import "./SingleProduct.css";

function SingleProduct({match}) {

  const product = products.find((p) => p._id === match.params.id)
  return (
    <div>
      
      <Container>
        <ul class="breadcrumb mb-5 d-flex align-items-center border-bottom ">
          <li className="text-center">
            <MdHome className="home-icon" />
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="#">محصولات</a>
          </li>
          <li>
            <a href="#">مردانه</a>
          </li>
        </ul>
        <Row>
          <Col lg={6}>
            <SingleProductSlider product={product}/>
          </Col>
          <Col lg={6} className="d-flex flex-column ">
            <h3>{product.name}</h3>
            <p className="text-muted mb-4">برند: {product.brand}</p>
            <div>
              <MdStar className="text-warning" />
              <MdStar className="text-warning" />
              <MdStar className="text-warning" />
              <MdStar className="text-warning" />
              <MdStarBorder className="text-warning" />
              (119 نظر)
            </div>
            <h5 className="mt-4 single-price">{product.price} تومان</h5>
            <p className="fw-lighter lh-lg mb-4">
              {product.description}
            </p>
            <div className="d-flex align-items-center border-bottom pb-4">
              <div className="ms-3">تعداد: </div>
              <Button variant="outline-secondary ms-4">
                <span>-</span>
                <span className="mx-4">2</span>
                <span>+</span>
              </Button>
              <Button className="yellow-button border-0 ">
                <MdShoppingCart className="ms-2" />
                می خرم
              </Button>
            </div>
            <div className="d-flex align-items-center mt-5">
              <span className="fw-bold ms-4">موجودی: </span>
              <span>{product.countInStock}</span>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold ms-4">رنگ های موجود: </span>{" "}
              <input
                class="form-check-input p-2 bg-danger"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
              />{" "}
              <input
                class="form-check-input p-2 bg-warning"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
              />{" "}
              <input
                class="form-check-input p-2 bg-primary"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
              />
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold ms-4">سایز های موجود: </span>

              <ul className="d-flex flex-row  p-0 m-0 align-items-center justify-content-center  text-decoration-none single-sizes-list">
                <li>
                  <a href="">L</a>
                </li>
                <li>
                  <a href="">M</a>
                </li>
                <li>
                  <a href="">S</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3 single-tabs d-flex justify-content-center mt-5"
        >
          <Tab eventKey="home" title="مشخصات محصول" className="mx-4">
            <Row>
              <Col lg={6}>
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">مشخصات</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">جنس</td>
                      <td>نخ</td>
                    </tr>
                    <tr>
                      <td scope="row">طرح</td>
                      <td>ساده</td>
                    </tr>
                    <tr>
                      <td scope="row">قد</td>
                      <td>روی باسن</td>
                    </tr>
                    <tr>
                      <td scope="row">یقه</td>
                      <td>گرد</td>
                    </tr>
                    <tr>
                      <td scope="row">آستین</td>
                      <td>کوتاه</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col lg={6}></Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="نظرات کاربران" className="mx-4">
            1
          </Tab>
        </Tabs>
      </Container>

      
    </div>
  );
}

export default SingleProduct;
