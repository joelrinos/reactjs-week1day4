import React from "react";
import { Container, Box, Toolbar } from "@mui/material/";
import Dashboard from "./modules/Dashboard";
const PHome = () => {
  return (
    <>
      <Container>
        <Box mt={2}>
          <Toolbar />
          <h2>Dashboard!</h2>
          <Dashboard />
        </Box>
      </Container>
    </>
  );
};

export default PHome;
