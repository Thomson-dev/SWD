import React from "react";
import dashboard from "../assets/Dashboard.png";

const CTA = () => {
  return (
    <div className=" min-h-[640px] items-center  grid-cols-2  grid">
      <div className="">
        <h3 className="playfair-regular max-w-lg leading-normal text-4xl">
          List and grow your business with just few clicks
        </h3>
        <p className="text-xl nunito-regular mt-5 max-w-xl">
          Eliminate manual work and save time by listing your business or
          service on the best business directory in Nigeria.
        </p>
      </div>
      <div className="min-w-[674px]  bg-[#532F82] relative rounded-xl flex items-center justify-center min-h-[437px]">
        <div className="absolute ">
          <img src={dashboard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
