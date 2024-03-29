import React, { useState } from "react";
import { Link } from "react-router-dom";
import files from "../files.png";
import { FaSearch } from "react-icons/fa";
import Navbar1 from "../Components/Navbar1";

function Landing() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <Navbar1 />
      <div className="flex justify-center p-14 ">
        <div className="flex flex-col gap-y-8 items-center">
          <div className="w-56">
            <img src={files} alt="Files Logo" />
          </div>
          <div className="flex flex-col text-black">
            <p className="font-[PlusJakatraSemiBold] text-4xl text-4xl text-center">Scisrearch</p>
            <p className="font-[PlusJakatraMedium] text-3xl text-center">
              Rechercher des articles scientifiques et filtrer <br /> les
              résultats de recherche selon
            </p>
          </div>
          <div className="border border-gray-500 w-full h-11 flex rounded-full flex-row justify-between items-center px-9">
            <input
              type="text"
              value={searchText}
              onChange={handleInputChange}
              placeholder="Recherche par titre, mot clés, auteur..."
              className="text-gray-800 w-full outline-none"
            />
<Link to="/resultat">
              <FaSearch className="flex justify-end items-end text-gray-700" />
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
