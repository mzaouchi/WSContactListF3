const { body, validationResult } = require('express-validator');


exports.validationRegister = [
    body('name','Name must contain 6 char').isLength({min : 6}),
    body('email','Wrong format').isEmail(),
    body('password','Name must contain 6 char').isLength({min : 8})
]

exports.validationLoggin = [
    body('email','Wrong format').isEmail(),
    body('password','Name must contain 6 char').isLength({min : 8})
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}