import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { useState } from 'react';




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
          // Placeholder=
          // id="standard-full-width"
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
          multiline={true}
          rows={4}
          
        />
      <div id="buttonCont">

        <Button className="buttFor" style={{color: "white",
        border: "3px solid white"}} variant="outlined" 
        >Submit
        </Button> 
      </div>  
       
       
   </form>
  );
}

