import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";
import './InnerBlog.css';
const InnerBlog = (props) => {
  const { figure, name, title, heading } = props.items;
  const date = format(new Date(), "dd LLLL yyyy");
  return (
    <div className="relative rounded shadow-lg p-8 my-5">
      <div>
        <div className="text-center lg:text-left">
          <div className="flex justify-start items-center my-8">
            <img src={figure} width="50px" alt="asd"></img>
            <div className="ml-5 text-left">
              <p className="text-sm lg:text-2xl font-bold">{name}</p>
              <p className="text-sm lg:text-lg text-[#C3C1C9]">{date}</p>
            </div>
          </div>
          <p className="text-black text-2xl font-bold">{heading}</p>
          <br />
          <p className=" text-[#B2B1B7] text-xl">{title}</p>
        </div>
        <div className=" bg-gradient-to-r  from-[#19D3AF] to-[#0FCFEA]  absolute z-0 inset-0 duration-700 opacity-0 hover:opacity-100 px-5 py-12 rounded" >
          <div className="bg-quoteImg bg-center bg-no-repeat bg-contain ">
            <div className="z-50">
              <p className=" text-xl font-semibold  text-white  ">{name}</p>
              <p className="text-[#fff]">{date}</p>
              <br />
              <p className="text-white text-2xl font-semibold">{heading}</p>
              <FontAwesomeIcon size="2x" className=" bottom-9 absolute  fa-beat text-white font-semibold" icon={faArrowRightLong} />
            </div>
          </div>
          {/* <div className="">
            <FontAwesomeIcon
              className="text-9xl absolute inset-0   text-[#111616]"
              icon={faQuoteLeft}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InnerBlog;
