"use client"
import React, { useEffect } from 'react'
import { Typography, Container, Box } from '@mui/material'
import gsap from 'gsap'

const OurStory: React.FC = () => {
    const animateSlide = () => {
        gsap.fromTo(
          ".img",
          { opacity: 0, y: -500 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    
        gsap.fromTo(
          ".txt2",
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 3, ease: "power2.out" }
        );
    
        gsap.fromTo(
          ".txt1",
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 5, ease: "power3.out" }
        );
    }; 

    useEffect(() => {
        animateSlide();
    })
  return (
    <div id="our-story" style={{ paddingTop: "80px"}}>
      <Container sx={{
        backgroundColor: "transparent",
        width: "100%",
        height: "30rem",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
      
        <Box 
            sx={{
                width: "30rem", 
                height: "70%", 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: "50px",
            }} 
        >
            <h1 className="txt1" style={{backgroundImage: "linear-gradient(-45deg, #ff5931, #ffab97)", WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", fontSize: "3rem"}}>Our Story</h1>
            <p className="txt2" style={{fontSize: "1.2rem"}}>Here at FluffScoop, we believe dessert is not just a treat—it&apos;s  a way of life! What started as a simple love for desserts turned into a mission—to bring the most delicious, mouthwatering treats right to your doorstep. Whether you're a chocoholic, a fruit-lover, or an ice cream addict, we've got something that will make your taste buds dance. Our mission? To spread sweetness, one scoop at a time. So why wait? Dive in, indulge, and let the sugar rush begin!</p>
        </Box>
    
        <img 
            src="/images/story2.jpg" 
            alt="" 
            style={{
                width: "25rem",
                height: "70%",
                backgroundImage: "linear-gradient(-45deg, #ff5931, #ffaa64)",
                borderRadius: "50px",
                padding: "20px 0 20px 20px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgb(36, 20, 1)"
            }}
            className='img'
        />
      </Container>
    
    </div>

  )
}

export default OurStory