import { CURRENT, FAIL, LOGGIN, LOGOUT, REGISTER } from "../ActionTypes/authTypes"

const initialState = {
    user : {},
    errors : []
}

const authReducer=(state = initialState,action)=>{
    switch (action.type) {
       case REGISTER : 
       localStorage.setItem('token',action.payload.token)
       return {...state, user : action.payload.newUser,errors : null}

       case FAIL : return {...state, user : null, errors : action.payload.errors}

       case LOGGIN : 
       localStorage.setItem('token',action.payload.token)
       return {...state, user : action.payload.found, errors : null}
       
       case CURRENT : return {...state, user : action.payload, errors : null}

       case LOGOUT : 
       localStorage.removeItem('token')
       return {...state, user : null, errors : null}
       
       default: return state
           
    }
}

export default authReducer