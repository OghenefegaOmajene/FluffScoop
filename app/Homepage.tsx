

"use client";
import React from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
// import SwiperSlider from "@/components/SwiperSlider/SwiperSlider";
import { FaCircleArrowRight } from "react-icons/fa6";
import './Homepage.css'

import { Nosifer } from "next/font/google";
const nosifer = Nosifer({
  subsets: ["latin"],
  weight: "400"
});
// import {nosifier} from './layout'

const Homepage: React.FC = () => {
  return (
    <div id="home">
      <Container maxWidth={false} disableGutters >
        <Navbar />
        {/* <SwiperSlider></SwiperSlider> */}
        <div className="homeBox">
          <div className="heroTxt">
            <Typography>Check out our new Summer Release</Typography>
            <Typography variant="h4" className={nosifer.className} sx={{color: "#FD7014"}}>Peanut Butter Pretzel Caramel Swirl Ice Cream</Typography>
            
            <button
              className="animated-hover-button"
              style={{
                // backgroundColor: "white",
                borderRadius: "30px",
                border: 0,
                width: "150px",
                height: "50px",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div className="btn-content">
                Explore our store <FaCircleArrowRight className="exploreIcon" />
              </div>
            </button>


            <div className="png">
              <img src="/images/lilPopsicle.png" className="lilPopsicle" alt="" />
              <img src="/images/twirl.png" className="twirl" alt="" />
            </div>
          </div>
          
          <div className="heroImage">
            <img src="/images/pretzel.png" className="pretzel" alt="" />
          </div>

          
        </div>
      </Container>
      
    </div>

  );
};

export default Homepage;
