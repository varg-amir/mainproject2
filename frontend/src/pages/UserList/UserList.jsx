import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import {MdSecurity} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listUsers } from '../../actions/userAction'
import './UserList.css'

const UserListScreen = ({history}) => {
    const dispatch = useDispatch()
  
    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
    useEffect(() => {
        if(userInfo && userInfo.isAdmin){
            dispatch(listUsers())

        } else {
            history.push('/login')
        }
    }, [dispatch, history])
  
   
  
    return (
     
      <Container className="list-container d-flex justify-content-center align-items-center">
          <div className="w-100 ">
        <h1>لیست کاربران</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover responsive >
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a className="text-dark text-decoration-none" href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <MdSecurity style={{ color: 'green' }}/>
                    ) : (
                    <MdSecurity style={{ color: 'red' }}/>
                    )}
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        </div>
        </Container>
     

    )
  }
  
  export default UserListScreen