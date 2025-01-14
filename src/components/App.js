import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeControl from './HomeControl';
import ServicesControl from './ServicesControl'
import TeamControl from './TeamControl'
import ContactControl from './ContactControl'
import Footer from './Footer';
import '../CSS/HomeCarousel.css'
import '../CSS/TeamPhoto.css'
import CrosswordControl from './CrosswordControl';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeControl />} />
        <Route path='/services' element={<ServicesControl />} />
        <Route path='/team' element={<TeamControl />} />
        <Route path='/contact' element={<ContactControl />} />
        <Route path='/crossword' element={<CrosswordControl />} />
      </Routes>
      {/* <Banner /> */}
      <Footer />
    </Router>
  );
}

export default App;
