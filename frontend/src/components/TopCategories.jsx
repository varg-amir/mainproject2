import React from "react";
import './TopCategories.css'
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import Img1 from "../assets/topCategoriesImages/1.webp";
import Img2 from "../assets/topCategoriesImages/2.webp";
import Img3 from "../assets/topCategoriesImages/3.webp";

function TopCategories() {
  return (
    <div>
      <Container className="px-md-5" fluid>
        <Row className="g-4 mb-5">
          <Col md={4}>
            <div >
              <Card className="bg-dark text-white border-0  ">
                <Card.Img src={Img1} alt="Card image" className='rounded-0' />
                <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                  <div className='bg-white d-inline-block px-3 py-2 rounded-1'><h3 className='m-0 text-dark'>کودک</h3></div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col md={4}>
          <div >
              <Card className="bg-dark text-white border-0  ">
                <Card.Img src={Img2} alt="Card image" className='rounded-0' />
                <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                  <div className='bg-white d-inline-block px-3 py-2 rounded-1'><h3 className='m-0 text-dark'>زنانه</h3></div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col md={4}>
          <div >
              <Card className="bg-dark text-white border-0  ">
                <Card.Img src={Img3} alt="Card image" className='rounded-0' />
                <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                  <div className='bg-white d-inline-block px-3 py-2 rounded-1'><h3 className='m-0 text-dark'>مردانه</h3></div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopCategories;
