import React from "react";
import treatment from "../../../images/treatment.png";
const DentalCare = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto  px-4 mb-40 sm:px-6 lg:px-8">
        <div className="md:grid grid-cols-2 mt-5">
          <div className="flex justify-center items-center ">
            <img src={treatment}  className="object-cover w-1/2 md:w-3/4" alt="sdf"></img>
          </div>
          <div className="md:flex items-center justify-center">
            <div className="text-center md:text-left">
              <p className="text-2xl my-3 lg:text-5xl  text-default font-bold">
                Exceptional Dental Care, on Your Terms
              </p>
              <div className="my-3 text-gray-400 lg:text-3xl">
                <small>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumis that it has a more-or-less
                  normal distribution of letters,as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page
                </small>
              </div>

              <button className="bg-gradient-to-r from-[#19D3AF] to-[#0FCFEA]  px-4 py-2 font-bold text-white rounded ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
