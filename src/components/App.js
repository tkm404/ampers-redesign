import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path='/' element={<HomeControl />} /> */}
        {/* <Route path='/' element={ServicesControl />} /> */}
        {/* <Route path='/' element={TeamControl />} /> */}
        {/* <Route path='/' element={ContactControl />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
