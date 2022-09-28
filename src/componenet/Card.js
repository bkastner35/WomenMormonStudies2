// src/components/Card.js

import React from 'react';


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
    <button onClick={() => this.handleClick()}>
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
    <img className="br-100 h3 w3 dib" alt={this.person.name} src={process.env.PUBLIC_URL + this.person.imgPath} />
    <div> 
      
      <h2>{this.person.name}</h2>
      <p>{this.person.email}</p>
      <p>{this.person.interest}</p>
    </div>
  </div>
  </button>
  
);
  }

 }


export default Card;