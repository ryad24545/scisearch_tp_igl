import {React,useState } from "react";
import {} from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


function Landing() {
  const [searchText, setSearchText] = useState('');
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="flex justify-center p-14 ">
      
    </div>
  );
}

export default Landing;
