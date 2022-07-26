import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { current } from '../Redux/Actions/authActions'

export const Profile = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  const user = useSelector(state=> state.authReducer.user)
  return (
    <Card style={{ width: '18rem' }}>
 
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        {user.email}
      </Card.Text>
  
    </Card.Body>
  </Card>
  )
}
