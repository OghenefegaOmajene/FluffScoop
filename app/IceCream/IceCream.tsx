"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IceCreamProduct from "@/components/IceCreamProduct";
import iceCreamData from "../../data/iceCream.json";
import { GiIceCreamCone } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './IceCream.css'

const IceCream: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // ✅ Centers slides properly
    centerPadding: "0px", // ✅ Ensures products stay close together
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="ice-creams" style={{ paddingTop: "130px"}}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          // paddingTop: "5.5rem", 
          height: "90vh", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          // backgroundColor: "burlywood"
        }}
        className="iceCreamContainer"
      >
        <Typography variant="h1" sx={{ color: "#260F08", fontSize: "2.5rem"}}>
          Ice Creams <GiIceCreamCone />
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "white",
          }}
        >
          <div
            className="slideshow"
            style={{
              position: "relative",
              overflow: "hidden",
              width: "80%",
              // border: "1px solid crimson"
            }}
          >
            <Slider {...settings} className="sliderr">
              {iceCreamData.map((item) => (
                <div className="slideWrap" key={item.id}> {/* ✅ Reduces spacing between items */}
                  <IceCreamProduct {...item}/>
                </div>
              ))}
            </Slider>
          </div>
          
        </Box>
        
      </Container>
    </div>
    
  );
};

export default IceCream;
