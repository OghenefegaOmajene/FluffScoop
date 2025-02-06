import React from 'react';
import Image from 'next/image';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { FaCartShopping } from 'react-icons/fa6';
import './Navbar.css'

const Navbar = () => {
  return (
    <AppBar 
        sx={{
            backgroundColor: "#ffffff",
            height: "5rem",
            backdropFilter: "blur(20px)"
        }}
    >
      <Toolbar
        sx={{
            display: "flex",
            justifyContent: "space-evenly",
        }}
      >
        <Box 
            sx={{
                display: "flex" ,
                alignItems: "center", 
                justifyContent: "start",
                width: "30%",
                height: "100%",
                // border: "1px solid black"
            }}
            
        >
          <img 
            src="/images/favicon2.png" 
            alt="" 
            style={{
                width: "5rem",
                height: "100%"
            }}
          />
          <Box
            sx={{
                display: "flex" ,
                flexDirection: "column",
                justifyContent:"center",
                gap: "none",
                textAlign: "start",
                width: "15rem",
                height: "80%",
                color: "#ff8264",
                // border: "1px solid black"
            }}
          >
            <Typography sx={{fontSize: "30px", height: "50%"}}><b>FluffScoop</b></Typography>
            <p style={{fontSize: "13px", height: "50%", fontWeight: "500"}}><i>Where every bite is a frozen delight!</i></p>
          </Box>
        </Box>

        <Box sx={{color: "#ff8264"}}>
          <Button color="inherit">Our Story</Button>
          <Button color="inherit">Ice-Creams</Button>
          <Button color="inherit">Desserts</Button>
          <Button color="inherit">Doughnuts</Button>
          <Button color="inherit">Burgers</Button>
        </Box>

        <Box
            sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
        <Button color="inherit" style={{fontSize: "30px", color: "#ff8264"}}><FaCartShopping></FaCartShopping></Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;