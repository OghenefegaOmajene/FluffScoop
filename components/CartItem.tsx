'use client'
import { removeFromCart } from '@/store/cartSlice';
import { useAppDispatch } from '@/utils/hook';
import { Box, Typography } from '@mui/material';
import React from 'react'


interface Props{
    id: number;
    name: string;
    price: number;
    quantity: number;
}
const CartItem = ({id, name, price, quantity}: Props) => {
    const dispatch = useAppDispatch();
    const totalPrice = price * quantity;
  return (
    <Box 
        sx={{
            borderBottom: "1px solid #F5EEEC",
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "1rem",
            alignItems: "center",
            marginTop: '1rem'
        }}
    >
        <Box>

            <Typography 
                sx={{
                    color: "#260F08",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem"
                }}>
                {name}
            </Typography>
            
            <Box sx={{display: "flex"}}>
                <Typography sx={{color: "#C73B0F", fontWeight: "600"}}>{quantity}x</Typography>
                <Typography sx={{color: "#87635A", margin: "0 1rem"}}>@{price.toFixed(2)}</Typography>
                <Typography sx={{color: "#87635A", fontWeight: "600"}}>{totalPrice.toFixed(2)}</Typography>
            </Box>

        </Box>
        <button 
            style={{
                color: "#AD8A85", 
                border: "1px solid #AD8A85",
                borderRadius: "4rem",
                background: "transparent",
                padding: "0.75rem 0.5rem",
                height: "1rem",
                display: "flex", 
                justifyContent: "center",
                alignItems: "center"
            }}
            onClick={() => dispatch(removeFromCart(id))}
            >
                x
        </button>
    </Box>
  )
}

export default CartItem