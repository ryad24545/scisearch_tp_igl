// App.js
import './App.css';
import {React,useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from './Pages/Footer';
import Page2 from './Pages/Page2';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar1';
import Resultat from './Pages/Resultat';
import Part3 from './Pages/login';
const App = () => {
  
  return (
    <Router>
      <div>
       <Part3/>
      </div>
    </Router>
  );
};

export default App;
