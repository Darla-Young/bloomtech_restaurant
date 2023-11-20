import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
 return (
  <div id="footer">
   <form id="footerForm">
    <input id="emailInput" type="email" placeholder="Email Address"/>
    <button id="footerSubmit" type="submit">Sign Up</button>
    <div id="footerLinks">
     <Link to={'/menu'} className="footer link">Menu</Link>
     <Link to={'/reservations'} className="footer link">Reservations</Link>
     <Link to={'/offers'} className="footer link">Special Offers</Link>
     <Link to={'/contact'} className="footer link">Contact</Link>
    </div>
   </form>
  </div>
 )
}

export default Footer;