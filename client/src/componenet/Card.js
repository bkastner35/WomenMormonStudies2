import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'green' : 'burgundy',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Name</Item>
      </Grid>
    </React.Fragment>
  );
}

function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

class Card extends React.Component {
  constructor(props) {
  super(props);
    this.person = props.person
   }

   handleClick() {
    window.location.href="https://www.youtube.com/watch?v=ihloYYx7qfY"
  };

 render() {
  return(
    <Box>
    <Grid item xs={100}>
    <Item>
    <button onClick={() => this.handleClick()}>Name: {this.person.first_name} {this.person.last_name} Email: {this.person.email}</button>
    </Item>
    </Grid>
    </Box>
);
  }

 }



export default Card;