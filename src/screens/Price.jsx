import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";

const Price = () => {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto w-[95%]">
        <Navbar />
        <div className="flex flex-col my-10 items-center">
          <h1 className="text-center playfair-regular text-4xl">
            Plans to Suit Your Business Budget
          </h1>
          <p className="text-center  nunito-regular mt-5 text-[#656565] max-w-[44rem]">
            Our fully organized plans deliver valuable content that showcases
            your services and skills, drives Lead, covers all features, and
            gives customers a clear idea to be able to choose your services.
          </p>
        </div>

        <div className=" p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Plan */}
              <div className="bg-white  rounded-lg  p-6">
                <h3 className="text-xl   font-bold text-black  ">Basic</h3>
                <p className="text-5xl playfair-regular mt-3 font-bold">Free</p>
                <button className="mt-4 w-full bg-[#532F82] font-medium text-white py-5 rounded-lg">
                  Get started
                </button>
                <ul className="mt-6 nunito-regular space-y-4">
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Access to dashboard</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 businesses</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 products/services</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 images</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Unlimited keywords</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display service hours and prices</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display address, contact and email</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Instant chat</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Reviews and ratings</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Profile visibility</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Instant notifications</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display website and social network</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Quotes</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Bookmarks</li>
                  </div>
                </ul>
              </div>

              {/* Standard Plan */}
              <div className="bg-white rounded-lg  p-6">
                <h3 className="text-xl   font-bold text-black  ">Standard</h3>
                <p className="text-5xl playfair-regular mt-3 font-bold">
                  {" "}
                  <sup className="text-lg">NGN</sup>20,000
                  <sub className="text-base">/year</sub>
                </p>
                <button className="mt-4 w-full bg-[#532F82] font-medium text-white py-5 rounded-lg">
                  Get started
                </button>
                <ul className="mt-6 nunito-regular space-y-4">
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Access to dashboard</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 businesses</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 products/services</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 images</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Unlimited keywords</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display service hours and prices</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display address, contact and email</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Instant chat</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Reviews and ratings</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Profile visibility</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Instant notifications</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display website and social network</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Quotes</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Bookmarks</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Number of profile views</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Verified badge (Gold)</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Accept & Sell appointment</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Latest offers</li>
                  </div>
                
                </ul>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-lg  p-6">
              <h3 className="text-xl   font-bold text-black  ">Premiu</h3>
                <p className="text-5xl playfair-regular mt-3 font-bold">
                  {" "}
                  <sup className="text-lg">NGN</sup>30,000
                  <sub className="text-base">/year</sub>
                </p>
                <button className="mt-4 w-full bg-[#532F82] font-medium text-white py-5 rounded-lg">
                  Get started
                </button>
                <ul className="mt-6 nunito-regular space-y-4">
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Access to dashboard</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 businesses</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 products/services</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Add up to 2 images</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Unlimited keywords</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display service hours and prices</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display address, contact and email</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Instant chat</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Reviews and ratings</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Profile visibility</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Instant notifications</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Display website and social network</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Quotes</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Bookmarks</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Number of profile views</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Verified badge (Gold)</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Accept & Sell appointment</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>Latest offers</li>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaCheck />
                    <li>24/7 service and support</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#532F82] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Price;
