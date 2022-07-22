const express = require('express')
const { validationRegister, Validation, validationLoggin } = require('../Midellwares/validatorRegister');
const { isAuth } = require('../Midellwares/isAuth');
const { SignUp, SignIn } = require('../Controllers/User');
const userRouter = express.Router()


userRouter.post('/SignUp',validationRegister,Validation,SignUp)

userRouter.post('/SignIn',validationLoggin,Validation,SignIn)


userRouter.get('/getCurrentUser',isAuth,(req,res)=>{res.send(req.user)})










module.exports = userRouter