import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiLogOut} from "react-icons/fi";
import files from "../files.png";
import { Link } from "react-router-dom";
import Landing from 'C:/Users/RIAD/Desktop/SeaSearch-main/Frontend/src/Pages/Landing';


function Navbar1() {
  const [userRole, setUserRole] = useState('Invité');
    return (

  <div className='flex justify-center items-center sticky top-0 h-20 w-full text-slate-800 bg-white shadow-md'>
      <div className='flex flex-row justify-between w-[80%] gap-x-32'>
      <div className="w-9 justify-start items-center">
      <img src={files}></img>
    </div>
      <div className='flex  items-center gap-x-10'>
      <a>
      <Link to="C:/Users/RIAD/Desktop/SeaSearch-main/Frontend/src/Pages/Landing">Accueil</Link>
      </a>
      <a>
      <Link to="/">favoris</Link>
      </a>
      <a>
      <Link to="/">historique</Link>
      </a>
      <a>
      <Link to="/">Deconnecter</Link>
      </a>
      </div>
     
      </div>
  </div>
    );
  }
  export default Navbar1;
