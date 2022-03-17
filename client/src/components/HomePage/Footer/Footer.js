import {
    faFacebookF,
    faGoogle,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import footerBg from '../../../images/footer-bg.png';
const Footer = () => {
  return (
    <div style={{backgroundImage:`url(${footerBg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-5 text-center py-12">
          <div className="md:text-left leading-8">
            <p className="text-[#7E859A] md:mt-14">Emergency Dental Care</p>
            <p className="text-[#7E859A]">Check Up</p>
            <p className="text-[#7E859A]">Treatment of professional diseases</p>
            <p className="text-[#7E859A]">Tooth extraction</p>
            <p className="text-[#7E859A]">Check Up</p>
          </div>
          <div className="md:text-left leading-8">
            <p className="text-xl my-3 text-textDefault font-bold">Services</p>
            <p className="text-[#7E859A] ">Emergency Dental Care</p>
            <p className="text-[#7E859A]">Check Up</p>
            <p className="text-[#7E859A]">Treatment of professional diseases</p>
            <p className="text-[#7E859A]">Tooth extraction</p>
            <p className="text-[#7E859A]">Check Up</p>
            <p className="text-[#7E859A]">Check Up</p>
            <p className="text-[#7E859A]">Check Up</p>
          </div>
          <div className="md:text-left leading-8">
            <p className="text-xl my-3 text-textDefault font-bold">
              Oral Health
            </p>
            <p className="text-[#7E859A] ">Emergency Dental Care</p>
            <p className="text-[#7E859A]">Check Up</p>
            <p className="text-[#7E859A]">Treatment of professional diseases</p>
            <p className="text-[#7E859A]">Tooth extraction</p>
            <p className="text-[#7E859A]">Check Up</p>
            <p className="text-[#7E859A]">Check Up</p>
            <p className="text-[#7E859A]">Check Up</p>
          </div>
          <div className="md:text-left leading-8">
            <p className="text-xl my-3 text-textDefault font-bold">
              Our Address
            </p>
            <p className="text-[#7E859A] ">
              New York - 101010 Hudson <br />
              Yards
            </p>
            <div className="my-5">
              <FontAwesomeIcon
                className="rounded-full cursor-pointer hover:bg-textDefault border-2 border-textDefault transition duration-500 w-4 h-4 p-3 text-textDefault hover:text-white"
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className="rounded-full cursor-pointer hover:bg-textDefault border-2 border-textDefault transition duration-500 w-4 h-4 p-3 text-textDefault hover:text-white mx-5"
                icon={faGoogle}
              />
              <FontAwesomeIcon
                className="rounded-full cursor-pointer hover:bg-textDefault border-2 border-textDefault transition duration-500 w-4 h-4 p-3 text-textDefault hover:text-white"
                icon={faTwitter}
              />
            </div>
            <div className="mt-10">
              <p className="text-[#7E859A]">Call Now</p>
              <button className="btn ">
                +2025550295
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center my-5 text-[#7E859A]">Copyright {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  );
};

export default Footer;
