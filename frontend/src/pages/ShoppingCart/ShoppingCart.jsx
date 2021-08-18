import React, {useEffect} from "react";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import { addToCart, removeFromCart } from "../../actions/cartActions";
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
import './ShoppingCart.css'

function ShoppingCart({match, location, history}) {

  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

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
        {cartItems.length === 0 ? (
          <Message>
            سبد خرید شما خالی می باشد <Link to='/'>برگردید</Link>
          </Message>
        ): 
        (
          <div className="w-100">
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
            {cartItems.map(item => (
              <tr className="table-borderless">
              <td width="200px">
                <Image height="170px" src={item.image} alt={item.name} rounded />
              </td>
              <td><Link className='text-dark text-decoration-none' to={`/singleproduct/${item.product}`}> {item.name}</Link></td>
              <td className="gold-color">{item.price}</td>
              <td >
              <Form.Control
                            className="qty-number mx-auto"
                            as='select'
                            value={item.qty}
                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                          >
                            {[...Array(item.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
              </td>
              <td className="gold-color">{item.price * item.qty}</td>
              <td>
                <Button type="button" variant='light' onClick={() => removeFromCartHandler(item.product)}>
                  <MdClose />
                  </Button>
                
              </td>
            </tr>
            ))}
            
            
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
                <span>تعداد کالا</span>
                <span className="fw-bold">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
              </div>
              <div className="w-100 d-flex justify-content-between align-items-center pb-3 mt-3">
                <h5>جمع </h5>
                <span className="gold-color">{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}</span>
              </div>
            </div>
            <div className="d-grid gap-2">
              <Button variant="dark" size="lg" className="rounded-0 ">
                پرداخت
              </Button>
              
            </div>
          </Col>
        </Row>
        </div>
        )
        }
        
      </Container>
      
    </div>
  );
}

export default ShoppingCart;
