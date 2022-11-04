import React from "react";
import { Paper, Grid, Card, CardContent, Typography } from "@mui/material/";

const TourCard = (props) => {
  return (
    <Grid item xs={3}>
      <Paper variant="outlined">
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
              {props.title}
            </Typography>

            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default TourCard;
