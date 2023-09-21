import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import "../../styles/headerStyle.css"
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FastfoodIcon />
        My Food Order App
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <a activeClassName="active" href={"/"}>
            Home
          </a>
        </li>
        <li>
          <a href={"/menu"}>Menu</a>
        </li>
        <li>
          <a href={"/about"}>About</a>
        </li>
        <li>
          <a href={"/contact"}>Contact</a>
        </li>
        <li>
          <a href={"/login"}>Login</a>
        </li>
        <li>
          <a href={"/Cart"}>Cart</a>
        </li>

      </ul>
    </Box>
  );
  return (
    <>
      <Box sx={{ paddingBottom: '0px !important' }}>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Food Order App
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <a activeClassName="active" href={"/"}>
                    Home
                  </a>
                </li>
                <li>
                  <a href={"/menu"}>Menu</a>
                </li>
                <li>
                  <a href={"/about"}>About</a>
                </li>
                <li>
                  <a href={"/contact"}>Contact</a>
                </li>
                <li>
                  <a href={"/login"}>Login</a>
                </li>
                <li>
                  <a href={"/signup"}>Sign Up</a>
                </li>
                <li>
                  <a href={"/Cart"}>Cart</a>
                </li>

              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ p: 0.5 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;