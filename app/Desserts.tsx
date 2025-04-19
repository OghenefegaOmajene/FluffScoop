import React from 'react'
import Container  from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Product from "@/components/Product";
import dessertsData from '../data/desserts.json'
import { GiCakeSlice } from "react-icons/gi";
import './Desserts.css'

const Desserts: React.FC = () => {

  return (
    <div id="desserts" style={{ paddingTop: "80px"}}>
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
          <div className='dessertsProductContainer'>
            {dessertsData.map((item) =>{
              return <Product key={item.id} {...item} />
            })}
          </div>
          
        {/* </Box> */}
        
      </Container>
    </div>
    
  )
}

export default Desserts