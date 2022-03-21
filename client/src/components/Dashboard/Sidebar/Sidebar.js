import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      {showSidebar ? (
        <button
          className="m-5 md:hidden text-4xl text-white items-center cursor-pointer fixed  z-50"
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
      )}

      <div
        className={` md:hidden   bg-orange-600  p-10 pr-20 text-white  h-screen z-40  ease-in-out duration-300  ${
          showSidebar ? "w-72" : "hidden"
        }`}
      >
        <h3 className="mt-20  text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
      </div>
      {/* for md devices */}
      <div
        className={`hidden  md:block w-[50vw] bg-orange-600  p-10 pr-20 text-white  h-screen z-40  `}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
