import React from "react";
import hero from "./../assets/hero.jpg";
import hero2 from "./../assets/hero2.jpg";

const Hero = () => {
  return (
    <div className="bg-white text-gray-500 font-mono p-10 rounded-md w-[90%] hero-main ">
      <div className="rounded-md">
        <img src={hero2} alt="Hero" className="cover rounded-md w-[100%]" />
      </div>
      <div className="bg-white font-bold text-2xl mt-3">
        Welcome to Star Wars
      </div>
      <div className="bg-white font-bold text-2xl">Dashboard</div>
      <div className="bg-white mt-3">
        Star Wars is an American epic space opera multimedia franchise created
        by George Lucas, which began with the eponymous 1977 film and quickly
        became a worldwide pop culture phenomenon.
      </div>
    </div>
  );
};

export default Hero;
