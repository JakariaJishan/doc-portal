import {
  faClock,
  faLocationDot,
  faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InnerSuperHero from "./InnerSuperHero";

const SuperHero = () => {
  const superHeroObj = [
    {
      icon: faClock,
      header: "Opening Hours",
      title: "Lorem Ipsum is simply ",
      superBg: "#1CC7C1",
    },
    {
      icon: faLocationDot,
      header: "Visit Our Location",
      title: "Dhaka Cant. Dhaka-1206",
      superBg: "#3A4256",
    },
    {
      icon: faPhoneVolume,
      header: "Contact us now",
      title: "+880123456789",
      superBg: "#1CC7C1",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-3 mx-3 mt-5 lg:mt-20  gap-4 ">
        {superHeroObj.map((elem) => (
          <InnerSuperHero elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default SuperHero;
