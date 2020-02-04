import React from 'react';
import Logo from './Logo.js';


const Header = (props) => {
return(
  <div className="header">
  <Logo />
  <div>
  <p>Social Card UI</p>
  <p>Learning React</p>
  <p>Joe Robb</p>
  </div>
  <p className="info">Today's Date: { props.date }</p>
  </div>
);

}


export default Header;
