const User = require("../Models/User");
const jwt = require('jsonwebtoken')

exports.isAuth=async(req,res,next)=>{
    try {
        const token = req.header('Authorized')

        var decoded = jwt.verify(token, process.env.privateKey);

        if (!decoded) {
            return res.status(400).send({errors : "Not authorized token"})
        }

        const userFound = await User.findById(decoded.id)

        req.user = userFound

        next()
    } catch (error) {
        res.status(500).send({errors : "Not authorized"})
    }
}