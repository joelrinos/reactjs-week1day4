import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material/";

import { Link } from "react-router-dom";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/signup", label: "SignUp" },
];

const AppBarCustom = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {/*empty*/}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ to, label }) => (
              <Link key={to} to={to}>
                <Button key={to} sx={{ color: "#fff" }}>
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarCustom;
