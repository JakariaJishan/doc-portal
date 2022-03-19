import React, { useState } from "react";

const Modal = ({ showModal, setShowModal }) => {
    const [time, setTime] = useState();

  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center   items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-5 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5  rounded-t">
                  <h3 className="text-xl font-semibold text-textDefault">
                    Teeth Cleaning
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div class="w-full ">
                    <div class="relative">
                      
                    </div>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white my-3 focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Your Name"
                    />
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white my-3 focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Phone Number"
                    />
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white my-3 focus:border-gray-500"
                      id="grid-last-name"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
