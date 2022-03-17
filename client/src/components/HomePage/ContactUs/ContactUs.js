import React from "react";
import contactBg from "../../../images/appointment-bg.png";
const ContactUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="backdrop-opacity-10 bg-default/90">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
          <div className="py-12">
            <p className="text-textDefault font-bold text-2xl text-center">
              CONTACT US
            </p>
            <p className="text-white font-bold text-3xl md:text-4xl my-3 text-center">
              Always Contact With Us
            </p>
          </div>
          <div className="w-2/3 mx-auto text-center">
            <input
              type="text"
              placeholder="Email Address*"
              required
              className="w-full text-lg rounded outline-none px-3 py-2 md:px-5 md:py-4 text-gray-400"
            ></input>
            <input
              type="text"
              placeholder="Subject*"
              required
              className="w-full text-lg rounded outline-none px-3 py-2 md:px-5 md:py-4 my-5 text-gray-400"
            ></input>
            <textarea
              placeholder="Your Message*"
              required
              className="w-full text-lg rounded outline-none h-40 px-5 py-4 text-gray-400"
            ></textarea>
            <button className="bg-gradient-to-r my-5 from-[#19D3AF] to-[#0FCFEA]  px-16 py-2 font-bold text-white rounded mb-5">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
