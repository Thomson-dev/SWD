import React from "react";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Contact from "./Contact";

const Hero = () => {
  const cards = [
    {
      icon: <RiCustomerServiceLine />,
      title: "Customer support",
      description: "Please fill out the form below",
    },
    {
      icon: <GrMapLocation />,
      title: "Business address",
      description:
        "Suites (C113 & C114) Akord Shopping Mall,\nBogije, Elemoro, 101001,\nLagos, Nigeria",
    },
    {
      icon: <LiaPhoneVolumeSolid />,
      title: "Phone number",
      description: "+234 903 921 6724",
    },
  ];
  return (
    <div className="relative">
      <div className="bg-[#532F82]  flex flex-col text-white  items-center min-h-[268px]">
        <div className="mt-10">
          <h3 className="text-center playfair-regular text-2xl ">
            {" "}
            Get in touch
          </h3>
          <p className=" text-lg nunito-regular mt-3">
            {" "}
            We are here to support you throughout the process of getting your
            business listed.
          </p>
        </div>

        <div className="  grid absolute top-[10rem] max-w-[1400px] mx-auto grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white  text-black shadow min-w-[413px] min-h-[200px] p-4 rounded-md"
            >
              <div className="flex  flex-col  justify-center items-center space-x-5">
                <div className="flex flex-row space-x-4">
                <span className="text-4xl text-[#1E1E4B] font-bold">{card.icon}</span>{" "}
                <h2 className="text-2xl text-[#1E1E4B]  nunito-regular ">{card.title}</h2>
                </div>
             
                <p className="text-center  text-[#656565] max-w-xs nunito-regular text-lg mt-6">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Hero;
