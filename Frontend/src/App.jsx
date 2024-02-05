// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer';

import Landing from './Pages/Landing';
import Navbar from './Components/Navbar1';
import Resultat from './Pages/Resultat';
import Favoris from './Pages/Favoris';
import Signup  from './Pages/Signup';
import './App.css';


import Part3 from './Pages/login';
import Admin from './Pages/Admin';
import Inscription from './Pages/Inscription';

const App = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/Resultat" element={<Resultat />} />
        <Route path="/Favoris" element={<Favoris />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
