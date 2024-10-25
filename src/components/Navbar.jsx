import React from "react";
import logo from "../assets/Group 65.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Business Directory", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/price" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <div className="flex justify-between py-5 w-full  items-center">
      <div className="w-[30%] ">
        <img
          src={logo}
          alt="logo"
          className="w-[120px] object-cover h-[54px]"
        />
      </div>
      <div className="flex w-[70%]  justify-between items-center ">
        <div className="flex items-center space-x-16">
          <CiSearch className="text-3xl" />

          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-lg text-[#686868] nunito-regular "
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex space-x-14">
          <button className=" text-xl text-[#1E1E4B] nunito-regular ">
            <Link to="/login"> Login</Link>
          </button>

          <button className=" text-xl nunito-regular px-8 py-2 border-2 border-[#603F8B] rounded-lg">
          <Link to="/register">  Sign up</Link>
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
