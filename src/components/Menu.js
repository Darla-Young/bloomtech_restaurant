import React from "react";
import menu from '../mockAPIs/menu';

const Menu = () => {
 return (
  <div className="menu">
   <div className="menu-container">
    <h1>MENU</h1>
    {(menu.types || []).map(type => {
     return (
      <div className="menu-section" key={type.type}>
       <h2>{type.type}</h2>
       {type.items.map(item => (
         <div className="menu-item" key={item.name}>
          <h4>{item.name}</h4>
          <h4>${item.price}</h4>
          <p>* {item.description} *</p>
          {item.special ? <p>{item.special}</p> : null}
         </div>
        ))}
      </div>
     )
    })}
   </div>
  </div>
 )
}

export default Menu;

/*
  <section class="menu-section">
   <h3>Drinks</h3>
   <div class="menu-item">
    <h4>Soda</h4>
    <h4>$2</h4>
    <p>Coke products</p>
   </div>
   ...
  </section>

  <section class="menu-section">
   <h3>Appetizers</h3>
   <div class="menu-item">
    <h4>Fried Pickles</h4>
    <h4>$6</h4>
    <p>Golden and crispy with tang!</p>
    <p>(V)</p>
   </div>
   ...
  </section>

  <section class="menu-section">
   <h3>Soup and Salad</h3>
   <div class="menu-item">
    <h4>House Salad</h4>
    <h4>$8</h4>
    <p>Spinach and arugala with all the good veggies; add chicken for $6</p>
    <p>(GF, V)</p>
   </div>
   ...
  </section>

  <section class="menu-section">
   <h3>Entrees</h3>
   <div class="menu-item">
    <h4>Ribeye Steak</h4>
    <h4>$32</h4>
    <p>Served with mashed potatoes and roasted asparagus</p>
   </div>
   ...
  </section>

  <section class="menu-section">
   <h3>Desserts</h3>
   <div class="menu-item">
    <h4>Flourless Chocolate Cake</h4>
    <h4>$7</h4>
    <p>Gooey and chocolatey heaven</p>
    <p>(GF)</p>
   </div>
   ...
  </section>

 </div>
</article>
*/