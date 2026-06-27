import { createProduct, getSellerProducts } from "../services/product.api.js";
import { useDispatch } from "react-redux";
import {setSellerProducts} from "../state/product.slice.js";


export const useProduct = () =>{

    const dispatch = useDispatch();

    const handleCreateProduct = async (formData) =>{
        try{
            const response = await createProduct(formData);
            //
            console.log(response);
            console.log(response.product);
            //
            return response.product;
        }catch(error){
            console.error("Error creating product:",error);
            throw error;
        }
    }


    const fetchSellerProducts = async () => {
        try{
            const response = await getSellerProducts();
            dispatch(setSellerProducts(response.products));
            return response.products;
        }catch(error){
            console.error("Error fetching seller products:",error);
            throw error;
        }
    }


    return {handleCreateProduct,fetchSellerProducts};


}