import React  from 'react';
import {ButtonStyled} from '../../components/Button';
import Contact from '../Contact';
import Portfolio from '../Portfolio';




const Home =()=>{
    
    return( <>
        <div id="Home-main">
            <h4 >Hello, I'm</h4>
            <h1 >Zara</h1>
            <p >UI Developer. UX Desinger. Problem Solver</p>
            <ButtonStyled  md style={{ marginRight:'1em'}}>HELLO</ButtonStyled>
            <ButtonStyled md >HELLO</ButtonStyled>     
            
        </div>
        <Portfolio/>
        <Contact/>
       
       
    </>)
}


export default Home;