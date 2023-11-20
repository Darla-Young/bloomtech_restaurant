import React, { useRef } from "react";
import { Link } from "react-router-dom";


const Header = () => {
 const menu = useRef(null);
 const reservations = useRef(null);
 const offers = useRef(null);
 const contact = useRef(null);

 const scrollToMenu = () => {
  menu.current.scrollIntoView({behavior: 'smooth', block: 'start'});
 }

 const scrollToReservations = () => {
  reservations.current.scrollIntoView({behavior: 'smooth', block: 'start'});
 }

 const scrollToOffers = () => {
  offers.current.scrollIntoView({behavior: 'smooth', block: 'start'});
 }

 const scrollToContact = () => {
  contact.current.scrollIntoView({behavior: 'smooth', block: 'start'});
 }

 return(
  <div className="header container">
   <div id="header">
    <h1 id="title">BLOOMTECH BAR AND GRILL</h1>
    <nav id="navContainer">
     <div id="links">
      <Link to={'/menu'} ref={menu} id='menu' className="link" onClick={scrollToMenu}>Menu</Link>
      <Link to={'/reservations'} ref={reservations} id='reservations' className="link" onClick={scrollToReservations}>Reservations</Link>
      <Link to={'/offers'} ref={offers} id='offers' className="link" onClick={scrollToOffers}>Special Offers</Link>
      <Link to={'/contact'} ref={contact} id='contact' className="link" onClick={scrollToContact}>Contact</Link>
     </div>
     <div className="buttons">
      <button><i className="fa-brands fa-facebook button"></i></button>
      <button><i className="fa-brands fa-twitter button"></i></button>
      <button><i className="fa-brands fa-instagram button"></i></button>
     </div>
    </nav>
   </div>
  </div>
 )
}

export default Header;