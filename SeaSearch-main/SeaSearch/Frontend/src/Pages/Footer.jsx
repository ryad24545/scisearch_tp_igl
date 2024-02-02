import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsTiktok,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import image2 from "../Calque.png";

function Footer() {
  return (
    <footer className="w-full">
      <div class="flex justify-between bg-[#EDEDED] w-full md:p-9 p-6 flex-row items-stretch">
        {/* BIG DIV */}
        <div class="flex flex-col justify-start md:w-1/2 w-full text-[#1B1A1A]">
          {" "}
          {/* DIV FIH TC +LIST */}
          <div className="flex flex-col">
            <span class="font-apercu md:-mb-8 text-[28px] md:text-[62px] -mb-4">ETIC</span>
            <span class="font-apercu text-[28px] md:text-[62px]">TRAINING CAMP X</span>
          </div>
          <div class="md:flex md:flex-row md:space-x-7 justify-between hidden text-[#1B1A1A] font-surpia-sans md:justify-between md:w-[60%]  md:text-[18px]  ">
            {/* DIV FIH les 2 listes */}
            <div>
              <ul class="space-y-[1.5px]">
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li><Link to="/">TRAINING CAMP X</Link></li>
                <li><Link to="/">ETIC</Link></li>
                <li> <Link to="/">Agenda</Link></li>
                <li><Link to="/">Formations</Link></li>
                
              </ul>
            </div>
            <div>
              <ul class="space-y-[1.5px] ">
                <li><Link to="/">Sponsor</Link></li>
                <li><Link to="/">Nous contacter</Link></li>
                <li><Link to="/">Q&A</Link></li>
              </ul>
            </div>
          </div>{" "}
          {/* DIV FIH les 2 listes */}
          <div className="flex flex-between items-center w-full "> {/*teswira wel contact*/} 
          <div className="flex flex-col  gap-x-[0.5px] w-1/2">
            {" "}
            {/* DIV FIH CONTACT*/}
            <span class="font-apercu mt-6 mb-1 md:text-[16px] md:flex text-[10px] border-[#1B1A1A] border-b-[0.5px] md:border-0 w-[85%]">
              Suivez nous sur les réseaux
            </span>
            <div className="md:flex md:flex-row hidden ">
            <a href="https://www.instagram.com/etic_club/" >
              <BsInstagram className="border-[0.5px] border-[#1B1A1A] p-2 md:w-12 md:h-12 w-8 h-8" />
              </a>
              <a href="https://twitter.com/ETIC_Club">
              <BsTwitter className="md:border-r-[0.5px] border-l-[0.5px] md:border-l-[0px]  border-t-[0.25px] md:border-t-[0.5px] border-b-[0.5px] border-[#1B1A1A] p-2 md:w-12 md:h-12 w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@etic.club">
              <BsTiktok className="md:border-r-[0.5px] border-l-[0.5px] md:border-l-[0px] md:border-t-[0.5px] md:border-b-[0.5px] border-[#1B1A1A] p-2 md:w-12 md:h-12 w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/ETIC.Club>">
              <BsFacebook className="md:border-r-[0.5px] border-l-[0.5px] md:border-l-[0px] md:border-t-[0.5px] md:border-b-[0.5px] border-[#1B1A1A] p-2 md:w-12 md:h-12 w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/company/etic-club/mycompany/">
              <BsLinkedin className="md:border-r-[0.5px] border-l-[0.5px] md:border-l-[0px] md:border-t-[0.5px] md:border-b-[0.5px] border-[#1B1A1A] p-2 md:w-12 md:h-12 w-8 h-8" />
              </a>
              </div>
            <div className="flex flex-row -ml-2 -mb-6 md:hidden ">
            <a href="https://www.instagram.com/etic_club/" >
              <BsInstagram className="p-2  w-8 h-8" />
              </a>
              <a href="https://twitter.com/ETIC_Club">
              <BsTwitter className="p-2 w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@etic.club">
              <BsTiktok className="p-2 w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/ETIC.Club>">
              <BsFacebook className="p-2 w-8 h-8" />
              </a>
              
              <a href="https://www.linkedin.com/company/etic-club/mycompany/">
              <BsLinkedin className="p-2 w-8 h-8" />
              </a>
            </div>
          </div>
          {/* DIV FIH CONTACT*/}
          <div className="flex md:hidden w-1/2">
          
          <img className="w-full" src={image2} alt="Description of the image" />
          </div>
          </div>
          <span class="font-apercu md:mt-6 md:text-[12px] md:flex text-[8px] ">
          ©2023 - Tous droits réservés
    </span>
        </div>{" "}
        {/* DIV FIH TC +LIST+ Contact */}
        <div className="md:w-1/2 h-full hidden md:flex items-center">
          {" "}
          {/* DIV HALF IMAGE */}
          <img className="h-full h-fit" src={image2} />
        </div>{" "}
        {/* DIV HALF IMAGE */}
      </div>{" "}
      
      {/* BIG DIV */}
     
    </footer>
  );
}

export default Footer;
