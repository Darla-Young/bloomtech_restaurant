import React from "react";

const Footer = () => {
 return (
  <div>
   <h1><a href="index.html">BLOOMTECH BAR AND GRILL</a></h1>
   <nav>
    <div className="links">
     <a href="menu.html">Menu</a>
     <a>Reservations</a>
     <a>Special Offers</a>
     <a>Contact</a>
    </div>
    <div className="buttons">
     <button><i className="fa-brands fa-facebook"></i></button>
     <button><i className="fa-brands fa-twitter"></i></button>
     <button><i className="fa-brands fa-instagram"></i></button>
    </div>
   </nav>
  </div>
 )
}

export default Footer;