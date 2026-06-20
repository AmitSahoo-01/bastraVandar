import productModel from "../models/product.model.js";
import { uploadFile } from "../services/storage.service.js";


export async function createProduct(req,res){

    try{
    const {title,description,priceAmount,priceCurrency} = req.body;

    const seller = req.user;

    if(!req.files || req.files.length === 0){
        return res.status(400).json({
            success:false,
            message:"Please upload at least one image"
        });
    }

    const images = await Promise.all(req.files.map(async (file)=>{
        return await uploadFile({
            buffer: file.buffer,
            fileName:file.originalname,
        });
    }));

    const product = await productModel.create({
        title,
        description,
        seller:seller._id,
        price:{
            amount:priceAmount,
            currency:priceCurrency || "INR",
        },
        images:images.map((image)=>{
            return {
                url:image.url
            }
        })
    });

    return res.status(201).json({
        success:true,
        message:"product has been created",
        product
    });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while creating product"
        });
    }   


}



export async function getSellerProducts(req,res){

    try{
        const seller = req.user;
        const products = await productModel.find({seller:seller._id});
        return res.status(200).json({
            success:true,
            message:"seller products fetched successfully",
            products
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while fetching seller products"
        });
    }   
}