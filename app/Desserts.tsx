import React from 'react'
import Container  from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Product from "@/components/Product";
import data from '../data/data.json'
import { GiCakeSlice } from "react-icons/gi";

const Desserts = () => {
  return (
    <Container maxWidth="lg" sx={{paddingTop: "5.5rem"}}>
      <Typography 
        variant="h1" 
        sx={{color: "#260F08", fontSize: "2.5rem"}}
      >
        Desserts <GiCakeSlice />
      </Typography>

      <Box 
        sx={{display: "flex", justifyContent: "space-between"}}
      >
        <Box 
          sx={{
              display: "flex ",
              flexWrap: "wrap",
              justifyContent: "space-between"
          }}
        >
          {data.map((item) =>{
            return <Product key={item.id} {...item} />
          })}
        </Box>
         
      </Box>
      
    </Container>
  )
}

export default Desserts