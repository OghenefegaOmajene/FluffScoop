import React from 'react'
import { Container, Typography } from '@mui/material'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container 
        sx={{
            display: "flex",
            // boxShadow: "0 20px 40px rgb(36, 20, 1)",
            // width: "100%",
            marginTop: "6rem",
            borderTop: "3px solid #ff8264",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <img 
            src="/images/favicon2.png" 
            alt="" 
            style={{
                width: "4rem",
                height: "4rem"
            }}
        />
        <Typography>
            <FaCopyright></FaCopyright> All Rights Reserved, FluffScoop 2025
        </Typography>
    </Container>
  )
}

export default Footer