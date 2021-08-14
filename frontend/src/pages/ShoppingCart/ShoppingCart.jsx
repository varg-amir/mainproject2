import React from "react";
import {
  Table,
  Container,
  Image,
  Button,
  Col,
  Row,
  Form,
} from "react-bootstrap";
import { MdClose, MdHome } from "react-icons/md";
import Img1 from "../../assets/MensCategories/jacket.webp";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import './ShoppingCart.css'

function ShoppingCart() {
  return (
    <div>
      
      <Container className="pb-5">
        <ul class="breadcrumb mb-5 d-flex align-items-center border-bottom ">
          <li className="text-center">
            <MdHome className="home-icon" />
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="#">خرید</a>
          </li>
          <li>
            <a href="#">سبد خرید</a>
          </li>
        </ul>
        <Table borderless hover className="text-center align-middle mb-4">
          <thead className="border">
            <tr>
              <th>عکس</th>
              <th>اسم محصول</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>قیمت کل</th>
              <th>
                <MdClose />
              </th>
            </tr>
          </thead>
          <tbody className="border">
            <tr className="table-borderless">
              <td width="200px">
                <Image height="170px" src={Img1} rounded />
              </td>
              <td>پلیور سبز</td>
              <td className="gold-color">80000 تومان</td>
              <td>
                <Button variant="outline-secondary ms-4">
                  <span>-</span>
                  <span className="mx-4">2</span>
                  <span>+</span>
                </Button>
              </td>
              <td className="gold-color">120000</td>
              <td>
                <MdClose />
              </td>
            </tr>
            <tr className="table-borderless">
              <td width="200px">
                <Image height="170px" src={Img1} rounded />
              </td>
              <td>پلیور سبز</td>
              <td className="gold-color">80000 تومان</td>
              <td>
                <Button variant="outline-secondary ms-4">
                  <span>-</span>
                  <span className="mx-4">2</span>
                  <span>+</span>
                </Button>
              </td>
              <td className="gold-color">120000</td>
              <td>
                <MdClose />
              </td>
            </tr>
          </tbody>
        </Table>

        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <div className="d-flex flex-row justify-content-start mb-5">
              <Button
                className="rounded-0 ms-3"
                variant="outline-secondary"
                size="lg"
              >
                ادامه خرید
              </Button>
              <Button className="rounded-0" variant="light" size="lg">
                به روز رسانی سبد
              </Button>
            </div>
            <div>
              <h5>کد تخفیف</h5>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Large text"
                className="rounded-0 mt-3"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="bg-light d-flex flex-column justify-content-center align-items-center p-4">
              <div className="w-100 d-flex justify-content-between align-items-center border-bottom pb-3">
                <span>جمع جز</span>
                <span className="fw-bold">24.000</span>
              </div>
              <div className="w-100 d-flex justify-content-between align-items-center pb-3 mt-3">
                <h5>جمع </h5>
                <span className="gold-color">24.000</span>
              </div>
            </div>
            <div className="d-grid gap-2">
              <Button variant="dark" size="lg" className="rounded-0 ">
                پرداخت
              </Button>
              
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default ShoppingCart;
