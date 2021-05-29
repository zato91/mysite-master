import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:"space-between ",
    width: "100%"
  },
  textFieldMidium: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

    // width: '25ch',
    flex:'1 0 33%'
    // justifyContent:"space-between"
  },
  buttonForm:{
    marginLeft: '40%',
    width: '33%',
    // margin:'0 auto',
    
  }
}));



export default function Form() {
  const classes = useStyles();
 

  

  return (
    <form className={classes.root}>
        <div>
        <TextField 
        // sx={{mr:10}}
          label="First name"
          defaultValue="First name"
        //   multiline={true}
        // style ={{width: '44%'}}
        className={classes.textFieldMidium}
     
        />
      <TextField 
          label="Last name"
          defaultValue="Last name"
        //   multiline={true}
        // style ={{width: '43.5%'}}
        
        className={classes.textFieldMidium}
            
        // inputStyle ={{width: '50%'}}
        //   item xs={6}
        //   style={{ margin: 8 }}
         
        />
        </div>
        <TextField 
          label="Last name"
          defaultValue="Last name"
          id="standard-full-width"
          fullWidth
          margin="normal"
      
        />
         <TextField 
          label="Last name"
          defaultValue="Last name"     
          fullWidth
          margin="normal"
        />
        <Button 
             type="submit"
             variant="contained"
             className={classes.buttonForm}
        >Submit</Button>
        
       
       
   </form>
  );
}

