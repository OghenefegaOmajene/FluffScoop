import Container  from "@mui/material/Container";
import React from "react";
import Desserts from "./Desserts";
import Homepage from "./Homepage";

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Homepage></Homepage>
      <Desserts></Desserts>
    </Container>
  );
};

export default Home;
