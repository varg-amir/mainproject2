import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./WomensSlider.css";
import WomenImg from "../assets/womensCategories/women-large.jpg.webp";
import Cloth1 from "../assets/womensCategories/cloth1.webp";
import Slider from "react-slick";
import { MdAddShoppingCart, MdExplore, MdFavoriteBorder } from "react-icons/md";
import products from '../Products'

function WomensSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-5">
      <Container className="px-5" fluid>
        <Row>
          <Col lg={{ span: 3, offset: 1 }}>
            <div className="slider-big-img">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className=" d-inline-block px-3 py-2 rounded-1 d-flex flex-column justify-content-center align-items-center">
                  <h3 className="m-0 text-white mb-3">زنانه</h3>
                  <h5 className=" text-white discover-text">بیشتر بدانید</h5>
                </div>
              </div>
             
            </div>
          </Col>
          <Col
            className="pt-5  d-flex flex-column justify-content-center align-items-center"
            lg={8}
          >
            <ul class="nav filter-items">
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  <p>لباس</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <p>کیف</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <p>کفش</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <p>اکسسوری</p>
                </a>
              </li>
            </ul>
            <div className="w-100">
              <Slider className="women-slider" {...settings}>
                {products.map((product) => (
                  <div className="px-3">
                  <Card className="border-0">
                    <div className="card-img w-100 h-100">
                      <Card.Img variant="top" className="image-size" src={product.image} />
                      <ul class="icon d-flex justify-content-center align-items-center w-100">
                        <li className="px-1">
                          <a href="#" className="first-item">
                            <MdAddShoppingCart />
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#" className="text-decoration-none px-3">
                            نگاه سریع
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#">
                            <MdExplore />
                          </a>
                        </li>
                      </ul>
                      <div className="favorite-icon-container">
                      <MdFavoriteBorder className="favorite-icon"/>
                      </div>
                    </div>
                    
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Text className="text-muted">{product.subCategory}</Card.Text>
                      <Card.Title className="text-center lh-base fs-6">{product.name}</Card.Title>
                      <Card.Text className="price-tag">{product.price} تومان</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                ))}
                
                {/* <div className="px-3">
                  <Card className="border-0">
                    <div className="card-img w-100 h-100">
                      <Card.Img variant="top" src={Cloth1} />
                      <ul class="icon d-flex justify-content-center align-items-center w-100">
                        <li className="px-1">
                          <a href="#" className="first-item">
                            <MdAddShoppingCart />
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#" className="text-decoration-none px-3">
                            نگاه سریع
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#">
                            <MdExplore />
                          </a>
                        </li>
                      </ul>
                      <div className="favorite-icon-container">
                      <MdFavoriteBorder className="favorite-icon"/>
                      </div>
                    </div>
                    
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Text className="text-muted">کت</Card.Text>
                      <Card.Title>پولیور صورتی</Card.Title>
                      <Card.Text className="price-tag">۵۶،۰۰۰ تومان</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="px-3">
                  <Card className="border-0">
                    <div className="card-img w-100 h-100">
                      <Card.Img variant="top" src={Cloth1} />
                      <ul class="icon d-flex justify-content-center align-items-center w-100">
                        <li className="px-1">
                          <a href="#" className="first-item">
                            <MdAddShoppingCart />
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#" className="text-decoration-none px-3">
                            نگاه سریع
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#">
                            <MdExplore />
                          </a>
                        </li>
                      </ul>
                      <div className="favorite-icon-container">
                      <MdFavoriteBorder className="favorite-icon"/>
                      </div>
                    </div>
                    
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Text className="text-muted">کت</Card.Text>
                      <Card.Title>پولیور صورتی</Card.Title>
                      <Card.Text className="price-tag">۵۶،۰۰۰ تومان</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="px-3">
                  <Card className="border-0">
                    <div className="card-img w-100 h-100">
                      <Card.Img variant="top" src={Cloth1} />
                      <ul class="icon d-flex justify-content-center align-items-center w-100">
                        <li className="px-1">
                          <a href="#" className="first-item">
                            <MdAddShoppingCart />
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#" className="text-decoration-none px-3">
                            نگاه سریع
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#">
                            <MdExplore />
                          </a>
                        </li>
                      </ul>
                      <div className="favorite-icon-container">
                      <MdFavoriteBorder className="favorite-icon"/>
                      </div>
                    </div>
                    
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Text className="text-muted">کت</Card.Text>
                      <Card.Title>پولیور صورتی</Card.Title>
                      <Card.Text className="price-tag">۵۶،۰۰۰ تومان</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="px-3">
                  <Card className="border-0">
                    <div className="card-img w-100 h-100">
                      <Card.Img variant="top" src={Cloth1} />
                      <ul class="icon d-flex justify-content-center align-items-center w-100">
                        <li className="px-1">
                          <a href="#" className="first-item">
                            <MdAddShoppingCart />
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#" className="text-decoration-none px-3">
                            نگاه سریع
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#">
                            <MdExplore />
                          </a>
                        </li>
                      </ul>
                      <div className="favorite-icon-container">
                      <MdFavoriteBorder className="favorite-icon"/>
                      </div>
                    </div>
                    
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Text className="text-muted">کت</Card.Text>
                      <Card.Title>پولیور صورتی</Card.Title>
                      <Card.Text className="price-tag">۵۶،۰۰۰ تومان</Card.Text>
                    </Card.Body>
                  </Card>
                </div> */}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WomensSlider;
