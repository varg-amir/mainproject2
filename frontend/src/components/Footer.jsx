import React from "react";
import Slider from "react-slick";
import "./Footer.css";
import {
  Card,
  Col,
  Row,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import FooterLogo from "../assets/Footer/foot-logo.webp";

function Footer() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="up-header w-100">
        <Slider {...settings} className="w-100 container text-white">
          <div>
            <Card className="bg-transparent border-0 text-white py-4 px-5">
              <Card.Img src={FooterLogo} alt="Card image" />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
          </div>
          <div>
            <Card className="bg-transparent border-0 text-white py-4 px-5">
              <Card.Img src={FooterLogo} alt="Card image" />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
          </div>
          <div>
            <Card className="bg-transparent border-0 text-white py-4 px-5">
              <Card.Img src={FooterLogo} alt="Card image" />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
          </div>
          <div>
            <Card className="bg-transparent border-0 text-white py-4 px-5">
              <Card.Img src={FooterLogo} alt="Card image" />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
          </div>
          <div>
            <Card className="bg-transparent border-0 text-white py-4 px-5">
              <Card.Img src={FooterLogo} alt="Card image" />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
          </div>
        </Slider>
      </div>
      <div className="bg-dark py-5">
        <Container>
          <Row>
            <Col
              md={4}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <h5 class="text-white mb-3">خرید</h5>

              <ul class="text-decoration-none mb-0">
                <li>
                  <a href="#!" class="text-white text-muted">
                    زنانه
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white text-muted">
                    مردانه
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white text-muted">
                    بچگانه
                  </a>
                </li>
                <li></li>
              </ul>
            </Col>
            <Col
              md={4}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <h5 class="text-white mb-3">خرید</h5>

              <ul class="text-decoration-none mb-0">
                <li>
                  <a href="#!" class="text-white text-muted">
                    زنانه
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white text-muted">
                    مردانه
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white text-muted">
                    بچگانه
                  </a>
                </li>
                <li></li>
              </ul>
            </Col>
            <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
              <InputGroup className="mb-3 mail-input">
                <FormControl
                  placeholder="ایمیل"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="rounded-0"
                />
                <Button className="email-btn border-0 rounded-0">
                  دنبال کن
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
