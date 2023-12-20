import React from 'react';
import Header from './Header';
import Banner from './Banner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import HomeControl from './HomeControl';
import ServicesControl from './ServicesControl'
import TeamControl from './TeamControl'
import ContactControl from './ContactControl'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeControl />} />
        <Route path='/services' element={<ServicesControl />} />
        <Route path='/team' element={<TeamControl />} />
        <Route path='/contact' element={<ContactControl />} />
      </Routes>
      <Banner />
    </Router>
  );
}

export default App;
