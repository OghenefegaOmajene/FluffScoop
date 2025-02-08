"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography, Box } from "@mui/material";
import { Autoplay, EffectCoverflow, Mousewheel, Thumbs } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";

const SwiperSlider = () => {
  const swiperRef = useRef(null);

  const animateSlide = () => {
    gsap.fromTo(
      ".mainImg",
      { opacity: 0, y: -500 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".textFade",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".img1",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".img2",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 5, ease: "power3.out" }
    );
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (!swiperInstance) return;

    animateSlide(); // Run animation on the first load

    swiperInstance.on("slideChangeTransitionStart", animateSlide);

    return () => {
      swiperInstance.off("slideChangeTransitionStart", animateSlide);
    };
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        modules={[EffectCoverflow, Mousewheel, Thumbs, Autoplay]}
        loop={true}
        spaceBetween={0}
        mousewheel={true}
        speed={800}
        effect="coverflow"
        direction="horizontal"
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false, 
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        
      >
        <SwiperSlide>
            <Box
              sx={{
                width: "100%",  // Ensures full viewport width
                height: "36rem",
                background: "linear-gradient(to right, #F08EFC, #EE5166)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", 
                textAlign: "start",
                position: "relative",
                overflow: "hidden"
              }}
            >
                <Typography 
                  variant='h1' 
                  sx={{
                    fontSize: "6.2rem", 
                    zIndex: 2,
                    // position: "relative",
                    width: "50rem",
                
                  }}
                  className="textFade"
                >
                  Mochi Doughnuts with Sprinkles
                </Typography>
                {/* {whiteCake} */}
                <img 
                  src="/images/pinkDoughnut.png" 
                  alt="" 
                  style={{
                    width: "20rem",
                    height: "30rem",
                    zIndex: "3",
                    position: "absolute",
                    right: "10%",
                    top: "50%",
                    transform: "translateY(-50%)",
            
                  }}
                  className="mainImg"
                />

                <img 
                  src="/images/lilDonut1.png" 
                  alt="" 
                  style={{
                    width: "5rem",
                    height: "5rem",
                    zIndex: "1000",
                    position: "absolute",
                    left: "10%",
                    top: "30%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img1"
                />

                <img 
                  src="/images/lilDonut2.png" 
                  alt="" 
                  style={{
                    width: "6rem",
                    height: "6rem",
                    zIndex: "1000",
                    position: "absolute",
                    right: "10%",
                    top: "80%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img2"
                />
            </Box>
        </SwiperSlide>

        {/* Add more SwiperSlides here with different content */}
        <SwiperSlide>
            <Box
              sx={{
                width: "100%",  // Ensures full viewport width
                height: "36rem",
                background: "linear-gradient(to right, #C08552, #F5D3C8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", 
                textAlign: "start",
                position: "relative",
                overflow: "hidden"
              }}
            >
                <Typography 
                  variant='h1' 
                  sx={{
                    fontSize: "6.2rem", 
                    zIndex: 2,
                    // position: "relative",
                    width: "50rem"
                  }}
                  className="textFade"
                >
                  Chocolate Chips Waffles
                </Typography>
                {/* {whiteCake} */}
                <img 
                  src="/images/waffles.png" 
                  alt="" 
                  style={{
                    width: "20rem",
                    height: "24rem",
                    zIndex: "3",
                    position: "absolute",
                    right: "10%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="mainImg"
                />

                <img 
                  src="/images/waffle1.png" 
                  alt="" 
                  style={{
                    width: "5rem",
                    height: "5rem",
                    zIndex: "1000",
                    position: "absolute",
                    left: "10%",
                    top: "30%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img1"
                />

                <img 
                  src="/images/waffle2.png" 
                  alt="" 
                  style={{
                    width: "6rem",
                    height: "6rem",
                    zIndex: "1000",
                    position: "absolute",
                    right: "10%",
                    top: "80%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img2"
                />
            </Box>
        </SwiperSlide>

        <SwiperSlide>
            <Box
              sx={{
                width: "100%",  // Ensures full viewport width
                height: "36rem",
                background: "linear-gradient(to right, #E21C34, #500B28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", 
                textAlign: "start",
                position: "relative",
                overflow: "hidden"
              }}
            >
                <Typography 
                  variant='h1' 
                  sx={{
                    fontSize: "6.2rem", 
                    zIndex: 2,
                    // position: "relative",
                    width: "50rem"
                  }}
                  className="textFade"
                >
                  StrawBerry Cream Cake
                </Typography>
                {/* {whiteCake} */}
                <img 
                  src="/images/whiteCake.png" 
                  alt="" 
                  style={{
                    width: "20rem",
                    height: "30rem",
                    zIndex: "3",
                    position: "absolute",
                    right: "15%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="mainImg"
                />

                <img 
                  src="/images/cake1.png" 
                  alt="" 
                  style={{
                    width: "5rem",
                    height: "5rem",
                    zIndex: "1000",
                    position: "absolute",
                    left: "10%",
                    top: "30%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img1"
                />

                <img 
                  src="/images/cake2.png" 
                  alt="" 
                  style={{
                    width: "6rem",
                    height: "6rem",
                    zIndex: "1000",
                    position: "absolute",
                    right: "10%",
                    top: "80%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img2"
                />
            </Box>
        </SwiperSlide>

        <SwiperSlide>
            <Box
              sx={{
                width: "100%",  // Ensures full viewport width
                height: "36rem",
                background: "linear-gradient(to right, #FAC267, #FDDB8D)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", 
                textAlign: "start",
                position: "relative",
                overflow: "hidden"
              }}
            >
                <Typography 
                  variant='h1' 
                  sx={{
                    fontSize: "6.2rem", 
                    zIndex: 2,
                    // position: "relative",
                    width: "50rem"
                  }}
                  className="textFade"
                >
                  Caramel MilkShake with Honey
                </Typography>
                {/* {whiteCake} */}
                <img 
                  src="/images/milkshake.png" 
                  alt="" 
                  style={{
                    width: "20rem",
                    height: "30rem",
                    zIndex: "3",
                    position: "absolute",
                    right: "10%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="mainImg"
                />

                <img 
                  src="/images/milkshake1.png" 
                  alt="" 
                  style={{
                    width: "5rem",
                    height: "5rem",
                    zIndex: "1000",
                    position: "absolute",
                    left: "10%",
                    top: "30%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img1"
                />

                <img 
                  src="/images/milkshake2.png" 
                  alt="" 
                  style={{
                    width: "6rem",
                    height: "6rem",
                    zIndex: "1000",
                    position: "absolute",
                    right: "10%",
                    top: "80%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img2"
                />
            </Box>
        </SwiperSlide>


        <SwiperSlide>
            <Box
              sx={{
                width: "100%",  // Ensures full viewport width
                height: "36rem",
                background: "linear-gradient(to right,  #F9EFD3, #F7ECCB)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", 
                textAlign: "start",
                position: "relative",
                overflow: "hidden"
              }}
            >
                <Typography 
                  variant='h1' 
                  sx={{
                    fontSize: "6.2rem", 
                    zIndex: 2,
                    // position: "relative",
                    width: "50rem"
                  }}
                  className="textFade"
                >
                  Vanilla Ice Cream
                </Typography>
                {/* {whiteCake} */}
                <img 
                  src="/images/iceCream.png" 
                  alt="" 
                  style={{
                    width: "20rem",
                    height: "30rem",
                    zIndex: "3",
                    position: "absolute",
                    right: "10%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="mainImg"
                />

                <img 
                  src="/images/iceCream1.png" 
                  alt="" 
                  style={{
                    width: "3rem",
                    height: "5rem",
                    zIndex: "1000",
                    position: "absolute",
                    left: "10%",
                    top: "30%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img1"
                />

                <img 
                  src="/images/iceCream2.png" 
                  alt="" 
                  style={{
                    width: "5rem",
                    height: "6rem",
                    zIndex: "1000",
                    position: "absolute",
                    right: "10%",
                    top: "80%",
                    transform: "translateY(-50%)",
                    
                  }}
                  className="img2"
                />
            </Box>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default SwiperSlider;
