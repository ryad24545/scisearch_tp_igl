import React from 'react';
import logo from '../logo.png'

const Admin = () => {
  return (
    <div class="buttons_container">
       <div className='img_admin'><img src={logo}></img></div>
        <div ><button className='buttons1'>Gerer moderateurs</button></div>
        <div ><button className='buttons2'> Upload Fichier </button></div>
</div>
  );
};

export default Admin ;
