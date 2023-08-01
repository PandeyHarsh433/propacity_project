import React from "react";
import Logo from "./../assets/logo.png";

const Navbar = ({ handleSearch }) => {
  return (
    <div className="flex justify-between items-center pr-5 mx-5 md:mx-1">
      <div>
        <img src={Logo} alt="logo" className="w-[5rem] md:w-[6rem] nav-img" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md py-2 px-5 text-white nav-input"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
