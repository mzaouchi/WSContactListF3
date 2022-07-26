import React from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Actions/authActions'
export const NavUser = () => {
  const token = localStorage.getItem('token')
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Authentification</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/' >Home</Nav.Link>

        {
          token && user ? 
          <>
          <Nav.Link as={Link} to='/profile' >Profile</Nav.Link>
          <button onClick={()=> {dispatch(logout());navigate('/')}} >Logout</button>
          </>

          :
          <>
          <Nav.Link as={Link} to='/register' >Register</Nav.Link>
          <Nav.Link as={Link} to='/loggin' >Loggin</Nav.Link>
          </>
        }
        
        
        
      </Nav>
    </Container>
  </Navbar>
  )
}
