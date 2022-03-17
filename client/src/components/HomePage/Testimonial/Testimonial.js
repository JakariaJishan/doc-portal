import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import InnerTestimonial from "./InnerTestimonial";
const Testimonial = () => {
  const testimialObj =[
    {
      title: "It is a long established fact that by the readable content of a lotlayout. The point of using Lorem a more-or-less normal distribut o using Content here, content",
      img: people1,
      name:'Winson Harry',
      location:'California'
    },
    {
      title: "It is a long established fact that by the readable content of a lotlayout. The point of using Lorem a more-or-less normal distribut o using Content here, content",
      img: people2,
      name:'Winson Harry',
      location:'California'
    },
    {
      title: "It is a long established fact that by the readable content of a lotlayout. The point of using Lorem a more-or-less normal distribut o using Content here, content",
      img: people3,
      name:'Winson Harry',
      location:'California'
    },
  ]
  return (
    <div>
      <div className="max-w-7xl mx-auto  px-4  sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 p-5 mt-6 text-center">
          <div className=" md:text-left">
            <p className="text-2xl font-bold text-[#64CCCC]">Testimonial</p>
            <p className="text-4xl my-4 text-default font-bold">What's Our Patients <br/>Says</p>
          </div>
          <div className="md:text-right">
            <FontAwesomeIcon className="text-9xl text-[#D6F6F6]" icon={faQuoteLeft} />
          </div>
        </div>
        <div className='grid md:grid-cols-3 gap-5 text-center '>
          {
            testimialObj.map(items => <InnerTestimonial items={items}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
