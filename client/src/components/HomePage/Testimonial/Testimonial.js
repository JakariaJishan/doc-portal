import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Testimonial = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto  px-4 mb-40 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 p-5 mt-6 text-center">
          <div className=" md:text-left">
            <p className="text-2xl font-bold text-[#64CCCC]">Testimonial</p>
            <p className="text-4xl my-4 text-default font-bold">What's Our Patients <br/>Says</p>
          </div>
          <div className="md:text-right">
            <FontAwesomeIcon className="text-9xl text-[#D6F6F6]" icon={faQuoteLeft} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
