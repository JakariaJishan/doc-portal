import React from "react";
import treatment from "../../../images/treatment.png";
const DentalCare = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid grid-cols-2 mt-5">
          <div className="flex justify-center items-center">
            <img src={treatment} width="80%" alt="sdf"></img>
          </div>
          <div>
            <p className="text-sm md:text-4xl  text-default font-bold">
              Exceptional Dental Care, on Your Terms
            </p>
            <small className="   text-gray-400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
