import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar,
  IconButton,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DrawerComp from "./Drawer";


const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
        <IconButton to='/' component={RouterLink}>
          <HomeIcon sx={{ transform: "scale(2)" }} />
          </IconButton>
          
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Sustainability App
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="About Us" to='/Aboutus'  component= {RouterLink}/>
                <Tab label="Services/Products" to='/Product'  component= {RouterLink}/>
              
                <Tab label="Contact Us" to='/Contactus'  component= {RouterLink}/>
              </Tabs>
              <Button to='/login' component= {RouterLink} sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button to='/register' component= {RouterLink} sx={{ marginLeft: "10px" }} variant="contained">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;