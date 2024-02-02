import React from "react";
import { Link } from "react-router-dom";
import image3 from "../Asset 24.png";
import image4 from "../Asset 9.png";
const titleStyle = {
  WebkitTextStroke: "0.5px #EDEDED",
};

function Page2() {
  return (
    <div className=" w-full bg-[#1B1A1A] md:mt-0 mt-9">
    
    <div className=" w-full bg-[#1B1A1A] md:p-12 p-4">
      <div className="relative flex flex-row w-full border-[0.5px]  p-8 border-[#EDEDED] md:mt-[30px]">
      <img className="absolute top-0 left-0 -translate-x-[30px] -translate-y-[10px] flex w-[60px] f-fit -mt-[45px] md:w-[80px] -mr-4 " src={image3} />
      <div className="flex flex-col md:w-1/2 w-full">
        <span className="text-[#1B1A1A] font-apercu md:text-[64px] text-[28px]" style={titleStyle}>
          C'EST QUOI
        </span>
        <div className="flex flex-row gap-x-[80px]">
        <div className="flex flex-row -mt-3 md:-mt-9"> 
          <p className="text-[#EDEDED] font-apercu md:text-[64px] text-[28px] ">
          LE TC<span className="text-[#E13895]">X</span> ?
          </p>
         
        </div>
        <img className="flex -mt-[45px] md:hidden -mr-4 " src={image4} />

        </div>
        <div className="flex mt-6 w-[93%] md:hidden">
      <p className="text-[#EDEDED] text-[14px] font-surpia-sans">
      <span className="text-[#5ACAEA]">Le Training Camp</span> est un camp de formations accélérées axées sur les technologies d’actualité et tout ce qui touche l’entrepreneuriat.
      Cet événement s’étend sur <span className="text-[#F89E57]">3 jours</span> successifs et est destiné aux étudiants souhaitant acquérir ou développer des compétences dans les domaines cités. Ceci dans un cadre stimulant la créativité, l’échange  et le travail collaboratif, selon le concept du <span className="text-[#5BBB5E]">Learning by Doing</span>.
    </p>
    
    </div>
        <div className="md:flex hidden">
        <div className="relative group w-20 h-20 mt-9 bg-[#F89E57] transition-transform duration-200 ease-in-out hover:transform hover:w-[350px]">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <p className="text-[#EDEDED] font-surpia-sans ">C'est bien le TC !</p>
        </div>
      </div>
      </div>
      </div>
      <div className="md:flex w-1/2 mt-[120px] hidden">
    <p className="text-[#EDEDED] text-[14px] font-surpia-sans w-[80%]">
      <span className="text-[#5ACAEA]">Le Training Camp</span> est un camp de formations accélérées axées sur les technologies d’actualité et tout ce qui touche l’entrepreneuriat.
      Cet événement s’étend sur <span className="text-[#F89E57]">3 jours</span> successifs et est destiné aux étudiants souhaitant acquérir ou développer des compétences dans les domaines cités. Ceci dans un cadre stimulant la créativité, l’échange  et le travail collaboratif, selon le concept du <span className="text-[#5BBB5E]">Learning by Doing</span>.
    </p>
    
    </div>
    
    </div>
    </div>
    </div>
  );
}

export default Page2;
