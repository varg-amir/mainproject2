import React from "react";
import { Card  } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Cloth1 from "../assets/womensCategories/cloth1.webp";
import { MdAddShoppingCart, MdExplore, MdFavoriteBorder } from "react-icons/md";
import "./WomensSlider.css";
import "./CardTemplate.css";

function CardTemplate({ product }) {
  return (
    <div>
      
      <Card className="border-0">
        <div className="card-img w-100 h-100">
          <Card.Img variant="top" className=" image-size" src={product.image} />
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
            <MdFavoriteBorder className="favorite-icon" />
          </div>
        </div>

        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Text className="text-muted">{product.subCategory}</Card.Text>
          <Link className="text-dark text-decoration-none" to={`/singleproduct/${product._id}`}><Card.Title as="div"><strong> {product.name} </strong></Card.Title></Link>
          <Card.Text className="price-tag">{product.price} تومان</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardTemplate;
