import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
      </div>
      <div className="flex mt-[2rem] max-w-[500px] flex-col mx-auto justify-center py-8 ">
        <div className="">
          <h2 className="text-4xl playfair-regular "> Forgot password</h2>
          <p className="text-base mt-3 nunito-regular">
            Enter your email and well send you a mail on how to reset your
            password.
          </p>
        </div>
        <div className="flex space-y-7 mt-[2rem]  w-full  flex-col">
          <div className="flex-col flex">
            <span className="text-lg nunito-regular text-[#603F8B]">
              {" "}
              Email
            </span>
            <div className="relative mt-2">
              <input
                className="h-[64px] w-full bg-[#F8FAFD] outline-none rounded-md px-2 border border-[#E7EAF1] pr-10"
                type="email"
              />
              <MdOutlineEmail className="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>

          <Link className="w-full" to="/otpMessage">
            <button className="bg-[#532F82] nunito-regular text-lg rounded-md h-[78px] text-white w-full">
              Send email
            </button>
          </Link>
          <h6 className="text-lg nunito-regular text-[#A3B1BF] text-center">
            Or
            <span className="text-[#532F82]">
              {" "}
              <Link to="/login"> Login </Link>{" "}
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

export default ForgotPassword;
