import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Cart from '../Cart';
import { useAppSelector } from '@/utils/hook';
import { AppBar, Toolbar, Typography, Box, Button, Badge } from '@mui/material';
import { FaCartShopping } from 'react-icons/fa6';
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartItems = useAppSelector((state) => state.cart.cart);

  // Calculate total number of items
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
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
            alignItems: "center"
        }}
        className='Toolbar'
      >
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="nav-link" 
          style={{
            cursor: "pointer", 
            width: "30%", 
            height: "100%", 
            display: "flex" ,
            alignItems: "center", 
            justifyContent: "start"
          }} 
        >
          
            <img 
              src="/images/favicon2.png" 
              alt="" 
              style={{
                  width: "5rem",
                  height: "100%"
              }}
              className='logo'
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
              <Typography className='fluffscoop' sx={{fontSize: "30px", height: "50%"}}><b>FluffScoop</b></Typography>
              <p className='slogan' style={{fontSize: "11px", height: "50%", fontWeight: "500"}}><i>Where every bite is a frozen delight!</i></p>
            </Box>
          
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Box sx={{ color: "#ff8264" }}>
            <div className="navLinks">
              <Link to="our-story" smooth={true} duration={500} className="nav-link">
                <Button color="inherit">Our Story</Button>
              </Link>
              <Link to="ice-creams" smooth={true} duration={500} className="nav-link">
                <Button color="inherit">Ice-Creams</Button>
              </Link>
              <Link to="desserts" smooth={true} duration={500} className="nav-link">
                <Button color="inherit">Desserts</Button>
              </Link>
              <Link to="doughnuts" smooth={true} duration={500} className="nav-link">
                <Button color="inherit">Doughnuts</Button>
              </Link>
            </div>
          </Box>
        </nav>
        

        <Box
            sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
          <Button className='cartBtn' onClick={toggleCart} color="inherit" style={{fontSize: "30px", color: "#ff8264"}}>
            <Badge badgeContent={totalItems} color="error">
              <FaCartShopping />
            </Badge>
          </Button>
        </Box>

        <div className="menu-toggle">
            <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
        </div>
      </Toolbar>
    </AppBar>
  
    <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default Navbar;