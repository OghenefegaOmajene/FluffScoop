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
            backgroundColor: "transparent",
            width: "100%",
            height: "5rem",
            // backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            juatifyContent: "center",
            top: "5px"
        }}
        className='appBar'
    >
      <Toolbar
        sx={{
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "90%",
            borderRadius: "30px",
            // backgroundColor: "blue",
        }}
        className='Toolbar'
      >
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="nav-link" 
          id='logoLink'
          style={{
            cursor: "pointer", 
            width: "17%", 
            height: "5rem", 
            display: "flex",
            alignItems: "center", 
            justifyContent: "start",
            // border: "1px solid black"
          }} 
        >
          
            <img src="/images/fluffscoopLogo.png" alt="" className='logo'/>  
        </Link>
        
        <nav className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
          <Link to="our-story" smooth={true} duration={500} className="nav-link">
            <Button color="inherit"><b>Our Story</b></Button>
          </Link>

          <Link to="ice-creams" smooth={true} duration={500} className="nav-link">
            <Button color="inherit"><b>Ice-Creams</b></Button>
          </Link>

          <Link to="desserts" smooth={true} duration={500} className="nav-link">
            <Button color="inherit"><b>Desserts</b></Button>
          </Link>
        </nav>
        

        <div className='cartBox'>
          <div className='cartBtn' onClick={toggleCart}>
            <Badge badgeContent={totalItems} color="error">
              <FaCartShopping style={{fontSize: "30px", color: "#FD7014"}}/>
            </Badge>
          </div>
        </div>

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