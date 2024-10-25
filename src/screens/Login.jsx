import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
      </div>
      <div className="flex mt-[2rem] max-w-[500px] flex-col mx-auto justify-center py-8 ">
        <div className="">
          <span className="text-base nunito-regular">Jump right back in</span>
          <h2 className="text-4xl playfair-regular ">Login</h2>
        </div>
        <div className="flex space-y-7 mt-[2rem]  w-full  flex-col">
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
              Password
            </span>
            <div className="relative mt-2">
              <input
                className="h-[64px] w-full bg-[#F8FAFD] outline-none rounded-md px-2 border border-[#E7EAF1] pr-10"
                type="password"
              />
              <IoEyeOutline className="absolute text-lg right-3 top-1/2 transform -translate-y-1/2 text-[#A16AE8] cursor-pointer" />
            </div>

            <span className="text-[#A16AE8] mt-4 text-right"> <Link to ='/forgotPassword'> Forgot password?</Link>  </span>
          </div>

          <button className="bg-[#532F82] nunito-regular   text-lg rounded-md h-[78px] text-white">
            Login
          </button>
          <h6 className="text-lg nunito-regular text-[#A3B1BF] text-center">
            
            Don’t have an account?
            <span className="text-[#532F82]">
        <Link to="/register">Sign Up</Link>
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

export default Login;

