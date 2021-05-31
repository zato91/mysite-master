import React  from 'react';
import Card from '../components/Card';
import picture from '../assets/heart.jpeg';
import {ButtonStyled} from '../components/Button';

const renderCard =()=> {
    return (picture+" ").repeat(2).split(' ').map((pic,index) => <Card key={index}picture={picture}/>)
}
  
const Portfolio =()=>{

    return(<div className="portfolio-contrainer" >
                    
                    <div>
                        <h2>Project Portfolio</h2>
                        <h6>Sharing my endaovore and passions</h6>
                    </div>
                   
                    <div className='cards'>
                        {renderCard()}
                    </div>
                    <div className="buttonContainer">
                        <ButtonStyled lx="true">More Projects</ButtonStyled>
                    </div>

    </div>
        
    )
}

export default Portfolio;