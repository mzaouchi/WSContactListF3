import React from 'react'
import { Alert } from 'react-bootstrap'
import {useSelector} from 'react-redux'

export const Errors = () => {
    const errorss = useSelector(state => state.errorReducer)
  return (
    <div>
        {
            errorss.map(el=> 
                <Alert variant='danger'>
                   <h3> {el.msg}</h3>
                 </Alert>)
        }
    </div>
  )
}
