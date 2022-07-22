const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../Models/User');
exports.SignUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if (found) {
            return res.status(400).send({errors : 'User already exist'})
        }

        const newUser = User(req.body)

        const salt = 10
        const hashedPassword = bcrypt.hashSync(password, salt);
        newUser.password = hashedPassword

        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' });

        await newUser.save()

        res.status(200).send({Msg:'Registred with success',newUser,token})
    } catch (error) {
        res.status(500).send({errors : "Could not register"})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if (!found) {
            return res.status(400).send({errors : 'Email not found'})
        }

        const match = bcrypt.compareSync(password, found.password);

        if (!match) {
            return res.status(400).send({errors : 'Wrong password'})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' });

        res.status(200).send({Msg:'Success Login',found,token})

    } catch (error) {
        res.status(500).send({errors : "Could not logged in"})
    }
}