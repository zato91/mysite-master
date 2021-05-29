import React  from 'react';
import {Button} from '@material-ui/core';



  
    const texStyle = {
        fontFamily: 'Kaushan Script',
        // color: "black",
     }

const buttonStyle = {
    color:"white",
    border:"3px solid white",
  
}

const Home =()=>{
    


    return( 
        <div style={{textAlign:"center"}}>
            <h4 style={texStyle}>Hello, I'm</h4>
            <h1 style={texStyle}>Zara</h1>
            <p style={texStyle}>UI Developer. UX Desinger. Problem Solver</p>
         
            <Button style={buttonStyle} variant="outlined" sx={{mr:2} }>Default</Button>
            <Button variant="outlined" style={buttonStyle}>Default</Button>
            
            
        </div>
       
       
    )
}


export default Home;