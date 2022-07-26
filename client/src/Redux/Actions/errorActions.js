import { ALERT_ERROR, CLEAR_ERROR } from "../ActionTypes/errorTypes"

export const alertError=(msg)=>(dispatch)=>{
    
    const id = Math.random()
   
    dispatch({
        type : ALERT_ERROR,
        payload : {msg,id}
    })

 

    setTimeout(() => {
        console.log(id)
        dispatch({
            type : CLEAR_ERROR,
            payload : id
        })
    }, 3000);

  
}