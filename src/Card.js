import React from 'react';
import Lego from './lego.jpg';

const Card = (props) => {
return(
  <div className="card">
      <h1> This is a Social Card UI</h1>
      <h2> The aim is to break everything up into components</h2>
      <h3> Nothing heavy duty</h3>
      <h4>A few props here</h4>
      <h5>A little bit of state there</h5>
      <div className="cardInfo">
          <h2> {props.name} </h2>
          <img src={Lego} alt="Lego Man" />
      </div>
  </div>
);

}

export default Card;
