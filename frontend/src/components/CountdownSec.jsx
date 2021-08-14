import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./CountdownSec.css";
import Countdown from "react-countdown";

function CountdownSec() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="counter-number mx-3 d-flex flex-column justify-content-center align-items-center bg-light p-3 rounded-3">
          <span className="h1 p-0 m-0">{seconds}</span>
          <h4 className="p-0 m-0 text-muted">ثانیه</h4>
        </div>
        <div className="counter-number mx-3 d-flex flex-column justify-content-center align-items-center bg-light p-3 rounded-3">
          <span className="h1 p-0 m-0">{minutes}</span>
          <h4 className="p-0 m-0 text-muted">دقیقه</h4>
        </div>
        <div className="counter-number mx-3 d-flex flex-column justify-content-center align-items-center bg-light p-3 rounded-3">
          <span className="h1 p-0 m-0">{hours}</span>
          <h4 className="p-0 m-0 text-muted">ساعت</h4>
        </div>
        <div className="counter-number mx-3 d-flex flex-column justify-content-center align-items-center bg-light p-3 rounded-3">
          <span className="h1 p-0 m-0">{days}</span>
          <h4 className="p-0 m-0 text-muted">روز</h4>
        </div>
        
      </div>
      // :{hours}:{minutes}:{seconds}
    );
  };

  return (
    <div>
      <div className="px-5">
        <div className="coundown-section">
          <Container className="py-5">
            <Row className="py-4">
              <Col className="d-none d-lg-block" lg={6}>
                
              </Col>
              <Col
                className="d-flex flex-column justify-content-center align-items-center"
                lg={6}
              >
                <h2 className="countdown-header text-center mb-5">
                  پیشنهاد های هفته
                </h2>
                <p className="text-center px-5 countdown-paragraph">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستونت
                </p>
                <p>
                  <span>کیف دستی/</span>
                  <span className="font-weight-bold countdown-price">
                    ۵۲۰۰۰ تومان
                  </span>
                </p>
                <Countdown date={Date.now() + 9999000} renderer={renderer} />
                <Button className="counter-btn mt-5 btn-lg border-0 rounded-0">خرید کنید</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default CountdownSec;
