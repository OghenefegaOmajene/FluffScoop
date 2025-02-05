'use client';
import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/utils/hook';
import { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } from '../store/cartSlice';

interface Props{
    isItemInCart: boolean;
    id: number;
    name: string;
    price: number;
}

const AddToCartButton = ({isItemInCart, id, name, price}: Props) => {
    const dispatch = useAppDispatch();
    const {cart} = useAppSelector((state) => state.cart);
    const isItem = (item: any) => item.id === id;
    const itemIndex = cart.findIndex(isItem);

  return (
    <Box
        sx={{
            border: isItemInCart ? "none" : "1px solid #AD8A85",
            borderRadius: "4rem",
            backgroundColor: isItemInCart ? "#C73B0F" : "#FFFFFF",
            color: isItemInCart ? "#FFFFFF" : "#260F08", 
            fontSize: "0.875rem",
            fontWeight: 600,
            width: "80%",
            alignSelf: "center",
            position: "relative",
            bottom: "20px",
            height: "100%"
        }}
    >
        {isItemInCart ?(
            <Box 
                sx={{
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    height: "100%",
                    width: "100%"
                }}
            >
                <button 
                    style={{
                        backgroundColor: "transparent", 
                        border: "1px solid white", 
                        color: "#FFFFFF",
                        borderRadius: "4rem",
                        marginLeft: "0.5rem"
                    }}
                    onClick={() => {
                        if (cart[itemIndex].quantity === 1) {
                          dispatch(removeFromCart(id)); // Remove item from cart
                        } else {
                          dispatch(decreaseQuantity(itemIndex)); // Decrease quantity
                        }
                    }}
                >
                    -
                </button>
                    {cart[itemIndex].quantity}
                <button 
                    style={{
                        backgroundColor: "transparent", 
                        border: "1px solid white", 
                        color: "#FFFFFF",
                        borderRadius: "4rem",
                        marginRight: "0.5rem"
                    }}
                    onClick={() => dispatch(increaseQuantity(itemIndex))}
                >
                    +
                </button>
            </Box>
        ) : (
            <button 
                style={{
                    width: "100%", 
                    background: "transparent", 
                    border: "none",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onClick={() => dispatch(addToCart({id: id, price: price, name: name, quantity: 1}))}
            >
                <Image
                    src="\images\icon-add-to-cart.svg"
                    alt="cart"
                    height={20}
                    width={16}
                    style={{marginRight: "0.5rem"}}
                />
                Add To Cart
            </button>
        )}
    </Box>
  )
}

export default AddToCartButton