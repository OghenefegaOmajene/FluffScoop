import React from 'react'
import Container  from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Product from "@/components/Product";
import dessertsData from '../data/desserts.json'
import { GiCakeSlice } from "react-icons/gi";

const Desserts: React.FC = () => {

  return (
    <div id="desserts" style={{ paddingTop: "40px"}}>
      <Container maxWidth="lg" sx={{paddingTop: "5.5rem"}}>
        <Typography 
          variant="h1" 
          sx={{color: "#260F08", fontSize: "2.5rem"}}
        >
          Desserts <GiCakeSlice />
        </Typography>

        {/* <Box 
          sx={{display: "flex"}}
        > */}
          <Box 
            sx={{
                display: "flex ",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}
          >
            {dessertsData.map((item) =>{
              return <Product key={item.id} {...item} />
            })}
          </Box>
          
        {/* </Box> */}
        
      </Container>
    </div>
    
  )
}

export default Desserts