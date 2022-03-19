import { format } from "date-fns";
import React from "react";
import InnerAppContainer from "./InnerAppContainer";

const AppContainer = () => {
  const appContainerObj = [
    {
      name: "Teeth Orthodontics",
      time: "9.00Am -10.00Am",
    },
    {
      name: "Cosmetic Dentistry",
      time: "11.00Am -12.00Pm",
    },
    {
      name: "Teeth Cleaning",
      time: "3.00Pm -4.00Pm",
    },
    {
      name: "Cavity Protection",
      time: "6.00Pm -7.00Pm",
    },
    {
      name: "Teeth Orthodontics",
      time: "9.00Am -10.00Am",
    },
    {
      name: "Teeth Orthodontics",
      time: "9.00Am -10.00Am",
    },
  ];
  const date = format(new Date(), "LLLL dd, yyyy");
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <p className="text-2xl font-bold text-textDefault text-center my-12">Available Appointments on {date}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  text-center">
        {appContainerObj.map((items) => (
          <InnerAppContainer items={items} />
        ))}
      </div>
    </div>
  );
};

export default AppContainer;
