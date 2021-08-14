import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CardTemplate from "../../components/CardTemplate";
import { MdHome } from "react-icons/md";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Categories.css";
import products from '../../Products'

function Categories() {
  return (
    <div>
      
      <Container className="border-bottom ">
        <ul class="breadcrumb mb-0 d-flex align-items-center">
          <li className="text-center">
            <MdHome className="home-icon" />
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="#">محصولات</a>
          </li>
        </ul>
      </Container>

      <div className="py-5 w-100">
        <Container>
          <Row>
            <Col
              className="d-flex flex-column align-items-right justify-content-start"
              lg={3}
            >
              <div className="border">
                <h5 className="p-3 bg-light">دسته بندی ها</h5>
                <ul class="list-group p-0 m-0 sub-category">
                  <li class="list-group-item">
                    <a href="#">مردانه</a>
                  </li>
                  <li class="list-group-item">
                    <a href="#">زنانه</a>
                  </li>
                  <li class="list-group-item">
                    <a href="#">بچگانه</a>
                  </li>
                </ul>
              </div>
              <div className="border mt-4">
                <h5 className="p-3  bg-light">برند ها</h5>
                <ul class="list-group p-0 m-0 sub-category">
                  <li class="list-group-item">
                    <input
                      class="form-check-input ml-2"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    زارا
                  </li>
                  <li class="list-group-item">
                    <input
                      class="form-check-input ml-2"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    ال سی وایکیکی
                  </li>
                  <li class="list-group-item">
                    <input
                      class="form-check-input ml-2"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    آرمانی
                  </li>
                  <li class="list-group-item">
                    <input
                      class="form-check-input ml-2"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    گوچی
                  </li>
                </ul>
              </div>

              <h4 className="pb-3 mt-4">قیمت</h4>

              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              ></input>
            </Col>
            <Col lg={9}>
              <div className="d-flex align-items-center mb-5">
                <p className="mb-0 ms-auto">نمایش 01-09 محصول از 35</p>
                <div className="w-50 d-flex ">
                  <select id="inputState" class="form-select ">
                    <option selected>مرتب سازی</option>
                    <option>...</option>
                  </select>
                  <select id="inputState" class="form-select mx-3">
                    <option selected>نمایش</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <Row className="w-100">
                {products.map((product) => (
                  <Col md={6} lg={4}>
                  <CardTemplate product={product}/>
                </Col>
                ))}
                
                
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
}

export default Categories;
