// App.js

import {React,useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from './Pages/Footer';
import Page2 from './Pages/Page2';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar1';
import Resultat from './Pages/Resultat';

const App = () => {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Landing />
      </div>
    </Router>
  );
};

export default App;
