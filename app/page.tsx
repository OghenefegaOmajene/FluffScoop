import Container  from "@mui/material/Container";
import React from "react";
import Desserts from "./Desserts";
import Homepage from "./Homepage";
import OurStory from "./OurStory";

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Homepage></Homepage>
      <OurStory></OurStory>
      <Desserts></Desserts>
    </Container>
  );
};

export default Home;
