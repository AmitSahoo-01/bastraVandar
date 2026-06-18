import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import {config} from '../config/config.js';

async function sendTokenResponse(user, res,message){
    const token = jwt.sign({
        id:user._id
    }, 
    config.JWT_SECRET, {expiresIn:'7d'});

    res.cookie('token', token);

    res.status(201).json({
        success:true,
        message,
        token,
        user:{
            id:user._id,
            fullname:user.fullname, 
            email:user.email,
            contact:user.contact,
            role:user.role
        }
    });

};


// Register User - This function will handle the registration of a new user by contact or email.
export const registerUser = async (req,res)=>{
    const {email,contact,password,fullname,isSeller} = req.body;

    try {
        // Check if user already exists with the same email or contact
        const existingUser = await userModel.findOne({
            $or:[{email},{contact}]
        });
        if(existingUser){
            return res.status(400).json({message:"User already exists with this email or contact"});
        }

        // Create a new user
        const user = await userModel.create({
            email,
            contact,
            password,
            fullname,
            role: isSeller ? 'seller' : 'buyer'
        });

        await sendTokenResponse(user, res,"User registered hoo gaya bhai"); 

    }
    catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).json({message:"Internal Server Error"});
    }   
}