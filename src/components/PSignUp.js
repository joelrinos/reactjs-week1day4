import React from "react";
import { Profile } from "./modules/Profile";
import { Container, Box, Toolbar } from "@mui/material/";

const PSignUp = () => {
  return (
    <>
      <Container>
        <Box mt={2}>
          <Toolbar />
          <h2>Signup!</h2>
          <Box mt={2}>
            <Profile />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default PSignUp;
