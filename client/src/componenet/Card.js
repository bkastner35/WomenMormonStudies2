// src/components/Card.js

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


 class Card extends React.Component {
  constructor(props) {
  super(props);
    this.person = props.person
   }

   handleClick() {
    
  };

 render() {
  return(
    <button onClick={() => this.handleClick()}>
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
    <div> 
      
      <h2>{this.person.first_name}</h2>
      <h2>{this.person.last_name}</h2>
      <p>{this.person.email}</p>
      <p>{this.person.discipline}</p>
    </div>
  </div>
  </button>
  
);
  }

 }


export default Card;