import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <div>
   <h1>BLOOMTECH BAR AND GRILL</h1>
   <nav>
    <div className="links">
     <Link to={'/menu'}>Menu</Link>
     <Link to={'/reservations'}>Reservations</Link>
     <Link to={'/offers'}>Special Offers</Link>
     <Link to={'/contact'}>Contact</Link>
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

export default Header;