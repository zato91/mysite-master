import React  from 'react';
import {ButtonStyled} from '../components/Button';


const Card =(props)=> {
    return(  
        <div className="card"  style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.picture})` }}>
            <div><h2>Luv Talk Website</h2>
               
                <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                <ButtonStyled >More</ButtonStyled>
            </div>
        </div>)

}

export default Card;