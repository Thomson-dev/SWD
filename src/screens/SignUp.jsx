import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { IoEyeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdStorefront } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [activeButton, setActiveButton] = useState("regular");
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
      </div>
      <div className="flex mt-[2rem] max-w-[500px] flex-col mx-auto justify-center py-8 min-h-screen ">
        <div className="">
          <span className="text-base nunito-regular">Sign up for free!</span>
          <h2 className="text-4xl playfair-regular ">Get started</h2>
        </div>

        <div className="flex my-7 gap-8">
          <button
            className={`flex border-2 font-semibold relative gap-5 justify-center text-xl py-5 rounded-md w-[206px] items-center ${
              activeButton === "regular"
                ? " border-[#603F8B] text-black "
                : "text-slate-500"
            }`}
            onClick={() => setActiveButton("regular")}
          >
            <CgProfile
              className={`text-xl font-bold ${
                activeButton === "regular" ? "text-[#603F8B]" : "text-slate-500"
              }`}
            />{" "}
            Regular user
            {activeButton === "regular" && (
              <div className="rounded-full bg-[#603F8B] absolute -top-2 -right-3 p-1">
                <FaCheck className="text-white" />
              </div>
            )}
          </button>
          <button
            className={`flex relative font-semibold border-2 gap-5 justify-center text-xl py-5 rounded-md w-[206px] items-center ${
              activeButton === "provider"
                ? " border-[#603F8B] border  text-black "
                : "text-slate-500"
            }`}
            onClick={() => setActiveButton("provider")}
          >
            <MdStorefront
              className={`text-xl font-bold ${
                activeButton === "provider"
                  ? "text-[#603F8B]"
                  : "text-slate-500"
              }`}
            />{" "}
            Service provider
            {activeButton === "provider" && (
              <div className="rounded-full bg-[#603F8B] absolute -top-2 -right-3 p-1">
                <FaCheck className="text-white" />
              </div>
            )}
          </button>
        </div>
        <div className="flex space-y-7 mt-[2rem]  w-full  flex-col">
          <div className="flex-col flex">
            <span className="text-lg text-[#603F8B]"> Full name</span>
            <input
              className="h-[64px] mt-2 bg-[#F8FAFD] outline-none rounded-md px-2  border border-[#E7EAF1]"
              type="text"
            />
          </div>

          <div className="flex-col flex">
            <span className="text-lg text-[#603F8B]"> Email</span>
            <input
              className="h-[64px] mt-2 bg-[#F8FAFD] outline-none rounded-md px-2  border border-[#E7EAF1]"
              type="text"
            />
          </div>

          <div className="flex-col flex">
            <span className="text-lg nunito-regular text-[#603F8B]">
              {" "}
              Phone number
            </span>
            <input
              className="h-[64px] mt-2 bg-[#F8FAFD] outline-none rounded-md px-2  border border-[#E7EAF1]"
              type="text"
            />
          </div>

          <div className="flex-col flex">
            <span className="text-lg nunito-regular text-[#603F8B]">
              {" "}
              Password
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
            <span className="text-lg nunito-regular  text-[#603F8B]">
              {" "}
              Re-enter password{" "}
            </span>
            <div className="relative mt-2">
              <input
                className="h-[64px] w-full bg-[#F8FAFD] outline-none rounded-md px-2 border border-[#E7EAF1] pr-10"
                type="password"
              />
              <IoEyeOutline className="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-[#532F82] dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              style={{ accentColor: "#532F82" }}
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-base nunito-regular font-medium "
            >
              I agree to Dutiful’s{" "}
              <span className="text-[#532F82]">terms and conditions</span>
            </label>
          </div>
          <button className="bg-[#532F82] nunito-regular   text-lg rounded-md h-[78px] text-white">
            Sign up
          </button>
          <h6 className="text-lg nunito-regular text-[#A3B1BF] text-center">
            Already have an account?{" "}
            <span className="text-[#532F82]">
              <Link to="/login">Login</Link>
            </span>{" "}
          </h6>
        </div>
      </div>

      <div className="bg-[#532F82] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
