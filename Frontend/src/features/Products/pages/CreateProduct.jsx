import React from 'react'
import {useProduct} from '../hook/useProduct.js'

const CreateProduct = () => {

    const {handleCreateProduct} = useProduct();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        handleCreateProduct(formData);
    }

  return (
    <div>
        
    </div>
  )
}

export default CreateProduct