import express from "express";
import {authenticateSeller} from "../middlewares/auth.middleware.js"
import {createProduct,getSellerProducts} from "../controllers/product.controller.js";
import multer from "multer";
import { createProductValidator } from "../validators/product.validdator.js";

//  multer function 
const upload = multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize: 5 * 1024 * 1024
    },
    fileFilter:(req,file,cb)=>{
        if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
            cb(null,true);
        }else{
            cb(new Error("Invalid file type"),false);
        }
    }
});


const router = express.Router();

//  @route --- POST /api/products
//  @description --- create a new product 
//  @access --- private route only for Seller

router.post("/",authenticateSeller,upload.array("images",7),createProductValidator,createProduct)


router.get("/seller",authenticateSeller,getSellerProducts);

export default router;