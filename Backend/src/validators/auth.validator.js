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
    body("contact")
        .notEmpty().withMessage("Contact number is required")
        .customSanitizer(value => value ? value.replace(/\D/g, '') : value)
        .matches(/^\d{10}$/).withMessage("Contact must be a valid 10-digit number"),
    body("password").isLength({min:6}).withMessage("Password kam se kam 6 characters ka hona chahiye"),
    body("fullname").notEmpty().withMessage("Aree yee sahi se naam dena").isLength({min:4}).withMessage("Naam kam se kam 4 characters ka hona chahiye"),
    body("isSeller").isBoolean().toBoolean().withMessage("Aree yee sahi se dena hai boolean value"),
    validateRequest
]

export const validateLoginUser = [
    body("email").isEmail().withMessage("Aree yee sahi se dena email"),
    body("password").isLength({min:6}).withMessage("Password kam se kam 6 characters ka hona chahiye"),
    validateRequest
]