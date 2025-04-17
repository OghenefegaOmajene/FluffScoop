

"use client";
import React from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
// import SwiperSlider from "@/components/SwiperSlider/SwiperSlider";
import { FaCircleArrowRight } from "react-icons/fa6";
import './Homepage.css'
// import {nosifier} from './layout'

const Homepage: React.FC = () => {
  return (
    <div id="home" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Container maxWidth={false} disableGutters >
        <Navbar />
        {/* <SwiperSlider></SwiperSlider> */}
        <div className="homeBox" 
          style={{
            width: "100%",
            height: "34rem",
            // backgroundColor: "black",
            border: "1px solid black",
            display: "flex",
            alignItems: "end",
            justifyContent: "center"
          }}
        >
          <div className="heroTxt"
            style={{
              width: "40%",
              height: "80%",
              // backgroundColor: "grey",
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "center"
            }}
          >
            <Typography>Check out our new Summer Release</Typography>
            <Typography>Peanut Butter Pretzel Caramel Swirl Ice Cream</Typography>
            
            <button
              style={{
                backgroundColor: "white",
                borderRadius: "30px"
              }}
            >
              Explore our store <FaCircleArrowRight style={{color: "#FD7014"}}/>
            </button>
          </div>
          
          <div className="heroImages"
            style={{
              width: "50%",
              height: "80%",
              // backgroundColor: "grey",
              border: "1px solid black",
              display: "flex",
              // alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img 
              src="/images/pretzel.png" 
              alt="" 
              style={{
                  width: "20rem",
                  height: "25rem"
              }}
            />
            {/* <img 
              src="/images/iceCream2.png" 
              alt="" 
              style={{
                  width: "20rem",
                  height: "25rem"
              }}
            /> */}
          </div>

          
        </div>
      </Container>
      
    </div>

  );
};

export default Homepage;
