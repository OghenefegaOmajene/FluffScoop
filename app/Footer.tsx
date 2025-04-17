import React from 'react'
import { Container, Typography } from '@mui/material'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container 
        sx={{
            display: "flex",
            height: "4rem",
            // boxShadow: "0 20px 40px rgb(36, 20, 1)",
            // width: "100%",
            marginTop: "6rem",
            borderTop: "3px solid #FD7014",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center"
        }}
    >
        <img 
            src="/images/footerLogo.png" 
            alt="" 
            style={{
                width: "3rem",
                height: "3.5rem"
            }}
        />
        <Typography sx={{ marginTop: "10px"}}>
            <FaCopyright></FaCopyright> All Rights Reserved, FluffScoop 2025
        </Typography>
    </Container>
  )
}

export default Footer