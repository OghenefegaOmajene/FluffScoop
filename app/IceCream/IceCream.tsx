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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './IceCream.css'

// Define Props Type
// interface ArrowProps {
//   onClick?: () => void;
// }

// const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: "#2d1403",
//       color: "#ff8264",
//       borderRadius: "50%",
//       width: "40px",
//       height: "40px",
//       position: "absolute",
//       right: "-7px", 
//       top: "50%",
//       transform: "translateY(-50%)",
//       cursor: "pointer",
//       zIndex: 2,
      
//     }}
//     onClick={onClick}
//   >
//     <FaArrowRight />
//   </div>
// );

// const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: "#2d1403",
//       color: "#ff8264",
//       borderRadius: "50%",
//       width: "40px",
//       height: "40px",
//       position: "absolute",
//       left: "-60px", 
//       top: "50%",
//       transform: "translateY(-50%)",
//       cursor: "pointer",
//       zIndex: 2,
//     }}
//     onClick={onClick}
//   >
//     <FaArrowLeft />
//   </div>
// );



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
    <div id="ice-creams">
      <Container 
        maxWidth="lg" 
        sx={{ 
          paddingTop: "5.5rem", 
          height: "90vh", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
        }}
      >
        <Typography variant="h1" sx={{ color: "#260F08", fontSize: "2.5rem"}}>
          Ice Creams <GiIceCreamCone />
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="slideshow"
            style={{
              position: "relative",
              overflow: "hidden",
              width: "80%",
              // maxWidth: "80%", 
              // margin: "0 0px 0px 130px",// ✅ Centers horizontally
              // padding: "0 60px",
              // border: "1px solid crimson"
            }}
          >
            <Slider {...settings}>
              {iceCreamData.map((item) => (
                <div className="wrapStuff" key={item.id} style={{ padding: "0 5px"}} > {/* ✅ Reduces spacing between items */}
                  <IceCreamProduct {...item} />
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
