import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleCard from "./CardComponents/SingleCard";
import Slider from "react-slick";

export default class SingleProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <Row>
          

          <Col
            lg={3}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            
            <Slider
              className="w-100 h-100"
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              rtl={true}
              vertical={true}
              verticalSwiping={true}
              arrows={false}
            >
              <div>
                <SingleCard image={this.props.product.image}/>
              </div>
              <div>
                <SingleCard image={this.props.product.image}/>
              </div>
              <div>
                <SingleCard image={this.props.product.image}/>
              </div>
              <div>
                <SingleCard image={this.props.product.image}/>
              </div>
            </Slider>
          </Col>

          <Col
            lg={9}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            

            <Slider
              className="w-100 h-100"
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
              rtl={true}
            >
              <div>
                <SingleCard image={this.props.product.image}/>
              </div>
              <div>
                <SingleCard image={this.props.product.image}/>
              </div>
              <div>
                <SingleCard image={this.props.product.image}/>
              </div>
              <div>
                <SingleCard image={this.props.product.image}/>
              </div>
            </Slider>
          </Col>
        </Row>
      </div>
    );
  }
}
