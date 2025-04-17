

"use client";
import React from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
// import SwiperSlider from "@/components/SwiperSlider/SwiperSlider";
import { FaCircleArrowRight } from "react-icons/fa6";
import './Homepage.css'
import { nosifer } from '@/app/layout';
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
            height: "40rem",
            // backgroundColor: "black",
            // border: "1px solid black",
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
              paddingTop: "100px",
              // border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
              gap: "20px"
            }}
          >
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
                Explore our store <FaCircleArrowRight className="exploreIcon" style={{color: "#FD7014", fontSize: "20px"}}/>
              </div>
            </button>


            <div className="png">
              <img 
                src="/images/lilPopsicle.png" 
                alt="" 
                style={{
                    width: "5rem",
                    height: "5rem",
                }}
              />
              <img 
                src="/images/twirl.png" 
                alt="" 
                style={{
                    width: "10rem",
                    height: "10rem"
                }}
              />
            </div>
          </div>
          
          <div className="heroImages"
            style={{
              width: "40%",
              height: "80%",
              // backgroundColor: "grey",
              // border: "1px solid black",
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
                  height: "25rem",
                  // border: "1px solid black"
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
