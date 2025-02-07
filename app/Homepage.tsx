// "use client"
// import React from 'react'
// import { Container, Box, Typography } from '@mui/material'
// import Navbar from '@/components/Navbar'


// const Homepage = () => {
//   return (
//     <Container 
//       maxWidth={false} 
//       disableGutters 
  
//       sx={{
//         display: "flex", 
//         flexDirection: "column", 
//         padding: "0",
//         margin: "0",
//         overflowX: "hidden"
//       }}
//     >
//         <Navbar></Navbar>
        
//     </Container>
//   )
// }

// export default Homepage;


"use client";
import React from "react";
import { Container } from "@mui/material";
import Navbar from "@/components/Navbar";
import SwiperSlider from "@/components/SwiperSlider";

const Homepage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Navbar />
      <SwiperSlider></SwiperSlider>
    </Container>
  );
};

export default Homepage;
