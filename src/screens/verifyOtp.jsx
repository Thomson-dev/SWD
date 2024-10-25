import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import message from "../assets/Group 146.svg";
import { Link } from "react-router-dom";

const VerifyOtp = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
      </div>
      <div className="flex mt-[2rem] max-w-[500px] min-h-screen flex-col mx-auto justify-center items-center  ">
        <form>
          <div className="flex mb-2 space-x-2 rtl:space-x-revers">
            <div>
              <label htmlFor="code-1" className="sr-only">
                First code
              </label>
              <input
                type="text"
                maxLength="1"
                data-focus-input-init
                data-focus-input-next="code-2"
                id="code-1"
                className="block w-16 h-16 py-3 text-sm font-extrabold text-center text-black bg-[#F3F3F3] border border-gray-[#B6B6E5] rounded-lg  "
                required
              />
            </div>
            <div>
              <label htmlFor="code-2" className="sr-only">
                Second code
              </label>
              <input
                type="text"
                maxLength="1"
                data-focus-input-init
                data-focus-input-prev="code-1"
                data-focus-input-next="code-3"
                id="code-2"
                className="block w-16 h-16 py-3 text-sm font-extrabold text-center text-black bg-[#F3F3F3] border border-gray-[#B6B6E5] rounded-lg  "
                required
              />
            </div>
            <div>
              <label htmlFor="code-2" className="sr-only">
                Second code
              </label>
              <input
                type="text"
                maxLength="1"
                data-focus-input-init
                data-focus-input-prev="code-1"
                data-focus-input-next="code-3"
                id="code-2"
                className="block w-16 h-16 py-3 text-sm font-extrabold text-center text-black bg-[#F3F3F3] border border-gray-[#B6B6E5] rounded-lg  "
                required
              />
            </div>

            <div>
              <label htmlFor="code-2" className="sr-only">
                Second code
              </label>
              <input
                type="text"
                maxLength="1"
                data-focus-input-init
                data-focus-input-prev="code-1"
                data-focus-input-next="code-3"
                id="code-2"
                className="block w-16 h-16 py-3 text-sm font-extrabold text-center text-black bg-[#F3F3F3] border border-gray-[#B6B6E5] rounded-lg  "
                required
              />
            </div>
          </div>
        </form>
        <p className="text-center nunito-regular font-medium max-w-md text-[#686868] text-base mt-7 ">
          Enter OTP code that was sent to your email, segunsolaru@gmail.com.
        </p>
        <button className="bg-[#532F82] nunito-regular  mt-7 w-full  text-lg rounded-md h-[78px] text-white">
          <Link to = '/resetPassword'>    Confirm OTP </Link>
      
        </button>

        <h6 className="text-base nunito-regular mt-5 text-[#A3B1BF] text-center">
          Didn't get a code?
          <span className="text-[#532F82]"> Resend</span>{" "}
        </h6>
      </div>

      <div className="bg-[#532F82] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default VerifyOtp;

