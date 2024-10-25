import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoEyeOutline } from "react-icons/io5";

const ResetPassword = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
      </div>
      <div className="flex mt-[2rem] max-w-[500px] flex-col mx-auto justify-center py-8 ">
        <div className="">
          <h2 className="text-4xl mb-4 playfair-regular "> Reset password</h2>

          <span className="text-base  nunito-regular">
            Set your new password
          </span>
        </div>
        <div className="flex space-y-7 mt-[2rem]  w-full  flex-col">
          <div className="flex-col flex">
            <span className="text-lg nunito-regular text-[#603F8B]">
              {" "}
              Enter new password
            </span>
            <div className="relative mt-2">
              <input
                className="h-[64px] w-full bg-[#F8FAFD] outline-none rounded-md px-2 border border-[#E7EAF1] pr-10"
                type="password"
              />
              <IoEyeOutline className="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>

          <div className="flex-col flex">
            <span className="text-lg nunito-regular text-[#603F8B]">
              {" "}
              Re-enter new password
            </span>
            <div className="relative mt-2">
              <input
                className="h-[64px] w-full bg-[#F8FAFD] outline-none rounded-md px-2 border border-[#E7EAF1] pr-10"
                type="password"
              />
              <IoEyeOutline className="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>

          <button className="bg-[#532F82] nunito-regular   text-lg rounded-md h-[78px] text-white">
            Reset password
          </button>
          <h6 className="text-lg nunito-regular text-[#A3B1BF] text-center">
            Or
            <span className="text-[#532F82]"> Create new account.</span>{" "}
          </h6>
        </div>
      </div>

      <div className="bg-[#532F82] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ResetPassword ;
