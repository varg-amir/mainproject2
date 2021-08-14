import React from 'react'
import "./Features.css"
import {Col, Container, Row} from 'react-bootstrap'
import { FaTruck, FaRegClock, FaLock } from "react-icons/fa";

function Features() {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-right justify-content-lg-center align-items-center border p-4"  lg={4}>
                        <FaTruck className="features-icon"/>
                        <div className="d-flex flex-column justify-content-center align-items-right ">
                        <h4>فرستادن رایگان</h4>
                        <p className="m-0">برای سفارش های بالای ۱۰۰ هزار تومان</p>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-right justify-content-lg-center align-items-center border p-4"  lg={4}>
                        <FaRegClock className="features-icon"/>
                        <div className="d-flex flex-column justify-content-center align-items-right ">
                        <h4>رسیدن سر وقت</h4>
                        <p className="m-0">اگر بسته مشکل نداشته باشد</p>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-right justify-content-lg-center align-items-center border p-4"  lg={4}>
                        <FaLock className="features-icon"/>
                        <div className="d-flex flex-column justify-content-center align-items-right ">
                        <h4>پرداخت امن</h4>
                        <p className="m-0">با به پرداخت ملت</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features
