import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import HomeControl from './HomeControl';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeControl />} />
        {/* <Route path='/services' element={ServicesControl />} /> */}
        {/* <Route path='/team' element={TeamControl />} /> */}
        {/* <Route path='/contact' element={ContactControl />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
