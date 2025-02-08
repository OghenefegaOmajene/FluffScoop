"use client";
import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import Typography from "@mui/material/Typography";
import AddToCartButton from './AddToCartButton';
import { useAppSelector } from '@/utils/hook';
// import { ToastContainer, toast } from 'react-toastify';

interface Props{
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
}
const Product = ({id, image, name, category, price}: Props) => {
    const {cart} = useAppSelector((state) => state.cart)
    const isItemInCart = !!cart.find((item) => item.id === id)

    // const notify = () => toast("Product Added to Cart!");
  return (
    <Box sx={{display: "flex ", flexDirection: "column",  marginTop: "2rem"}}>

        <Image 
            src={image}
            alt="product-image"
            height={240}
            width={240}
            style={{borderRadius: "0.5rem"}}
        />

        <AddToCartButton 
            isItemInCart={isItemInCart} 
            id={id}
            price={price}
            name={name}
        />
    

        <Typography sx={{color: "#87635A", fontSize: "0.875rem"}}>
           {category} 
        </Typography>

        <Typography sx={{color: "#260F08", fontWeight: "600"}}>
           {name} 
        </Typography>

        <Typography sx={{color: "#C73B0F", fontWeight: "600"}}>
           ${price.toFixed(2)} 
        </Typography>
    </Box>
  )
}

export default Product