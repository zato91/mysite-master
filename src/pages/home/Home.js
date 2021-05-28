import React  from 'react';
import Button from '@material-ui/core/Button';


const Home =()=>{

    const texStyle = {
        fontFamily: 'Kaushan Script',
         color: "black"
    }
     
    return( 
        <div style={{textAlign:"center"}}>
            <h4 style={texStyle}>Hello, I'm</h4>
            <h1 style={texStyle}>Zara</h1>
            <p style={texStyle}>UI Developer. UX Desinger. Problem Solver</p>
            <Button variant="outlined">Default</Button>
        </div>
       
       
    )
}


export default Home;