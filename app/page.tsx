import Container  from "@mui/material/Container";
import React from "react";
import Desserts from "./Desserts";
import IceCream from "./IceCream/IceCream";
import Homepage from "./Homepage";
import OurStory from "./OurStory/OurStory";
import Footer from "./Footer";

const Home = () => {
  return (
    <Container className="App" maxWidth={false} disableGutters>
      <Homepage></Homepage>
      <OurStory></OurStory>
      <IceCream></IceCream>
      <Desserts></Desserts>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
