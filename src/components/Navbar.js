import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const linkStyle = {
    paddingLeft: '3%',
    textDecoration: 'none'
   
  };

const Navbar = () => {
    const classes = useStyles();
    // const logo = require('./logo.jpeg);
    // const icon = <FontAwesomeIcon icon={faFacebook} />
    
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
      {/* <img src={"../logo.png;"} /> */}
      {/* <img src={logo} /> */}
      <Button >Logo</Button>
      </Typography>

     <Link style={linkStyle} to="/home">Home</Link>
     <Link style={linkStyle} to="/portfolio">Products</Link>
     <Link style={linkStyle} to="/contact">Contact</Link>

     
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;