import { CURRENT, FAIL, LOGGIN, LOGOUT, REGISTER } from "../ActionTypes/authTypes"
import axios from 'axios'
import { alertError } from "./errorActions"
export const register=(olfa,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/User/SignUp',olfa)
        dispatch({
            type : REGISTER,
            payload : res.data
        })
        navigate('/profile')
    
    } catch (error) {
        console.log(error.response.data.errors)
        error.response.data.errors.forEach(element => dispatch(alertError(element.msg)));
       dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const loggin=(olfa,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/User/SignIn',olfa)
        dispatch({
            type : LOGGIN,
            payload : res.data
        })
        navigate('/profile')
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const current=()=>async(dispatch)=>{
    const config ={
        headers :{
            Authorized : localStorage.getItem('token')
        }
    }
    try {
       
        const res = await axios.get('/api/User/getCurrentUser',config)
        console.log(res.data)
        dispatch({
            type : CURRENT,
            payload : res.data
        })


    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}


export const logout=()=>{
    return({
        type : LOGOUT
    })
}