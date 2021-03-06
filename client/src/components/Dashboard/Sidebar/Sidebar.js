import { faArrowRightFromBracket, faCalendar, faDashboard, faHouseUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    sessionStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <div>
      {/* {showSidebar ? (
        <button
          className="m-5 md:hidden text-4xl text-white items-center cursor-pointer   z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className=" md:hidden  z-30 flex items-center cursor-pointer m-5"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )} */}

      <div
        className={` w-32 md:w-72 fixed h-full top-0 left-0   flex flex-col bg-gradient-to-tr  to-[#19D3AF] from-[#0FCFEA] pt-12 text-sm  p-3 text-white md:text-xl md:px-10  `}
      >
        <Link to="/dashboard/dashboard" className="  font-semibold text-white mb-3 focus:text-gray-700">
         <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon> Dashboard
        </Link>
        <Link
          to="/dashboard/appointment"
          onClick={() => setShowSidebar(false)}
          className="  font-semibold text-white mb-3 focus:text-gray-700"
        >
          <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> Appointment
        </Link>
        <Link
          to="/dashboard/patients"
          onClick={() => setShowSidebar(false)}
          className="  font-semibold text-white mb-3 focus:text-gray-700"
        >
          <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon> Patients
        </Link>
        <Link
          to="/"
          onClick={() => setShowSidebar(false)}
          className="  font-semibold text-white mb-3 focus:text-gray-700"
        >
          <FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon> Home
        </Link>
        
       
        <button onClick={ handleSignOut}className="fixed bottom-5 bg-default px-4 py-3 rounded-md"> <FontAwesomeIcon className="mr-3" icon={faArrowRightFromBracket}></FontAwesomeIcon>Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
