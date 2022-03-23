import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../../images/chair.png";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 md:gap-3 my-3">
        <div className=" md:flex md:flex-col md:justify-center md:items-start text-center md:text-left p-4">
          <h1 className="text-2xl  md:text-3xl lg:text-5xl  font-bold text-default">
            Your New Smile <br /> Start Here
          </h1>
          <p className=" text-sm my-4 md:w-4/5 text-[#CCCCCD]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 
          </p>
          <Link to='/appointment' type="button" className="btn">GET APPOINMENT</Link>
        </div>
        <div className="md:flex md:items-center md:justify-center mx-auto w-4/5">
          <img src={heroImg} alt="hero img"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
