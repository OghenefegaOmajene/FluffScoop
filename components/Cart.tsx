"use client";
import React from 'react'
import { Box, Typography } from '@mui/material'
import { useAppSelector } from '@/utils/hook';
import CartItem from './CartItem';


const Cart = () => {
    const cartItems = useAppSelector((state) => state.cart.cart);
     
  return (
    <Box
        sx={{
            backgroundColor: "#FFFFFF",
            width: "60vw",
            position: "relative",
            bottom: "40px",
            borderRadius: "0.5rem",
            marginLeft: "2rem",
            padding: "1.5rem"
        }}    
    >
        <Typography 
            sx={{
                color: "#C73B0F", 
                fontSize: "1.5rem", 
                fontWeight: "800",
                marginBottom: "1rem"
            }}
        >
            Your Cart (0)
        </Typography>
        {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}/>
        })}
    </Box>
  );
};

export default Cart