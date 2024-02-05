import React from 'react';
import logo from '../logo.png'
import Navbar1 from "../Components/Navbar1";
const Admin = () => {
  return (
   <div>
    <Navbar1 />
    <div class="buttons_container">
       <div className='img_admin'><img src={logo}></img></div>
        <div ><button className='buttons1'>Gerer moderateurs</button></div>
        <div ><button className='buttons2'> Upload Fichier </button></div>
</div>
</div>
  );
};

export default Admin ;
