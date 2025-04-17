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
    price: number;
    bgColor: string;
}
const IceCreamProduct = ({id, image, name, price, bgColor}: Props) => {
  const {cart} = useAppSelector((state) => state.cart)
  const isItemInCart = !!cart.find((item) => item.id === id)

  return (
    <Box 
      sx={{
        display: "flex ", 
        flexDirection: "column", 
        marginTop: "2rem", 
        // border: "1px solid black",
        width: "13rem",
        // backgroundColor: bgColor,
      }}
    >

        <Box 
          sx={{
            backgroundColor: bgColor, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            borderRadius: "10px",
            // width: "100%",
            // border: "3px solid white"
          }}
        >
          <Image 
              src={image}
              alt="product-image"
              height={240}
              width={170}
              style={{borderRadius: "0.5rem"}}
          />
        </Box>
        

        <AddToCartButton 
            isItemInCart={isItemInCart} 
            id={id}
            price={price}
            name={name}
        />

        <Typography sx={{color: "#260F08", fontWeight: "600"}}>
           {name} 
        </Typography>

        <Typography sx={{color: "#C73B0F", fontWeight: "600"}}>
           ${price.toFixed(2)} 
        </Typography>
    </Box>
  )
}

export default IceCreamProduct