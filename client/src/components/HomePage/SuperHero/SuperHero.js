import React from "react";
import InnerSuperHero from "./InnerSuperHero";

const SuperHero = () => {
  const superHeroObj = [
    {
      icon: "",
      header: "Opening Hours",
      title: "Lorem Ipsum is simply dummy",
      background: '#1CC7C1'
    },
    {
      icon: "",
      header: "Visit Our Location",
      title: "Dhaka Cant. Dhaka-1206",
      background: '#3A4256'

    },
    {
      icon: "",
      header: "Contact us now",
      title: "+880123456789",
      background: '#1CC7C1'

    },
  ];
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-3 mx-3 mt-5 lg:mt-16  gap-3 " >
          {
          superHeroObj.map(elem=> <InnerSuperHero elem={elem}/>)
      }
      </div>
      
  </div>;
};

export default SuperHero;
