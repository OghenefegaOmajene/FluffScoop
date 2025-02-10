

"use client";
import React from "react";
import { Container } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import SwiperSlider from "@/components/SwiperSlider/SwiperSlider";

const Homepage: React.FC = () => {
  return (
    <div id="home">
      <Container maxWidth={false} disableGutters >
        <Navbar />
        <SwiperSlider></SwiperSlider>
      </Container>
    </div>

  );
};

export default Homepage;
