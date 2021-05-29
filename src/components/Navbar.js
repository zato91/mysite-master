import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo.svg'




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
    textDecoration: 'none',
    listStyle: 'none',
    color:'white',
   
  };
 

const Navbar = () => {
    const classes = useStyles();
    
    
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
      <img src={logo} alt=""/>
      </Typography>

     <Link style={linkStyle} className="link" to="/">Home</Link>
     <Link style={linkStyle} className="link" to="/portfolio">Products</Link>
     <Link style={linkStyle} className="link" to="/contact">Contact</Link>

     
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;