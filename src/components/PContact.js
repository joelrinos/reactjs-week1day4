import React from "react";

import { Container, Box, Toolbar, Grid } from "@mui/material/";
import TourCard from "./TourCard";
const PContact = () => {
  return (
    <>
      <Container>
        <Box mt={2}>
          <Toolbar />
          <h2>Contact!</h2>
          <Box mt={2}>
            <Grid container spacing={5}>
              <TourCard title="Location" />
              <TourCard title="Contact Number" />
              <TourCard title="Email" />
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PContact;
