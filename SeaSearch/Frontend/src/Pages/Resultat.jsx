import React from "react";
import {} from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

function Resultat() {
  return (
    <div className="flex flex-col p-8">
    <div className="border border-gray-500 w-full h-11 flex rounded-full flex-row justify-between items-center px-9 ">
        <p className="text-slate-600">Recherche par titre, mot clés, auteur...</p>
        <FaSearch className="flex justify-end items-end text-gray-700"/>
        </div>
    <div className="flex flex-row p-8 overflow-y-auto">
   
      <div className="flex flex-col w-[20%] gap-y-6 p-x-4 ">
        <p className="text-[#D477AF] font-[PlusJakatraMedium]">Filtres</p>
        <div className="flex flex-rox gap-x-4">
          <input type="checkbox" class="border-gray-300 rounded h-5 w-3" />
          <div class="flex flex-col">
            <h1 class="text-gray-700 leading-none">Auteur</h1>{" "}
          </div>
        </div>
        <div className="flex flex-rox gap-x-4">
          <input type="checkbox" class="border-gray-300 rounded h-5 w-3" />
          <div class="flex flex-col">
            <h1 class="text-gray-700 leading-none">Auteur</h1>{" "}
          </div>
        </div>
        <div className="flex flex-rox gap-x-4  ">
          <input type="checkbox" class="border-gray-300 rounded h-5 w-3" />
          <div class="flex flex-col">
            <h1 class="text-gray-700 leading-none">Auteur</h1>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[70%]">
        <p className=" text-[#204C78] font-[PlusJakatraMedium]">
          Dead regions in the cochlea: Diagnosis, perceptual consequences, and
          implications for the fitting of hearing aids
        </p>
        <div className="flex flex-row text-[#577BBC] gap-x-10 ">
          <p>Nom auteur</p>
          <p>Année</p>
          <p>Edition</p>
        </div>

        <div className="flex flex-row gap-x-10 mt-2 mb-2 ">
          <div className="flex flex-row gap-x-2 items-center">
            <IoReaderOutline />
            <a className="font-[PlusJakatraMedium]" href="#">
              Consulter
            </a>
          </div>
          <a className="text-red-600 font-[PlusJakatraMedium]" href="#">
            [PDF]
          </a>
          <div className="flex flex-row gap-x-2 items-center">
            <FaRegStar />
            <a className="font-[PlusJakatraMedium]" href="#">
              Sauvegarder
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resultat;
