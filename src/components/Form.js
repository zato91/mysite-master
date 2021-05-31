import React from 'react';
import TextField from '@material-ui/core/TextField';
import {ButtonStyled} from '../components/Button';





export default function Form() {

 
  return (
    <form id="formContact">
     
        <TextField 
       
          label="First name"
          defaultValue="First name"
          className="formItem"
        
        />

       
      <TextField 
         label="Last name"
         defaultValue="Last name" 
         className="formItem" 
        />
        <TextField 
         
          label="Email"
          placeholder="Enter your email"
          fullWidth
          margin="normal"
          
         
        />
         <TextField 
          id="filled-multiline-static"
          multiline
          label="Message" 
          fullWidth
          margin="normal"
          placeholder="Tape your Message"
          rows={4}
          
        />
      <div className="buttonContainer">
        <ButtonStyled lx >Submit</ButtonStyled>
      </div>  
       
       
   </form>
  );
}

