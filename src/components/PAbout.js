import React from "react";
import { Container, Box, Toolbar, CardMedia } from "@mui/material/";

const PAbout = () => {
  return (
    <>
      <Container>
        <Box mt={2}>
          <Toolbar />
                  <h2>About!</h2>
                  <Box mt={2}>
                      <CardMedia
                          component="iframe"
                          src="https://smartdevpreneur.com/tailoring-the-material-ui-card-component/"
                      />
                  </Box>
        </Box>
      </Container>
    </>
  );
};
export default PAbout;
