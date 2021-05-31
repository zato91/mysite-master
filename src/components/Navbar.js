import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo.svg'


 
const useStyles = makeStyles((theme) => ({title: {flexGrow: 1},  }));
      

const Navbar = ({coloR}) => {
  // const classes = useStyles();

  const {title} = useStyles()


    
  return (

      <nav style={coloR}>
     
      <Toolbar>
        <Typography variant="h6" className={title}>
          <img src={logo} alt=""/>
        </Typography>

      <Link  className="link" to="/">Home</Link>
      <Link  className="link" to="/portfolio">Products</Link>
      <Link  className="link" to="/contact">Contact</Link>

      
      </Toolbar>

    </nav>
  );
};

export default Navbar;