import React, { useState } from 'react';

import logo from '../logo.png'
 
  
const Part1 = () =>  {
  
    return (
   <div className='buttons_container'>
   <div> <h1 className='Connectez-vous'>Connectez-vous </h1> </div>
   <div><h4 className='description'>Afin de faire des recherches et filtrer vos résultats</h4> </div>
   <div className='img_admin'><img src={logo}></img></div>
   
   </div>
                    
    );
  };
  const Part2 = () =>  {
    const [password, setPassword] = useState('');
    const [User, setUser] = useState('');

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);}
      const handleUserdChange = (event) => {
        setUser(event.target.value);}
    return (
        <div className='buttons_container_login'>
      
          
        
        
        <input className='user'
        
        placeholder="User name / Email"
          id="user"
          name="user"
          value={User}
          onChange={handleUserdChange}
        />
        <input  
        className='password'
        placeholder="Mot de passe"
        
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div>
          <button className='se_connecter'>Se connecter</button>
        </div>
        <div className='vi'>
        <div className='pas_compte'>Vous n'avez pas de compte?  </div>
        <div className='inscrivez' href="./login">Inscrivez_vous </div>
        
        </div>
      </div>
      
                    
    );
  };
  ////ryad
  const Part3  = () =>  {
    return(
      <>
      <div className='login'>
      <Part1/>
      <Part2/> 
      </div>
      
      </>
    )
  }

  
  export default Part3 ;