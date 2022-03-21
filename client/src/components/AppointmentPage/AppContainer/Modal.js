import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { myContext } from "../AppointmentMain/AppointmentMain";

const Modal = ({ showModal, setShowModal, name }) => {
  const appointmentDate = useContext(myContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date = new Date();
    data.appointmentDate = appointmentDate ;
    console.log(appointmentDate)
    data.service = name;
    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json())
    .then(success => {
      if(success ){
        setShowModal(false)
        alert('appointment created successfully');
        console.log(success)
      }
    })
  };
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center   items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-5 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5  rounded-t">
                  <p></p>
                  <h3 className="text-xl font-semibold text-textDefault">
                    {name}
                  </h3>
                  <FontAwesomeIcon
                    onClick={() => setShowModal(false)}
                    icon={faCircleXmark}
                    className="cursor-pointer text-gray-400"
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="w-full ">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col"
                    >
                      <input
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                        className="border-2 md:p-3 p-2 rounded-md my-3"
                      />
                      <input
                        {...register("email", {
                          required: true,
                          pattern:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        })}
                        placeholder="Email"
                        className="border-2 md:p-3 p-2 rounded-md my-3"
                      />
                      <input
                        {...register("contact", { required: true })}
                        type="number"
                        placeholder="Phone Number"
                        className="border-2 md:p-3 p-2 rounded-md my-3"
                      />
                      <div className="md:flex md:justify-between md:items-center text-left">
                        <input
                          {...register("age", { required: true })}
                          type="number"
                          placeholder="Age"
                          className="border-2 md:p-3 p-2 rounded-md my-3 w-full "
                        />
                        <input
                          {...register("weight", { required: true })}
                          type="number"
                          placeholder="Weight"
                          className="border-2 md:p-3 p-2 rounded-md my-3 w-full md:mx-3"
                        />
                        <select
                          {...register("gender")}
                          className="border-2 md:p-3 p-2 my-3 rounded-md w-full"
                        >
                          <option value="female">female</option>
                          <option value="male">male</option>
                          <option value="other">other</option>
                        </select>
                      </div>

                      <input
                        className="bg-textDefault text-white py-3 rounded-md font-bold cursor-pointer my-3"
                        type="submit"
                      />
                    </form>
                  </div>
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
