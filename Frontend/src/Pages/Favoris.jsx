import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import FavList from "../Components/FavList";

function Favoris() {
  const [savedBlogs, setSavedBlogs] = useState([]);

  return (
    <div className="flex flex-col p-8">
      <div className="border border-gray-500 w-full h-11 flex rounded-full flex-row justify-between items-center px-9 ">
        <p className="text-slate-600">Recherche par titre, mot clés, auteur...</p>
        <FaSearch className="flex justify-end items-end text-gray-700" />
      </div>

      <div className="flex flex-row p-8 overflow-y-auto">
        <div className="flex flex-col w-[20%] gap-y-6 px-4">
          <p className="text-[#D477AF] font-[PlusJakatraMedium]">Filtres</p>
          <div className="flex flex-row gap-x-4">
            <input type="checkbox" className="border-gray-300 rounded h-5 w-3" />
            <div className="flex flex-col">
              <h1 className="text-gray-700 leading-none">Auteur</h1>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[70%]">
          {/* Pass the savedBlogs and title as props to FavList */}
          <FavList blogs={savedBlogs} title="Saved Blogs" />
        </div>
      </div>
    </div>
  );
}

export default Favoris;
