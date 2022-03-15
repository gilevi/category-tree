import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles, Box } from "@material-ui/core";

import './App.css';


const useStyles = makeStyles(() => ({
  background:{
      background:'#f5ba4d'
  }
}));

const Header =() =>{
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar  className={classes.background}>
        <CssBaseline />
        <Toolbar>
            <Typography className="navTitle" variant="h6" color="inherit" noWrap>
              Tree View App
            </Typography>
        </Toolbar>
    </AppBar>
    </Box>
  );
}
export default Header;