// src/components/Card.js

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


 class Card extends React.Component {
  constructor(props) {
  super(props);
    this.person = props.person
   }
   
   handleClick() {
    
  };
 

 render() {
  return(

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
        <React.Fragment>
        <Grid item xs={4}>
        <button onClick={() => this.handleClick()}>
          <Item>
          <h2>{this.person.first_name}</h2>
          {this.person.last_name}
          </Item>
          </button>

        </Grid>
      </React.Fragment>
        </Grid>
        
      </Grid>
    </Box>

);
  }

 }


export default Card;