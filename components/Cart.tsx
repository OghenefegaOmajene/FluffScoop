"use client";
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useAppSelector } from '@/utils/hook';
import CartItem from './CartItem';


const Cart = () => {
    const cartItems = useAppSelector((state) => state.cart.cart);

    const [orderTotal, setOrderTotal] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(0);

    const getOrderTotal = () =>{
        let tempOrderTotal = 0;
        cartItems.map((item) => {    
            tempOrderTotal += item.quantity * item.price;
        });
        setOrderTotal(tempOrderTotal);
    };

    const getNumberOfItems =() => {
        let numberOfItems = 0;
        cartItems.map((item) => { 
            numberOfItems += item.quantity;
        });
        setNumberOfItems(numberOfItems);
    }

    useEffect(() => {
        getOrderTotal();
        getNumberOfItems();
    },[cartItems])
    
  return (
    <Box
        sx={{
            backgroundColor: "#FFFFFF",
            width: "60vw",
            position: "relative",
            bottom: "40px",
            borderRadius: "0.5rem",
            marginLeft: "2rem",
            padding: "1.5rem",
            height: "fit-content"
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
            Your Cart ({numberOfItems})
        </Typography>
        {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}/>
        })}

        <Box 
            sx={{
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                margin: "1rem 0"
            }}
        >
            <Typography sx={{color: "#260F08", fontSize: "0.875rem"}}>Order Total</Typography>
            <Typography sx={{color: "#260F08", fontSize: "1.5rem", fontWeight: "800"}}>
                ${orderTotal.toFixed(2)}
            </Typography>
        </Box>
    </Box>
  );
};

export default Cart