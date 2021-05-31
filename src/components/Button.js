
import styled from 'styled-components';
import {Button} from '@material-ui/core';


const ButtonStyled= styled(Button)`
    color: white;
    border: 3px solid white;
    ${p=> (p.md) ? "width:14em":(p.lx) ? "width:20em" : 'width:7em'}
    
   
`

export {ButtonStyled};

