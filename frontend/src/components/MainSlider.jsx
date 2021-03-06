import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from '../assets/mainslider-img1.jpg'
import Slider2 from '../assets/mainslider-img2.jpg'
import './MainSlider.css'

function MainSlider() {
  return (
    <div className='mb-5 d-none d-md-block'>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainSlider;
