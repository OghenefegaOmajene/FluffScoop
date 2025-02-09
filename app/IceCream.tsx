"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IceCreamProduct from "@/components/IceCreamProduct";
import iceCreamData from "../data/iceCream.json";
import { GiIceCreamCone } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Define Props Type
interface ArrowProps {
  onClick?: () => void;
}

// Custom Next Arrow Component
const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#2d1403",
      color: "#ff8264",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      position: "absolute",
      right: "0px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <FaArrowRight></FaArrowRight>
  </div>
);

// Custom Prev Arrow Component
const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#2d1403",
      color: "#ff8264",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      position: "absolute",
      top: "50%",
      left: "-100px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      // zIndex: 10000000,
    }}
    onClick={onClick}
  >
    <FaArrowLeft></FaArrowLeft>
  </div>
);


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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
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
    <div id="ice-creams">
      <Container maxWidth="lg" sx={{ paddingTop: "5.5rem", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h1" sx={{ color: "#260F08", fontSize: "2.5rem"}}>
          Ice Creams <GiIceCreamCone />
        </Typography>

        <Box
          sx={{
            position: "relative",
            overflow: "visible",
            width: "100%",
            maxWidth: "900px", // ✅ Controls overall slider width
            margin: "0 0px 0px 130px", // ✅ Centers horizontally
            padding: "2rem",
          }}
        >
          <Slider {...settings}>
            {iceCreamData.map((item) => (
              <div key={item.id} style={{ padding: "0 5px" }}> {/* ✅ Reduces spacing between items */}
                <IceCreamProduct {...item} />
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </div>
    
  );
};

export default IceCream;
