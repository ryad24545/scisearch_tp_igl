import {React,useState } from "react";
import { FaSearch } from "react-icons/fa";
import user from "../user.png";
import email from "../email.png";
import pwd from "../pwd.png";

const Left_input = () => {
    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [Mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [C_Password, setC_Password] = useState('');
    const handleNomChange = (event) => {
      setNom(event.target.value);}
      const handlePrenomChange = (event) => {
        setPrenom(event.target.value);}
      const handleMailChange = (event) => {
            setMail(event.target.value);}
      const handleUsernameChange = (event) => {
            setUsername(event.target.value);}
      const handlePasswordChange = (event) => {
            setPassword(event.target.value);}
                   
     const handleC_PasswordChange = (event) => {
                setC_Password(event.target.value);}      
           
  
    return(
        <div className="left_input">
            <div>
        <div className="label"> Nom </div>
        <div className="input_inscription">
        <div className="flex  justify-start items-start text-gray-700"><img src={user}></img></div>

             <input
                 type="text"
                 value={Nom}
                 onChange={handleNomChange}
                 placeholder="Entrez votre nom..."
                 className="text-gray-800 w-full outline-none"
                  />
        </div>
        </div>
        <div>
        <div className="label"> Adresse Mail </div>
        <div className="input_inscription">
        
      <div className="flex  justify-start items-start text-gray-700"><img src={email}></img></div>
           
        <input
        type="text"
        value={Mail}
        onChange={handleMailChange}
        placeholder="Entrez votre adresse mail..."
        className="text-gray-800 w-full outline-none"
      />
        </div>
        </div> 
        <div>
        <div className="label"> Username </div>
        <div className="input_inscription">   
        <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Entrez votre username..."
        className="text-gray-800 w-full outline-none" />
        </div>
        </div>
        </div>)

};

const Right_input = () => {
 
    const [Prenom, setPrenom] = useState('');
    const [Password, setPassword] = useState('');
    const [C_Password, setC_Password] = useState('');
  
      const handlePrenomChange = (event) => {
        setPrenom(event.target.value);}

      const handlePasswordChange = (event) => {
            setPassword(event.target.value);}
                   
     const handleC_PasswordChange = (event) => {
                setC_Password(event.target.value);}      
           
  
    return(
        <div className="left_input">
            <div>
        <div className="label"> Prenom </div>
        <div className="input_inscription">
        <div className="flex  justify-start items-start text-gray-700"><img src={user}></img></div>

             <input
                 type="text"
                 value={Prenom}
                 onChange={handlePrenomChange}
                 placeholder="Entrez votre prenom..."
                 className="text-gray-800 w-full outline-none"
                  />
        </div>
        </div>
        <div>
        <div className="label"> Mot de passe </div>
        <div className="input_inscription">
        
      <div className="flex  justify-start items-start text-gray-700"><img src={pwd}></img></div>
           
        <input
        type="Password"
        value={Password}
        onChange={handlePasswordChange}
        placeholder="Entrez votre mot de passe..."
        className="text-gray-800 w-full outline-none"
      />
        </div>
        </div> 
        <div>
        <div className="label"> Confirmer mot de passe </div>
        <div className="input_inscription"> 
        <div className="flex  justify-start items-start text-gray-700"><img src={pwd}></img></div>  
        <input
        type="text"
        value={C_Password}
        onChange={handleC_PasswordChange}
        placeholder="Confirmer mot de passe..."
        className="text-gray-800 w-full outline-none" />
        </div>
        </div>
        </div>)

};

function Inscription() {
       
           
  
    return(
      
        <div className="inscription">
             
        <div className="inputs">
             <Left_input/>
             <Right_input/>
        
         </div>
         <div className="buton">
         <button className="inscrire">
               S'inscrire
            </button>
            <button className="existe">
            Vous avez un compte ? Connectez-vous
            </button>
            </div>
         </div>
        
     
      

        
        
        
     
    )
}
export default Inscription;
