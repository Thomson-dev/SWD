import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import message from "../assets/Group 146.svg";
import { Link } from "react-router-dom";

const OtpMessage = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
      </div>
      <div className="flex mt-[2rem] max-w-[500px] min-h-screen flex-col mx-auto justify-center items-center  ">
        <img src={message} alt="" />
        <p className="text-center nunito-regular font-medium max-w-md text-[#686868] text-base mt-7 ">
          An OTP code has been sent to segunsolaru@gmail.com. Check your email
          to get the code
        </p>
        <Link to="/verifyOtp" className="w-full">
          <button className="bg-[#532F82] nunito-regular mt-7 w-full text-lg rounded-md h-[78px] text-white">
            Next
          </button>
        </Link>
      </div>

      <div className="bg-[#532F82] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default OtpMessage;
