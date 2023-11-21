import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Reservations from './components/Reservations';
import Offers from './components/Offers';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
       <Route path='/' element={<Menu />} />
       <Route path='/reservations' element={<Reservations />} />
       <Route path='/offers' element={<Offers />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
      <p id='copyright'>©2022 BloomTech Restaurant Group, Inc. All Rights Reserved.</p>
    </div>
  );
}

export default App;

//changing something here