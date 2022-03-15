import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InnerSuperHero = (props) => {
  const { header, icon, title, superBg } = props.elem;
  return (
    <div>
      <div className="">
        <div className="lg:flex lg:items-center lg:justify-center text-center md:leading-3 my-3 gap-5 p-8 rounded text-white shadow " style={{backgroundColor: `${superBg}`}}>
          <FontAwesomeIcon icon={icon}  className="text-white text-3xl  lg:text-5xl" />
          <div>
            <h2 className="font-bold text-lg">{header}</h2>
            <small>{title}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerSuperHero;
