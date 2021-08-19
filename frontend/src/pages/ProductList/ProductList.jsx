import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import {MdDelete} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listProducts } from '../../actions/productActions'

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      // DELETE PRODUCTS
    }
  }

  const createProductHandler = (product) => {
    //   CREATE PRODUCT
  }

  return (
    <>
    <Container className="list-container d-flex justify-content-center align-items-center">
          <div className="w-100 ">
      <Row className='align-items-center'>
        <Col>
          <h1>محصولات</h1>
        </Col>
        <Col className='text-start'>
          <Button className='btn-light btn-lg border rounded-0' onClick={createProductHandler}>
             ساخت محصولات
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>آی دی</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>دسته بندی</th>
              <th>زیر دسته بندی</th>
              <th>برند</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}تومان</td>
                <td>{product.category}</td>
                <td>{product.subCategory}</td>
                <td>{product.brand}</td>
                <td>
                  
                  
                  <MdDelete className="text-danger"
                    onClick={() => deleteHandler(product._id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </div>
        </Container>
    </>
  )
}

export default ProductListScreen