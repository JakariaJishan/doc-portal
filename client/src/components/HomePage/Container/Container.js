import React from "react";
import heroBg from "../../../images/bg.png";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
const Container = () => {
  return (
    <div>
      <div className="relative">
        <Nav />
        <Hero />
        <div className="absolute top-0 left-0 -z-10 ">
          <div>
            <div className="  md:grid md:grid-cols-3 ">
              <img src={heroBg} alt="background hero" className="hidden md:block md:col-span-2"></img>
              <div className=" bg-default "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
