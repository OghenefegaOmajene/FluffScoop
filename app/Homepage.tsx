"use client"
import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Navbar from '@/components/Navbar'


const Homepage = () => {
  return (
    <Container 
      maxWidth={false} 
      disableGutters 
  
      sx={{
        display: "flex", 
        flexDirection: "column", 
        padding: "0",
        margin: "0",
        overflowX: "hidden"
      }}
    >
        <Navbar></Navbar>
        <Box
          sx={{
            width: "100%",  // Ensures full viewport width
            height: "36rem",
            background: "linear-gradient(to right, #F08EFC, #EE5166)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", 
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
            <Typography 
              variant='h1' 
              sx={{
                fontSize: "7rem", 
                zIndex: 2,
                position: "relative"
              }}
            >
              Mochi Doughnuts
            </Typography>
            {/* {whiteCake} */}
            <img 
              src="/images/pinkDoughnut.png" 
              alt="" 
              style={{
                width: "20rem",
                height: "30rem",
                zIndex: "1000",
                position: "absolute",
                right: "35%",
                top: "50%",
                transform: "translateY(-50%)"
                // border: "1px solid black"
              }}
            />
        </Box>
    </Container>
  )
}

export default Homepage;