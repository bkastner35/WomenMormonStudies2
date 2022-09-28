import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Home
        <Link to= '/'></Link>
      </Button>
      <Button>Find an Expert
        <Link to= '/expert_finder'></Link>
      </Button>
      <Button>Register as an Expert
        <Link to= '/register'></Link>
      </Button>
    </ButtonGroup>
  );
}