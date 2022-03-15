import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-end h-16">
            <div className="flex items-center justify-between ">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 md:hidden"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <a
                    href="#"
                    className=" bg-gradient-to-r hover:from-green-400 hover:to-blue-500 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dental Services
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reviews
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="absolute w-full backdrop-blur-md  right-0 z-10  h-screen  md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dental Services
                </a>

                <a
                  href="#"
                  className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reviews
                </a>

                <a
                  href="#"
                  className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
