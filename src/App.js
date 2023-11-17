import './styleSheets/App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Reservations from './components/Reservations';
import Offers from './components/Offers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/reservations' element={<Reservations />} />
       <Route path='/offers' element={<Offers />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
