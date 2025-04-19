"use client";
import React, { useEffect, useState, useCallback } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { useAppSelector } from '@/utils/hook';
import CartItem from './CartItem';
import { FaTimes } from "react-icons/fa";


interface CartProps {
    isCartOpen: boolean;
    toggleCart: () => void;
  }

  
// const Cart = ({isCartOpen, toggleCart}) => {
const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
    const cartItems = useAppSelector((state) => state.cart.cart);

    const [orderTotal, setOrderTotal] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(0);

    const getOrderTotal = useCallback(() => {
        let tempOrderTotal = 0;
        cartItems.forEach((item) => {    
            tempOrderTotal += item.quantity * item.price;
        });
        setOrderTotal(tempOrderTotal);
    }, [cartItems]);
    
    const getNumberOfItems = useCallback(() => {
        let numberOfItems = 0;
        cartItems.forEach((item) => { 
            numberOfItems += item.quantity;
        });
        setNumberOfItems(numberOfItems);
    }, [cartItems]);
    
    useEffect(() => {
        getOrderTotal();
        getNumberOfItems();
    }, [getOrderTotal, getNumberOfItems]);
    
  return (

    <Box
        sx={(theme) => ({
            backgroundColor: "#FFFFFF",
            width: "100%",
            maxWidth: "350px",
            position: "fixed",
            top: 0,
            right: isCartOpen ? 0 : "-150%",
            height: "100%",
            transition: "right 0.3s ease-in-out",
            zIndex: 10000,
            overflowY: "scroll",
            overflowX: "hidden",
            padding: "1.5rem",

            // 👇 Add responsive override for 420px
            [theme.breakpoints.down(420)]: {
            maxWidth: "300px",
            },
            [theme.breakpoints.down(370)]: {
                maxWidth: "280px",
            },
        })}
    >

        <Box 
            sx={{
                width: "100%",
                backgroundColor: "#ffffff",
                backdropFilter: "blur(10px)",
                // position: "sticky",
                zIndex: "100",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
                // gap: "4rem"
            }}
        >
            <Typography 
                sx={{
                    color: "#C73B0F", 
                    fontSize: "1.5rem", 
                    fontWeight: "800",
                    width: "70%"
                    // border: "1px solid black"
                    // marginBottom: "1rem"
                }}
            >
                Your Cart ({numberOfItems})
            </Typography>

            <IconButton
                onClick={toggleCart}
                sx={{
                    // position: "absolute",
                    // top: "1rem",
                    // right: "1rem",
                    fontSize: "1.5rem",
                    color: "#C73B0F",
                    width: "30%",
                    borderRadius: "10px"
                    // border: "1px solid black"
                }}
            >
                <FaTimes />
            </IconButton>
        </Box>

        <Box
            sx={{
                flexGrow: 1, // Allow content to take available space
                overflowY: "auto", // Enables scrolling
                // padding: "1rem",
                position: "relative",
                padding: "1.5rem",
            }}
        >
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <Typography sx={{ color: "#777", textAlign: "center", mt: 2 }}>Your cart is empty</Typography>
        )}
      </Box>
        

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