import {body, validationResult} from 'express-validator';


function validateRequest(req,res,next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }   
    next();
}



export const validateRegisterUser = [
    body("email").isEmail().withMessage("Aree yee sahi se dena email"),
    body("contact").notEmpty().matches(/^\d{10}$/).withMessage("Aree yee sahi se dena number,bhul vgaya kya"),
    body("password").isLength({min:6}).withMessage("Password kam se kam 6 characters ka hona chahiye"),
    body("fullname").notEmpty().withMessage("Aree yee sahi se naam dena").isLength({min:4}).withMessage("Naam kam se kam 4 characters ka hona chahiye"),
    body("isSeller").isBoolean().withMessage("Aree yee sahi se dena hai boolean value"),
    validateRequest

]

export const validateLoginUser = [
    body("email").isEmail().withMessage("Aree yee sahi se dena email"),
    body("password").isLength({min:6}).withMessage("Password kam se kam 6 characters ka hona chahiye"),
    validateRequest
]